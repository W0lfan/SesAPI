import { useState, useEffect, useRef } from "react";

import appInput from "../../../../../../public/modules/utilities/input";
import appSvg from "../../../../../../public/modules/utilities/svg";
import "../index.css";
import PropTypes from 'prop-types';
import ResourceField from "../../resources/link/field";
import { DefaultArticle } from "../../body";
import save from "../../../modules/save";
import OtherResources from "../../resources/other";
import { popup } from "../../../../../../public/modules/utilities/popup";

export const Tools = ({ funcs }) => {
    const [state, setState] = useState(false);
    const toolsRef = useRef(null);

    useEffect(() => {
        // Function to handle clicks outside the .tools component
        const handleClickOutside = (event) => {
            if (toolsRef.current && !toolsRef.current.contains(event.target)) {
                setState(false);
            }
        };

        // Attach the event listener when the component mounts
        document.addEventListener("click", handleClickOutside);

        // Detach the event listener when the component unmounts
        return () => {
            document.removeEventListener("click", handleClickOutside);
        };
    }, []);

    return (
        <div className="tools" ref={toolsRef}>
            <div className="icon" onClick={() => setState(!state)}>
                {appSvg.new('points')}
            </div>
            <div className="parameters" style={{
                opacity: state ? 1 : 0,
                display: state ? "flex" : "none"
            }}>
                <div className="parameter" onClick={() => funcs.delete()}>
                    {appSvg.new('trash')}
                    <div className="name">
                        Delete
                    </div>
                </div>
            </div>
        </div>
    );
}
Tools.propTypes = {
    funcs : PropTypes.object.isRequired,
};

const Field = ( { field,i } ) => {


    return (
        <div className="field" id={i+"field"}>
            <div className="content">
                <div className="header">
                    <div className="name input-container">
                        <div className="box-info">Field name</div>
                        {appInput.new('input','Field name',field.general.name || "New field","fieldName",[],function(event) {
                            let value = event.target.value;
                            DefaultArticle.content[i].general.name = value;
                            save(DefaultArticle);
                        })}
                    </div>
                    <div className="description input-container">
                        <div className="box-info">Field description</div>
                        {appInput.new('textarea','Field description',field.general.description || "","fieldDescription",["autosize"], function(event) {
                            let value = event.target.value;
                            DefaultArticle.content[i].general.description = value;
                            save(DefaultArticle);
                        })}
                    </div>
                </div>
                <OtherResources fieldType={i} />
                <ResourceField fieldType={i} />
            </div>
            <Tools funcs={{
                delete : function() {
                    ContentDeletion(i);
                }
            }} />
        </div>
    )
}

function ContentDeletion(id) {
    const p = document.getElementById(id+"field");
    popup.new({
        title : "Confirm deletion",
        description : "Are you sure you want to proceed?"
    }, [{
        type : "filled",
        container : {text:"Delete"},
        action: function() {
            p.remove();
            DefaultArticle.content.splice(id,1);
            save(DefaultArticle);
            popup.close();
        }
    }])
}

Field.propTypes = {
    field : PropTypes.object.isRequired,
    i: PropTypes.number.isRequired
};

export default Field;