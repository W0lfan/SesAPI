<<<<<<< HEAD
/*

    This part of SesAPI is made for the viewing of the already-made content. 
    It is the main page of the application.

*/

import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import StorageRender from "./storage/render";
import { user_content } from "../../public/modules/data/utilities";
import { storage } from "../../editor/edit/src/storage/access";


const MainRendering = () => {
    // Replace later by localstorage
    const [ storageDisplay, setStorageDisplay ] = useState(1);

    const st = storage.access().articles;
    console.log(st)
    return (
        <StorageRender s = {st} storageDisplay= {storageDisplay} />
    )
};

=======
/*

    This part of SesAPI is made for the viewing of the already-made content. 
    It is the main page of the application.

*/

import { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import StorageRender from "./storage/render";
import { user_content } from "../../public/modules/data/utilities";
import { storage } from "../../editor/edit/src/storage/access";


const MainRendering = () => {
    // Replace later by localstorage
    const [ storageDisplay, setStorageDisplay ] = useState(1);

    const st = storage.access().articles;
    console.log(st)
    return (
        <StorageRender s = {st} storageDisplay= {storageDisplay} />
    )
};

>>>>>>> 218f891f43297a53f31bca18f62cdcc649d01f8a
export default MainRendering;