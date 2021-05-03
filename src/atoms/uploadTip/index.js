import './index.css'
import store from '../../redux'
import React, {useEffect, useState} from "react";
import {Provider, useSelector} from "react-redux";
function UploadTip({preLen}){
    return <Provider store={store}>
        <Modal preLen={preLen}/>
    </Provider>
}

function Modal({preLen}){
    let {accomplishedWorks}=useSelector(state => state)
    let [text,setText]=useState('UPLOADING')
    useEffect(function (){
        setTimeout(function (){
            if(accomplishedWorks.length!==preLen) setText('Uploaded successfully !')
            else setText('Failed to upload !')
        },1500)
    },[])
    return <p className={'upload-tips'}>
        {text}
    </p>
}
export default UploadTip