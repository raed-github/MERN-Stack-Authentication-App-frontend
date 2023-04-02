import {useState} from "react"
import { useTaskContext } from './../hooks/useTaskContext';

const TaskForm = ()=>{
    const { dispatch } = useTaskContext()
    const [task,setTask] = useState({})
    const [error,setError] = useState()
    const [emptyFields,setEmptyFields] = useState([])
    const onChange = (e)=>{
        e.preventDefault()       
        var taskName = e.target.name
        var val = e.target.value
        if(val && !isNaN(val)){
            val = parseInt(e.target.value,10)
        }
        setTask({...task,[taskName]:val})
        console.log(val)
    }
    const handleSubmit = async (e)=>{
        e.preventDefault()
        const response = await fetch('/api/tasks',{
            method:'POST',
            body: JSON.stringify(task),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()
        if(!response.ok){
            setError(json.error)
            setEmptyFields(json.emptyFields)
            console.log(error)
        }
        if(response.ok){
            setError(null)
            console.log('task added')
            dispatch({type:'CREATE_TASK',payload:task})
            setTask()
            setEmptyFields([])
        }
    }
    return(
            <form className="create-task" onSubmit={handleSubmit}>
                <h3>Add new task</h3>
                <label>Task Name</label>
                <input 
                    type="text"
                    placeholder='task name'
                    name='taskName'
                    value={task?task.taskName:''}
                    onChange={onChange}
                    className={emptyFields.includes('taskName')?'error':''}
                />
                <label>Task Priority</label>
                <input 
                    type="number"
                    placeholder='priority number'
                    name='priority'
                    pattern='[0-9]'
                    value={task?task.priority:''}
                    onChange={onChange}
                    className={emptyFields.includes('priority')?'error':''}

                />
                <button>Add Task</button>
                {error && <div className="error">{error}</div>}
            </form>
    )
}
export default TaskForm