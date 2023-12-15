
import PropTypes from 'prop-types';
import ArticleSmallView from './homeRender';
import './style/index.css';
import ActualizePopUp from '../../../../public/modules/utilities/popup';
import fileTransfer from '../../../../editor/edit';
import ResultToolBar from './components/toolbar';

// Cut each 10 content
const cut = 10;

const StorageRender = ( { storage, storageDisplay } ) => {
    if (storage.length === 0) {
        console.warn('No content has been found in localstorage.');
        return;
    }
    
    const initialCut = cut * (storageDisplay - 1);
    const cutStorage = storage.slice(initialCut, cut + storageDisplay);
    console.log(storage , "storage", cutStorage)
    return (
        <>
            <ResultToolBar />
            <div className="storage-render">
                {
                    cutStorage.map((value,a) => {
                        return <ArticleSmallView article={value} />
                    })
                }
            </div>
        </>
    )
};
StorageRender.propTypes = {
    storage :                      PropTypes.array.isRequired,
};

export default StorageRender;