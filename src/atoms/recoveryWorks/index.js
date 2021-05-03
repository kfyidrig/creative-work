import {useDispatch} from "react-redux";
import {useEffect} from "react";

function RecoveryWorks(){
    let newAction=useDispatch()
    useEffect(function (){
        let works=localStorage.getItem('works')
        if(works!=null) newAction({type:'RECOVERY_WORKS',works:JSON.parse(works)})
    },[])
    return String()
}
export default RecoveryWorks