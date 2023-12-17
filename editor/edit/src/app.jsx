<<<<<<< HEAD
import React, { useEffect } from 'react';
import appSvg from '../../../public/modules/utilities/svg';
import appInput from '../../../public/modules/utilities/input';
import ArticleBody from './components/body';
import './index.css';
import '../../../public/styling/root/index.css'
import Toolsbar from './components/toolbar';
import Fields from './components/fields';




function App() {
  let article;
  const s = JSON.parse(localStorage.getItem('running_article'));
  if (s) {
    article = s;
  } 

  useEffect(() => {
    document.title = article.general.name || "New article";
  }, [])


  return (
    <>
      <Toolsbar article={article}/>
      <ArticleBody article = {article} />
      <div className="popup-container-dnd"></div>
    </>
  );
}


export default App;
=======
import React, { useEffect } from 'react';
import appSvg from '../../../public/modules/utilities/svg';
import appInput from '../../../public/modules/utilities/input';
import ArticleBody from './components/body';
import './index.css';
import '../../../public/styling/root/index.css'
import Toolsbar from './components/toolbar';
import Fields from './components/fields';




function App() {
  let article;
  const s = JSON.parse(localStorage.getItem('running_article'));
  if (s) {
    article = s;
  } 

  useEffect(() => {
    document.title = article.general.name || "New article";
  }, [])


  return (
    <>
      <Toolsbar article={article}/>
      <ArticleBody article = {article} />
      <div className="popup-container-dnd"></div>
    </>
  );
}


export default App;
>>>>>>> 218f891f43297a53f31bca18f62cdcc649d01f8a
