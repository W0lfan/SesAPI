import fileTransfer from "../../../../../../editor/edit";
import findParentWithClass from "../../../../../../public/modules/parent";
import AppButton from "../../../../../../public/modules/utilities/buttons/visual";
import appInput from "../../../../../../public/modules/utilities/input";
import ActualizePopUp from "../../../../../../public/modules/utilities/popup";
import appSvg from "../../../../../../public/modules/utilities/svg";
import './index.css'
import ReactDOM from 'react-dom';

function NewArticle() {
    ActualizePopUp(
        {
            title : "Start editing",
            description : "Select an option for editing."
        },
        [
            {
                type : 'filled',
                container : { text : 'Create from scratch'},
                action : function() {
                   fileTransfer();
                },
                custom_properties : []
                },
            {
                type : 'filled',
                container : { text : 'Upload'},
                action : function() {},
                custom_properties : []
            }
        ]
    )
}


const ChangeDisplay = (t) => {
    const p = findParentWithClass(t, 'button');
    const icon = p.querySelector('.button-icon');



    if (p.classList.contains('grid')) {
        p.classList.remove('grid');
        p.classList.add('line');
        const newIcon = appSvg.new('displayLine');
        ReactDOM.render(newIcon, icon);
        document.querySelector('.storage-render').classList.add('line');
        Array.from(document.querySelectorAll('.article-read-display').forEach((i) => {
            i.classList.add('list');
        }))
    } else {
        p.classList.add('grid');
        p.classList.remove('line');
        const newIcon = appSvg.new('displayGrid');
        ReactDOM.render(newIcon, icon);
        document.querySelector('.storage-render').classList.remove('line');
        Array.from(document.querySelectorAll('.article-read-display').forEach((i) => {
            i.classList.remove('list');
        }))
    }
};


const ResultToolBar = () => {
    return (
        <div className="result-toolbar">
            <div className="important-container">
                <AppButton 
                    type="filled"
                    container = {{
                        svg : appSvg.new('plus'),
                        text : 'New',
                    }}
                    action = {() => NewArticle()}
                />
                {appInput.new(
                    'input',
                    "Search an article",
                    '',
                    'searchInput',
                    ['main-search-bar'],
                    function() {}
                )}
            </div>
            <AppButton 
                type="filled"
                container = {{
                    svg : appSvg.new('displayGrid'),
                    text : 'Change display',
                }}
                custom_properties={['grid']}
                action = {(event) => ChangeDisplay(event.target)}
            />
        </div>
    )
};


export default ResultToolBar;