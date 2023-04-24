
import TaskItem from './TaskItem'
import '../css/taskContainer.css'
import { Droppable } from 'react-beautiful-dnd'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
function TaskContainer({ data, deleteTaskItem, editTask, createTask }) {
    const [createMode, setCreateMode] = useState(0)
    const [taskName, setTaskName] = useState('')
    return (
        <Droppable droppableId={`${data.id}`} type='task-group'>
            {(provided) => {
                return (
                    <>
                        <div className="task-container" {...provided.droppableProps} ref={provided.innerRef}>
                            {data.taskItems.map((taskItem, index) => {
                                return (
                                    <TaskItem data={taskItem} index={index} deleteTaskItem={deleteTaskItem} editTask={editTask} />
                                )
                            })}
                            <div className="add-task" onClick={() => setCreateMode(!createMode)}>
                                <FontAwesomeIcon icon={faPlus} />
                                Add task...
                            </div>
                        </div>
                        {
                            createMode ?
                                <>
                                    <div className="blur"></div>
                                    <div className="task-heading-edit-popup">
                                        Enter your new task name :
                                        <input type="text" onChange={e => setTaskName(e.target.value)} />
                                        <button className="ok-button" onClick={() => {
                                            if (taskName != '') {
                                                setTimeout(() => {
                                                    createTask({
                                                        id: Math.ceil(Math.random() * 10000),
                                                        taskName: taskName,
                                                        startDate: '04/04/2020',
                                                        endDate: '28/04/2020',
                                                        comments: [],
                                                        files: [],
                                                        tags: ['Discovery'],
                                                        usersWorking: []
                                                    }, data.id)
                                                    setCreateMode(0)
                                                }, 500)
                                            }
                                        }}>Ok</button>
                                    </div>
                                </>
                                : ''
                        }
                    </>
                )
            }}
        </Droppable >
    )
}

export default TaskContainer