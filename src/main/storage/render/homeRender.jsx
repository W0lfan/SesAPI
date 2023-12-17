<<<<<<< HEAD
import PropTypes from 'prop-types';
import './style/index.css';
import fileTransfer from '../../../../editor/edit';
import AppTimeConverter from '../../../../public/modules/utilities/time';
import ArticleSmallViewActions from './components/box_render';
import { storage } from '../../../../editor/edit/src/storage/access';






const ArticleSmallView = ( { article } ) => {
    const name = article.general.name;
    const description = article.general.description;
    const createdOn = article.time.createdOn;
    const lastEdit = article.time.lastEdit;
    
    return (
        <>
            <div className={"article-read-display" + " " + storage.access('SesAPIParameters').preferedDisplay}>
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

=======
import PropTypes from 'prop-types';
import './style/index.css';
import fileTransfer from '../../../../editor/edit';
import AppTimeConverter from '../../../../public/modules/utilities/time';
import ArticleSmallViewActions from './components/box_render';
import { storage } from '../../../../editor/edit/src/storage/access';






const ArticleSmallView = ( { article } ) => {
    const name = article.general.name;
    const description = article.general.description;
    const createdOn = article.time.createdOn;
    const lastEdit = article.time.lastEdit;
    
    return (
        <>
            <div className={"article-read-display" + " " + storage.access('SesAPIParameters').preferedDisplay}>
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

>>>>>>> 218f891f43297a53f31bca18f62cdcc649d01f8a
export default ArticleSmallView;