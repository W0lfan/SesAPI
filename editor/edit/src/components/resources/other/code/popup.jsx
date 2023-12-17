<<<<<<< HEAD
import appInput from "../../../../../../../public/modules/utilities/input";


const CodeDrop = () => {
    return(
        <div className="code-addition">
            <div className="input-fields">
                {appInput.new('input','Code label','','codeLabel')}
                {appInput.new('input','Code description','','codeDescription')}
            </div>
            <div className="render">
                {appInput.new('textarea','Enter code','','codeContent',["code-field"])}
            </div>
        </div>
    )  
};

=======
import appInput from "../../../../../../../public/modules/utilities/input";


const CodeDrop = () => {
    return(
        <div className="code-addition">
            <div className="input-fields">
                {appInput.new('input','Code label','','codeLabel')}
                {appInput.new('input','Code description','','codeDescription')}
            </div>
            <div className="render">
                {appInput.new('textarea','Enter code','','codeContent',["code-field"])}
            </div>
        </div>
    )  
};

>>>>>>> 218f891f43297a53f31bca18f62cdcc649d01f8a
export default CodeDrop;