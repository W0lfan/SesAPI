import { useEffect } from 'react';
import data from '../../public/modules/data';

const fileTransfer = (article = null) => {
  if (!article) {
    article = data.template();
    console.log('article',article)
  }
  localStorage.setItem('running_article',JSON.stringify(article));
  useEffect(() => {
    document.title = article.general.name || "New article";
    return () => {
      document.title = article.general.name || "New article";
    };
  }, []); 

};



export default fileTransfer;
