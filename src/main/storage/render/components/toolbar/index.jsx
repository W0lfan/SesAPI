import fileTransfer from "../../../../../../editor/edit";
import findParentWithClass from "../../../../../../public/modules/parent";
import AppButton from "../../../../../../public/modules/utilities/buttons/visual";
import ActualizePopUp from "../../../../../../public/modules/utilities/popup";
import appSvg from "../../../../../../public/modules/utilities/svg";
import './index.css'
import ReactDOM from 'react-dom';
import SearchInput from "./search/input";
import { storage } from "../../../../../../editor/edit/src/storage/access";
import { Link, Route, Routes } from "react-router-dom";
import EditorApp from "../../../../../../editor/edit/src/app";

function NewArticle() {
    fileTransfer();
}


const ChangeDisplay = (t) => {
    let p = t;
    if (!p.classList.contains('button')) {
        p = findParentWithClass(t, 'button');
    }
    const icon = p.querySelector('.button-icon');
    const param = storage.access("SesAPIParameters");


    if (p.classList.contains('grid')) {
        p.classList.remove('grid');
        p.classList.add('line');
        const newIcon = appSvg.new('displayLine');
        ReactDOM.render(newIcon, icon);
        document.querySelector('.storage-render').classList.add('line');
        
        Array.from(document.querySelectorAll('.article-read-display')).forEach((i) => {
            i.classList.add('line');
        });
        param.preferedDisplay = "line";
    } else {
        p.classList.add('grid');
        p.classList.remove('line');
        const newIcon = appSvg.new('displayGrid');
        ReactDOM.render(newIcon, icon);
        document.querySelector('.storage-render').classList.remove('line');
        Array.from(document.querySelectorAll('.article-read-display')).forEach((i) => {
            i.classList.remove('line');
        });
        param.preferedDisplay = "grid";
    }

    storage.set(param,"SesAPIParameters")
};





const ResultToolBar = () => {
    return (
        <>
            <Routes>
                <Route path="/editor/edit/" element={<EditorApp />}/>
            </Routes>
            <div className="result-toolbar">
                <div className="important-container">
                    <Link to={"/editor/edit"}>
                        <AppButton 
                            type="filled"
                            container = {{
                                svg : appSvg.new('plus'),
                                text : 'New',
                            }}
                            action = {() => NewArticle()}
                        />
                    </Link>
                    <SearchInput />
                </div>
                <AppButton 
                    type="filled"
                    container = {{
                        svg : appSvg.new(storage.access('SesAPIParameters').preferedDisplay == "grid" ? 'displayGrid' : "displayLine"),
                        text : 'Change display',
                    }}
                    custom_properties={['grid']}
                    action = {(event) => ChangeDisplay(event.target)}
                />
            </div>
        </>
    )
};


export default ResultToolBar;