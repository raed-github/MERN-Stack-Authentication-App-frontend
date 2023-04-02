import { useTaskContext } from '../hooks/useTaskContext'

const TaskItem = ({task})=>{
    const { dispatch } = useTaskContext()
    const handleClick = async ()=>{
        const response = await fetch('/api/tasks/'+task._id,{
            method: 'DELETE'
        })
        const json = await response.json()
        //the response will be the delete object
        if(response.ok){
            dispatch({type: "DELETE_TASK",payload: task})
        }
    }
    return(
        <div className="task-item">
            <h4>{task.taskName}</h4>
            <p><strong>{task.priority}</strong></p>
            <p><strong>{task.createdAt}</strong></p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    )
}
export default TaskItem