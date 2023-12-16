import { useState, useEffect, useRef } from "react";

import appInput from "../../../../../../public/modules/utilities/input";
import appSvg from "../../../../../../public/modules/utilities/svg";
import "../index.css";
import PropTypes from 'prop-types';
import ResourceField from "../../resources/field";

const Tools = () => {
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
                <div className="parameter">
                    {appSvg.new('trash')}
                    <div className="name">
                        Delete
                    </div>
                </div>
            </div>
        </div>
    );
}

const Field = ( { field,i } ) => {


    return (
        <div className="field">
            <div className="content">
                <div className="header">
                    <div className="name input-container">
                        <div className="box-info">Field name</div>
                        {appInput.new('input','Field name',field.general.name || "New field","fieldName")}
                    </div>
                    <div className="description input-container">
                        <div className="box-info">Field description</div>
                        {appInput.new('input','Field description',field.general.description || "","fieldDescription")}
                    </div>
                </div>
                <ResourceField fieldType={i} />
            </div>
            <Tools />
        </div>
    )
}
Field.propTypes = {
    field : PropTypes.object.isRequired,
    i: PropTypes.number.isRequired
};

export default Field;