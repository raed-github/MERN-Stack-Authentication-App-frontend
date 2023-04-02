const TaskItem = ({task})=>{

    return(
        <div className="task-item">
            <h4>{task.taskName}</h4>
            <p><strong>{task.priority}</strong></p>
            <p><strong>{task.createdAt}</strong></p>
        </div>
    )
}
export default TaskItem