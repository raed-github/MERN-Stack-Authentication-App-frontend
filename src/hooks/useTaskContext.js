import { TaskContext } from "../context/TaskContext";
import { useContext } from "react";

export const useTaskContext = ()=>{
    const context = useContext(TaskContext)
    //incase the context is used outside the provider, it will return null value
    //but it is useless to have a null value, so we must find a way to notify the
    //user that the context is used outside its provider
    if(!context){
        throw new Error('context must be used inside its provider')
    }
    return context
}