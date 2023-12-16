
import PropTypes from 'prop-types';
import ArticleSmallView from './homeRender';
import './style/index.css';
import ResultToolBar from './components/toolbar';
import { storage } from '../../../../editor/edit/src/storage/access';

// Cut each 10 content
const cut = 10;

const StorageRender = ( { s, storageDisplay } ) => {
    console.log(s)
    if (!s) s = []
    const initialCut = cut * (storageDisplay - 1);
    const cutStorage = s.slice(initialCut, cut + storageDisplay);
    console.log(s , "storage", cutStorage)
    return (
        <>
            <ResultToolBar />
            <div className={"storage-render" + " " + storage.access('SesAPIParameters').preferedDisplay}>
                {
                    cutStorage.map((value,a) => {
                        return <ArticleSmallView article={value} />
                    })
                }
                {
                    s.length == 0 ? (
                        <img src={"/SesAPI/public/image/noResults.png"} style={{
                            position:'absolute', width: '50%',
                            opacity: 0.5,
                            top:0,bottom:0,left:0,right:0,margin:'auto'
                        }}/>
                    ) : null
                }
            </div>
        </>
    )
};
StorageRender.propTypes = {
    s : PropTypes.array.isRequired,
};

export default StorageRender;