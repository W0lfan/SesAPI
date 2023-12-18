import AppButton from "../../../../../public/modules/utilities/buttons/visual";
import { popup } from "../../../../../public/modules/utilities/popup";
import appSvg from "../../../../../public/modules/utilities/svg";
import Switch from "../../../../../public/modules/utilities/switch";
import '../../../public/style/article/body.css';
import { useState } from 'react';

function displayManagement(d)  {
    const i = document.querySelectorAll('.box-info');
    if (i) {
        Array.from(i).forEach((i) => {
            i.style.display = d;
        })
    }
}

function buttonOpacity(d) {
    // true for disabling
    if (d) {
        const t = document.querySelectorAll('.filled');
        if (t) {
            Array.from(t).forEach((i) => {
                i.classList.remove("filled");
                i.classList.add('blank');
                i.classList.add('parameterblank');
            })
        }
    } else {
        const t = document.querySelectorAll('.parameterblank');
        if (t) {
            Array.from(t).forEach((i) => {
                i.classList.remove("parameterblank");
                i.classList.remove('blank');
                i.classList.add('filled');
            })
        }
    }
}

const Toolsbar = () => {
    const [ switchField, setSwitchField ] = useState(true);
    const [ opacityButton, setopacityButton ] = useState(false);


    return (
      <div className="toolsbar">
        <div className="left-container">
            <a href='/SesAPI/'>
            {appSvg.new('logotype')}
            </a>
            <div className="tools">
                <AppButton
                    type="blank"
                    container={{text : "Editor settings"}}
                    action={() => {
                        popup.new({
                            title : "Editor settings",
                            description: "The following parameters are exclusive to this document, and allows you to customize your preferences regarding the edition.",
                            code : (
                                <div className="in-parameters">
                                    <Switch 
                                        boxName="Display fields indicators"
                                        boxDescription = "Fields above the inputs help understand what you are doing."
                                        states = {{
                                            default : switchField,
                                            on : () => {
                                                displayManagement('flex');
                                                setSwitchField(true);
                                            },
                                            off : () => {
                                                displayManagement('none');
                                                setSwitchField(false);
                                            }
                                        }}
                                    />
                                    <Switch 
                                        boxName="Buttons opacity"
                                        boxDescription = "Buttons might take some place. Enable this parameter to reduce them."
                                        states = {{
                                            default : opacityButton,
                                            on : () => {
                                                buttonOpacity(true);
                                                setopacityButton(true);
                                            },
                                            off : () => {
                                                buttonOpacity(false);
                                                setopacityButton(false);
                                            }
                                        }}
                                    />
                                </div>
                            ),
                            customEndMessage : 'Done'
                        })
                    }}      
                />
            </div>
        </div>

        <div className="save-update">
          {appSvg.new('check')}
          <div className="container">
            <div className="value"></div>
            <div className="info"></div>
          </div>
        </div>
      </div>
    )
  };


export default Toolsbar;