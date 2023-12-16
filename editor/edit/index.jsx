import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './src/app';
import data from '../../public/modules/data';


if (window.location.href.includes('/editor/edit/')) {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <App/>
    </React.StrictMode>,
  );
}




const fileTransfer = (article = null) => {
  if (!article) {
    article = data.template();
    console.log('article',article)
  }
  localStorage.setItem('running_article',JSON.stringify(article));

  window.open("/editor/edit/?" + article.time.createdOn, "_self");



  // If you want to navigate after rendering, do it here.
};



export default fileTransfer;
