import './index.css'
import ReactDOM from 'react-dom'
import React, {Fragment, useEffect} from "react";
import ChooseShape from "../../atoms/chooseShape";
import {Link} from "react-router-dom";
import PaintBox from "../../atoms/paintBox";
import InputIntro from "../../atoms/inputIntro";
import {useDispatch, useSelector} from "react-redux";
import UploadTip from "../../atoms/uploadTip";

function CreatePage(){
    let newAction=useDispatch()
    let {accomplishedWorks}=useSelector(state => state)
    return <Fragment>
        <div className={'create-title'}>
            <Link to={'/'}><h1>{'Let\' start your creation!'}</h1></Link>
            <Link to={'/gallery'}><h2>{'Gallery'}</h2></Link>
        </div>
        <div className={'main-wrap'}>
            <PaintBox/>
            <div className={'right-wrap'}>
                <ChooseShape/>
                <InputIntro/>
            </div>
        </div>
        <div className={'create-btn'}>
            <span onClick={()=>{
                let modal=document.createElement('div')
                modal.setAttribute('class','modal')
                document.body.appendChild(modal)
                ReactDOM.render(<UploadTip preLen={accomplishedWorks.length}/>,modal)
                setTimeout(function (){
                    ReactDOM.unmountComponentAtNode(modal)
                    document.body.removeChild(modal)
                },3500)
                newAction({type:'UPLOAD_TO_GALLERY'})
            }}>{'Upload to gallery'}</span>
            <span>{'Download to Local'}</span>
            <span onClick={()=>{
                newAction({type:'SET_NEW_WORK',newWork: -1})
            } }>{'Start new work'}</span>
        </div>
    </Fragment>
}
export default CreatePage