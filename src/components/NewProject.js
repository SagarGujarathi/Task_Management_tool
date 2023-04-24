import MainInfoBar from './MainInfoBar'
import TaskContainer from './TaskContainer'
import '../css/NewProject.css'
import { Droppable } from 'react-beautiful-dnd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import TaskHeading from './TaskHeading'
function NewProject({ data, changeTaskHeadingName, createTaskHeading, deleteTaskItem, deleteTaskHeading, editTask, createTask }) {
    const [createMode, setCreateMode] = useState(0)
    const [name, setName] = useState('')
    return <>
        <MainInfoBar projectName={data.projectName} />
        <div className="primary-task-container">
            <Droppable
                droppableId={`${data.id}`}
                direction='horizontal'
                type='heading'
            >
                {(provided) => {
                    return (
                        <>
                            <div className="heading-container"
                                {...provided.droppableProps}
                                ref={provided.innerRef}
                            >
                                {data.taskDivider.map((task, index) => {
                                    return (
                                        <TaskHeading task={task} index={index} changeTaskHeadingName={changeTaskHeadingName} deleteTaskHeading={deleteTaskHeading} />
                                    )
                                })}
                                <div className="add-heading">
                                    <FontAwesomeIcon icon={faPlus} onClick={() => { setCreateMode(1) }} />
                                </div>
                            </div>
                            {createMode ? <>
                                <div className="blur"></div>
                                <div className="task-heading-edit-popup">
                                    Create task status :
                                    <input type="text" onChange={e => setName(e.target.value)} />
                                    <button className="ok-button" onClick={() => {
                                        if (name != '') {
                                            setTimeout(() => {
                                                createTaskHeading(name, data.id)
                                                setCreateMode(0)
                                            }, 500)
                                        }
                                    }}>Ok</button>
                                </div>
                            </> : ''
                            }
                        </>
                    )
                }}
            </Droppable >
            <div className="main-task-container">
                {
                    data.taskDivider.map((task) => {
                        return (
                            <TaskContainer data={task} deleteTaskItem={deleteTaskItem} editTask={editTask} createTask={createTask} />
                        )
                    })
                }
            </div>
        </div>
    </>
}

export default NewProject