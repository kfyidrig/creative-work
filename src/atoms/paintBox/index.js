import './index.css'
import React, {useRef, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
function PaintBox(){
    let setWorks=useDispatch()
    let curSvg=useRef()
    let [color,setColor]=useState('#e7c626')
    let {curWork,rawWorks,intro}=useSelector(state => state)
    return <div className={'paint-box'}>
        <span onClick={({target}) => {
            target.style=`stroke:#231815;stroke-miterlimit:10;stroke-width:8px; fill: ${color};`
            // curSvg.current.children[1].innerText=intro
            setTimeout(function (){setWorks({type:'SET_CUR_DOM',element:curSvg.current})},600)
        }} ref={curSvg}>
            {curWork>-1?rawWorks[curWork]:''}
            <p className={'paint-intro'}>{intro}</p>
        </span>
        <input type={'color'} value={color} onChange={({target})=>{
            setColor(target.value)
        }} className={'input-color'}/>
    </div>
}
export default PaintBox