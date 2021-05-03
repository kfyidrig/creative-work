import './index.css'
import React from 'react'
import {useDispatch, useSelector} from "react-redux";
function InputIntro(){
    let newAction=useDispatch()
    let {intro}=useSelector(state => state)
    return <div className={'choose-shape input-intro'}>
        <p>{'2. give your pill a name and a brief introduction:'}</p>
        <textarea value={intro} onChange={({target})=> {
            // console.log(target.value)
            newAction({type:'NEW_INTRO',intro:target.value})
        }}/>
    </div>
}
export default InputIntro