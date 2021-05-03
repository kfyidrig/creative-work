//history对象
import history from "./history";
//React相关
import React, {useEffect} from 'react'
import ReactDom from 'react-dom'
import {Router,Route,Redirect} from "react-router-dom"
// Redux相关
import store from './redux'
import {Provider, useDispatch} from "react-redux";
//页面组件相关
import CreatePage from "./pages/createPage";
import GalleryPage from "./pages/galleryPage";

function PageRouter(){
    return <Provider store={store}>
        <Router history={history}>
            <Route path={'/'} exact component={CreatePage}/>
            <Route path={'/gallery'} exact component={GalleryPage}/>
        </Router>
    </Provider>
}

//创建根节点root
let root=document.createElement('div')
root.setAttribute('id','root')
document.body.append(root)

//渲染页面
ReactDom.render(<PageRouter/>,root)