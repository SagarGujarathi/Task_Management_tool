
import TaskItem from './TaskItem'
import '../css/taskContainer.css'
function TaskContainer({ data }) {
    return (
        <div className="task-container">
            {data.taskItems.map((taskItem) => {
                return (
                    <TaskItem data={taskItem} />
                )
            })}
        </div>
    )
}

export default TaskContainer