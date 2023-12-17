<<<<<<< HEAD
import appInput from "../../../../../../../public/modules/utilities/input";
import appSvg from "../../../../../../../public/modules/utilities/svg";


function TriggerSearchResult() {
    const i = document.getElementById('searchInput');
    const v = i.value;
    const c = document.querySelectorAll('.article-read-display');
    const h = document.querySelector('.hide_button');
    console.log(v)
    if (v.length >= 1) {
        h.style.opacity = "1";
    } else {
        h.style.opacity = "0";
    }

    c.forEach((_) => {
        const t = _.querySelector('.content .header .name');
        const d = _.querySelector('.content .header .description');

        if (!t.innerHTML.includes(v) && !d.innerHTML.includes(v)) {
            _.style.display = 'none';
        } else if (_.style.display == 'none') {
            _.style.display = 'flex';
        }
    })
}

const SearchInput = () => {
    return (
    <div className="input">
        {appInput.new(
            'input',
            "Search an article",
            '',
            'searchInput',
            ['main-search-bar'],
            TriggerSearchResult
        )}
        <div className="hide_button" style={{opacity:"0"}} onClick={() => {
            document.getElementById('searchInput').value = null;
            TriggerSearchResult()
        }}>
            {appSvg.new('close')}
        </div>
    </div>
    )
}

=======
import appInput from "../../../../../../../public/modules/utilities/input";
import appSvg from "../../../../../../../public/modules/utilities/svg";


function TriggerSearchResult() {
    const i = document.getElementById('searchInput');
    const v = i.value;
    const c = document.querySelectorAll('.article-read-display');
    const h = document.querySelector('.hide_button');
    console.log(v)
    if (v.length >= 1) {
        h.style.opacity = "1";
    } else {
        h.style.opacity = "0";
    }

    c.forEach((_) => {
        const t = _.querySelector('.content .header .name');
        const d = _.querySelector('.content .header .description');

        if (!t.innerHTML.includes(v) && !d.innerHTML.includes(v)) {
            _.style.display = 'none';
        } else if (_.style.display == 'none') {
            _.style.display = 'flex';
        }
    })
}

const SearchInput = () => {
    return (
    <div className="input">
        {appInput.new(
            'input',
            "Search an article",
            '',
            'searchInput',
            ['main-search-bar'],
            TriggerSearchResult
        )}
        <div className="hide_button" style={{opacity:"0"}} onClick={() => {
            document.getElementById('searchInput').value = null;
            TriggerSearchResult()
        }}>
            {appSvg.new('close')}
        </div>
    </div>
    )
}

>>>>>>> 218f891f43297a53f31bca18f62cdcc649d01f8a
export default SearchInput;