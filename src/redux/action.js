function handleAction(state,action){
    let {type}=action
    if(type==='SET_NEW_WORK'){
        state.curWork=action.newWork
        if(action.newWork===-1) state.intro=''
        return {...state}
    }
    else if(type==='RECOVERY_WORKS'){
        state.accomplishedWorks=action.works
        return {...state}
    }
    else if(type==='NEW_INTRO'){
        state.intro=action.intro
        return {...state}
    }
    else if(type==='SET_CUR_DOM'){
        state.curDom=action.element
        return {...state}
    }
    else if(type==='UPLOAD_TO_GALLERY'){
        if(state.curDom!==null){
            state.accomplishedWorks.push(state.curDom.innerHTML)
            // console.log(state.curDom.children[0])
            console.log(state.accomplishedWorks)
            localStorage.setItem('works',JSON.stringify(state.accomplishedWorks))
            return {...state}
        }
    }
    return state
}

export default handleAction