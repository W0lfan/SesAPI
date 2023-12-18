import PropTypes from 'prop-types';
import { useState } from 'react';
import save from '../../../../modules/save';
import appInput from '../../../../../../../public/modules/utilities/input';
import { Tools } from '../../../fields/field';
import { popup } from '../../../../../../../public/modules/utilities/popup';
import { DefaultArticle } from '../../../body';


const ImageRender = ( {image, imageIndex, fieldIndex} ) => {
    const [ img, setImg ] = useState(image.src);


    return (
        <div className={"image-resource" + " " + (imageIndex%2 == 0 ? "right" : "left")} key={imageIndex} id={image.id}>
            <>
                <div className="image">
                    <img src={img} />
                </div>
                <div className="content">
                    <div className="input-container">
                        <div className="box-info">Image link</div>
                        {appInput.new('input','Image link',image.src,'ImageLink',[],function(event) {
                            let value = event.target.value;
                            DefaultArticle.content[fieldIndex].visualResources[imageIndex].src = value;
                            save(DefaultArticle);
                            setImg(value)
                        })}
                    </div>
                    <div className="input-container">
                        <div className="box-info">Image label</div>
                        {appInput.new('input','Image label',image.label,'ImageLabel',[],function(event) {
                            let value = event.target.value;
                            DefaultArticle.content[fieldIndex].visualResources[imageIndex].label = value;
                            save(DefaultArticle);
                        })}
                    </div>
                    <div className="input-container">
                        <div className="box-info">Image description</div>
                        {appInput.new('textarea','Image label',image.label,'ImageDescription', [], function(event) {
                            let value = event.target.value;
                            DefaultArticle.content[fieldIndex].visualResources[imageIndex].description = value;
                            save(DefaultArticle);
                        })}
                    </div>
                </div>
            </>
            <Tools funcs={{
                delete : function() {
                    ContentDeletion(document.getElementById(image.id),fieldIndex,imageIndex);
                }
            }}/>
        </div>
    )
};

function ContentDeletion(p,I,i) {
    popup.new({
        title : "Image deletion",
        description : "Are you sure you want to delete this image?"
    }, [{
        type : "filled",
        container : {text:"Delete"},
        action: function() {
            p.remove();
            DefaultArticle.content[I].visualResources.splice(i,1);
            save(DefaultArticle);
            popup.close();
        }
    }])
}

ImageRender.propTypes = {
    image : PropTypes.object.isRequired,
    imageIndex : PropTypes.number.isRequired,
    fieldIndex : PropTypes.number.isRequired,
};


export default ImageRender;