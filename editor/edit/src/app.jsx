import React, { useEffect } from 'react';
import ArticleBody from './components/body';
import './index.css';
import '../../../public/styling/root/index.css'
import Toolsbar from './components/toolbar';

function EditorApp() {
  const infoBar = document.querySelector('.info-bar');
  if (infoBar) infoBar.remove();

  const drive = [
    document.querySelector('.result-toolbar'),
    document.querySelector('.storage-render')
  ];
  drive.forEach((i) => {
    if (i) i.remove();
  })

  document.querySelector('.app-details').classList.add('bottom')

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


export default EditorApp;
