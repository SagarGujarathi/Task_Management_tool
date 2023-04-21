import MainInfoBar from './MainInfoBar'
import TaskContainer from './TaskContainer'
import '../css/NewProject.css'
function NewProject({ data }) {

    return <>
        <MainInfoBar projectName={data.projectName} />
        <div className="primary-task-container">
            <div className="heading-container">
                {data.taskDivider.map((task) => {
                    return (
                        <div className="task-heading">
                            <div className="task-name">{task.taskName}</div>
                        </div>
                    )
                })}
            </div>
            <div className="main-task-container">
                {
                    data.taskDivider.map((task) => {
                        return (
                            <TaskContainer data={task} />
                        )
                    })
                }
            </div>
        </div>
    </>
}

export default NewProject