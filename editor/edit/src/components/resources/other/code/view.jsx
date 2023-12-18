import PropTypes from 'prop-types';
import { useState } from 'react';
import save from '../../../../modules/save';
import appInput from '../../../../../../../public/modules/utilities/input';
import { Tools } from '../../../fields/field';
import { popup } from '../../../../../../../public/modules/utilities/popup';
import { DefaultArticle } from '../../../body';


const CodeRender = ( {code, codeIndex, fieldIndex} ) => {


    return (
        <div className={"code-resource"} key={codeIndex} id={code.id}>
            <>
                <div className="code">
                    {appInput.new('textarea','Code label',code.content,'CodeDescription', [], function(event) {
                        let value = event.target.value;
                        DefaultArticle.content[fieldIndex].visualResources[codeIndex].content = value;
                        save(DefaultArticle);
                    })}
                </div>
                <div className="content">
                    <div className="input-container">
                        <div className="box-info">Code label</div>
                        {appInput.new('input','Code label',code.label,'CodeLabel',[],function(event) {
                            let value = event.target.value;
                            DefaultArticle.content[fieldIndex].visualResources[codeIndex].label = value;
                            save(DefaultArticle);
                        })}
                    </div>
                    <div className="input-container">
                        <div className="box-info">Code description</div>
                        {appInput.new('textarea','Code label',code.label,'CodeDescription', [], function(event) {
                            let value = event.target.value;
                            DefaultArticle.content[fieldIndex].visualResources[codeIndex].description = value;
                            save(DefaultArticle);
                        })}
                    </div>
                </div>
            </>
            <Tools funcs={{
                delete : function() {
                    ContentDeletion(document.getElementById(code.id),fieldIndex,codeIndex);
                }
            }}/>
        </div>
    )
};

function ContentDeletion(p,I,i) {
    popup.new({
        title : "Code deletion",
        description : "Are you sure you want to delete this code?"
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

CodeRender.propTypes = {
    code : PropTypes.object.isRequired,
    codeIndex : PropTypes.number.isRequired,
    fieldIndex : PropTypes.number.isRequired,
};


export default CodeRender;