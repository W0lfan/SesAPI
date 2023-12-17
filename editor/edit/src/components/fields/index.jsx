<<<<<<< HEAD
import { useState } from "react";
import AppButton from "../../../../../public/modules/utilities/buttons/visual";
import appSvg from "../../../../../public/modules/utilities/svg";
import './index.css';
import { DefaultArticle } from "../body";
import PropTypes from 'prop-types';
import Field from "./field";




const Fields = () => {
    const [ fields, setFields ] = useState(DefaultArticle.content);

    

    return (
        <>
            <AppButton 
                type = "filled"
                container= {{svg : appSvg.new('plus') , text : "New field"}}
                custom_properties={["fixed_new_fields"]}
                action = {() => {
                    DefaultArticle.content = [...fields, {
                        general: {
                            name: "New field",
                            description: ""
                        },
                        resources: [],
                        content: []
                    }];
                    setFields(DefaultArticle.content)
                }}
            />
            <div className="fields">
                {
                    fields.map((f,i) => (<Field field = {f} i={i} />))
                }
            </div>
        </>
    )
};

=======
import { useState } from "react";
import AppButton from "../../../../../public/modules/utilities/buttons/visual";
import appSvg from "../../../../../public/modules/utilities/svg";
import './index.css';
import { DefaultArticle } from "../body";
import PropTypes from 'prop-types';
import Field from "./field";




const Fields = () => {
    const [ fields, setFields ] = useState(DefaultArticle.content);

    

    return (
        <>
            <AppButton 
                type = "filled"
                container= {{svg : appSvg.new('plus') , text : "New field"}}
                custom_properties={["fixed_new_fields"]}
                action = {() => {
                    DefaultArticle.content = [...fields, {
                        general: {
                            name: "New field",
                            description: ""
                        },
                        resources: [],
                        content: []
                    }];
                    setFields(DefaultArticle.content)
                }}
            />
            <div className="fields">
                {
                    fields.map((f,i) => (<Field field = {f} i={i} />))
                }
            </div>
        </>
    )
};

>>>>>>> 218f891f43297a53f31bca18f62cdcc649d01f8a
export default Fields;