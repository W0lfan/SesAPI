import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import appSvg from '../../../public/modules/utilities/svg';
import appInput from '../../../public/modules/utilities/input';



const Toolsbar = ( { article } ) => {
  return (
    <div className="toolsbar">
      <a href='../../../'>
        {appSvg.new('logo')}
      </a>
      <div className="tools-container">
          <div className="article-informations">
              {appInput.new('input','Article name', article.general.name || 'New article','articleName',['textInput'])}
              {appSvg.new('edit')}
          </div>
      </div>
    </div>
  )
};
Toolsbar.propTypes = {
  article : PropTypes.object.isRequired,
};

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
      <div className="popup-container-dnd"></div>
    </>
  );
}


export default App;
