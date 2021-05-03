import './index.css'
import React from 'react'
import {useDispatch, useSelector} from "react-redux";
function ChooseShape(){
    let newAction=useDispatch()
    let {rawWorks}=useSelector(state => state)
    return <div className={'choose-shape'}>
        <p>{'1. choose the pill shape you like:'}</p>
        <div className={'raw-works'}>
            {rawWorks.map((item,index)=>{
                return <span key={`svg-${index}`} onClick={({target}) => {
                    // console.log(target.parentNode.parentNode.getAttribute('data-index'))
                    newAction({type:'SET_NEW_WORK',newWork:target.parentNode.parentNode.getAttribute('data-index')})
                }} data-index={index}>{item}</span>
            })}
        </div>
    </div>
}
export default ChooseShape