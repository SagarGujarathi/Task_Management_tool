import MainInfoBar from './MainInfoBar'
import TaskContainer from './TaskContainer'
function NewProject({ data, shiftTask }) {

    return <>
        <MainInfoBar projectName={data.projectName} />
        <div className="primary-task-container">
            <div className="heading-container">
                {data.taskBoard.map((task) => {
                    return (
                        <div className="task-heading">
                            <div className="task-name">{task.task}</div>
                        </div>
                    )
                })}
            </div>
            <div className="main-task-container">
                {
                    data.taskBoard.map((task) => {
                        return (
                            <TaskContainer data={task} shiftTask={shiftTask} />
                        )
                    })
                }
            </div>
        </div>
    </>
}

export default NewProject