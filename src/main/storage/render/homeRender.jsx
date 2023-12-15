import PropTypes from 'prop-types';
import './style/index.css';
import fileTransfer from '../../../../editor/edit';
import AppTimeConverter from '../../../../public/modules/utilities/time';
import ArticleSmallViewActions from './components/box_render';






const ArticleSmallView = ( { article } ) => {
    const name = article.general.name;
    const description = article.general.description;
    const createdOn = article.time.createdOn;
    const lastEdit = article.time.lastEdit;
    
    return (
        <>
            <div className="article-read-display">
                <div className="content" onClick={() => fileTransfer(article)}>
                    <div className="header">
                        <div className="name">
                            {name}
                        </div>
                        <div className="description">
                            {description}
                        </div>
                    </div>
                    <div className="statistics">
                        <div className="container">
                            <span>Last edit on</span>
                            <span>{AppTimeConverter(lastEdit)}</span>
                        </div>
                        <div className="container">
                            <span>Created on</span>
                            <span>{AppTimeConverter(createdOn)}</span>
                        </div>
                    </div>
                </div>
                <ArticleSmallViewActions article={article} />
            </div>
        </>
        
    )
};
ArticleSmallView.propTypes = {
    article :                      PropTypes.object.isRequired,
};

export default ArticleSmallView;