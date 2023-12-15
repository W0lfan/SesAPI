import PropTypes from 'prop-types';
import '../../style/index.css';
import { useEffect, useRef, useState } from 'react';
import ActualizePopUp from '../../../../../../public/modules/utilities/popup/index';

const ArticleSmallViewActions = ( { article } ) => {
    const [ viewOptions , setOptionsView ] = useState(false);
    const componentRef = useRef(null);

    const handleClickOutside = (event) => {
        if (componentRef.current && !componentRef.current.contains(event.target)) {
            setOptionsView(false);
        }
    };

    useEffect(() => {
        const handleMouseDown = (event) => {
            handleClickOutside(event);
        };

        document.addEventListener('mousedown', handleMouseDown);

        return () => {
            document.removeEventListener('mousedown', handleMouseDown);
        };
    }, []);

    return (
        <div className="open-more-actions" ref={componentRef}>
            <div className="button colorsvg" onClick={() => setOptionsView(!viewOptions)}>
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-160q-33 0-56.5-23.5T400-240q0-33 23.5-56.5T480-320q33 0 56.5 23.5T560-240q0 33-23.5 56.5T480-160Zm0-240q-33 0-56.5-23.5T400-480q0-33 23.5-56.5T480-560q33 0 56.5 23.5T560-480q0 33-23.5 56.5T480-400Zm0-240q-33 0-56.5-23.5T400-720q0-33 23.5-56.5T480-800q33 0 56.5 23.5T560-720q0 33-23.5 56.5T480-640Z"/></svg>
            </div>
            <div className="actions" style={{visibility: !viewOptions ? 'hidden' : 'visible', opacity: !viewOptions ? '0' : '1'}}>
                <div className="small-view-action" onClick={
                        () => ActualizePopUp(
                            {
                                title : "Download existing file",
                                description : "Select your prefered filetype."
                            },
                            [
                                {
                                    type : 'filled',
                                    container : { text : article.general.name + ".txt" },
                                    action : function() {

                                    },
                                    custom_properties : ["buttonContainText"]
                                },
                                {
                                    type : 'filled',
                                    container : { text : article.general.name + ".json" },
                                    action : function() {

                                    },
                                    custom_properties : ["buttonContainText"]
                                }
                            ]
                        )
                }>
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M480-337q-8 0-15-2.5t-13-8.5L308-492q-12-12-11.5-28t11.5-28q12-12 28.5-12.5T365-549l75 75v-286q0-17 11.5-28.5T480-800q17 0 28.5 11.5T520-760v286l75-75q12-12 28.5-11.5T652-548q11 12 11.5 28T652-492L508-348q-6 6-13 8.5t-15 2.5ZM240-160q-33 0-56.5-23.5T160-240v-80q0-17 11.5-28.5T200-360q17 0 28.5 11.5T240-320v80h480v-80q0-17 11.5-28.5T760-360q17 0 28.5 11.5T800-320v80q0 33-23.5 56.5T720-160H240Z"/></svg>
                    </div>
                    <div className="text">
                        Download 
                    </div>
                </div>
                <div className="small-view-action" onClick={
                        () => ActualizePopUp(
                            {
                                title : '"' + article.general.name + '"' + " deletion",
                                description : "Are you sure you want to delete this file?"
                            },
                            [
                                {
                                    type : 'filled',
                                    container : { text : "Delete permanently" },
                                    action : function() {

                                    },
                                    custom_properties : []
                                }
                            ]
                        )
                }>
                    <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M280-120q-33 0-56.5-23.5T200-200v-520q-17 0-28.5-11.5T160-760q0-17 11.5-28.5T200-800h160q0-17 11.5-28.5T400-840h160q17 0 28.5 11.5T600-800h160q17 0 28.5 11.5T800-760q0 17-11.5 28.5T760-720v520q0 33-23.5 56.5T680-120H280Zm120-160q17 0 28.5-11.5T440-320v-280q0-17-11.5-28.5T400-640q-17 0-28.5 11.5T360-600v280q0 17 11.5 28.5T400-280Zm160 0q17 0 28.5-11.5T600-320v-280q0-17-11.5-28.5T560-640q-17 0-28.5 11.5T520-600v280q0 17 11.5 28.5T560-280Z"/></svg>
                    </div>
                    <div className="text">
                        Delete 
                    </div>
                </div>

            </div>
        </div>
    )
}

ArticleSmallViewActions.propTypes = {
    article :                      PropTypes.object.isRequired,
};

export default ArticleSmallViewActions;