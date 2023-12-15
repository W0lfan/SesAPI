/*

    This part of SesAPI is made for the viewing of the already-made content. 
    It is the main page of the application.

*/

import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import StorageRender from "./storage/render";
import { user_content } from "../../public/modules/data/utilities";


const MainRendering = () => {
    // Replace later by localstorage
    const storage = user_content;
    const [ storageDisplay, setStorageDisplay ] = useState(1);
    return (
        <StorageRender storage = {storage} storageDisplay= {storageDisplay} />
    )
};

export default MainRendering;