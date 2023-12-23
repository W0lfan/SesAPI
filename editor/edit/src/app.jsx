import './index.css';
import '../../../public/styling/root/index.css'
import ShadowCheck from './main/app/ShadowCheck';
import Editor from './main/app/Init';


function EditorApp() {
  const editor = Editor.init();
  if (editor) return editor;
  else {
    const ActualDirect = ShadowCheck.redirect();
    if (ActualDirect) {
      localStorage.setItem(
        'running_article', JSON.stringify(ShadowCheck.redirect())
      );
    } else {
      console.error('An unexpected error happened while trying to load an article by link.');
      return Editor.error();
    }
  }
}


export default EditorApp;
