import './index.css'
import React, {Fragment, useEffect} from "react";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

function GalleryPage(){
    let newAction=useDispatch()
    let {accomplishedWorks}=useSelector(state => state)
    useEffect(function (){
        let works=localStorage.getItem('works')
        if(works!=null) newAction({type:'RECOVERY_WORKS',works:JSON.parse(works)})
    },[])
    return <Fragment>
        <h1 className={'gallery-title'}>{'Superpower Pills Gallery'}</h1>
        <div className={'gallery-wrap'}>
            {accomplishedWorks.map((item,index)=>{
                return <span className={'gallery-item'} key={index} dangerouslySetInnerHTML={{__html: item}}/>
            })}
        </div>
        <div className={'gallery-info-wrap'}>
            <h3 className={'gallery-info'}>
                {'Almost everyone has fantasized about having superpowers, and now you have the chance '}
                <Link to={'/'}>{'to create your own superpower pill !'}</Link>
            </h3>
            <img className={'gallery-tri'} src={'triangle.png'}/>
        </div>
    </Fragment>
}
export default GalleryPage