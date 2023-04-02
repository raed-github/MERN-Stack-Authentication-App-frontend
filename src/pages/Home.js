import { useEffect, useState } from 'react'
import TaskItem from '../components/TaskItem'
import TaskForm from '../components/TaskForm'

const Home = ()=>{
    const [tasks,setTasks] = useState()

    useEffect(()=>{
        const fetchTasks = async ()=>{
            //proxy is added inside package.json only for dev environment. in production, we must apply cors
            const response = await fetch('/api/tasks')
            const json = await response.json()
            if(response.ok){
                setTasks(json)
            }
        }
        fetchTasks()
    },[])
    return(
        <div className="home">
            <div className="tasks">
                {tasks && tasks.map((task)=>(
                    <TaskItem key="{task._id}" task={task} />
                ))}
            </div>
            <TaskForm />
        </div>
    )
}
export default Home