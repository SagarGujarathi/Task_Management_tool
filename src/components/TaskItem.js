
import '../css/TaskItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faCalendarDays, faHourglassEnd, faLink, faEllipsis, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import { Draggable } from 'react-beautiful-dnd'
import { useState, useRef } from 'react'
function TaskItem({ data, index, deleteTaskItem, editTask }) {
    const [vis, setVis] = useState(0)
    const [menu, setMenu] = useState(0)
    const [editMode, setEditMode] = useState(0)
    const [taskName, setTaskName] = useState('')
    const settingRef = useRef()
    const dropDownRef = useRef()
    window.addEventListener('click', (e) => {
        if (e.target != settingRef.current && e.target != dropDownRef.current) {
            setMenu(0)
        }
    })
    return (
        <Draggable draggableId={`${data.id}`} key={`${data.id}`} index={index}>
            {(provided) => {
                return (
                    <div
                        className="task-item"
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        ref={provided.innerRef}
                        onMouseOver={() => setVis(1)}
                        onMouseLeave={() => setVis(0)}
                    >
                        <div className="task-item-heading">{data.taskName}</div>
                        <div className="info-container">
                            <span className="file-container">
                                <FontAwesomeIcon icon={faLink} />
                                {data.files.length}
                            </span>
                            <span className="chat-container">
                                <FontAwesomeIcon icon={faMessage} />
                                {data.chatCount}
                            </span>
                            <span className="date-container">
                                <span>
                                    <FontAwesomeIcon icon={faCalendarDays} />
                                    {data.startDate}
                                </span>
                                <span>
                                    <FontAwesomeIcon icon={faHourglassEnd} />
                                    {data.endDate}
                                </span>
                            </span>
                        </div>
                        <div className="tags-and-user">
                        </div>
                        <FontAwesomeIcon
                            icon={faEllipsis}
                            className='task-more-setting'
                            style={{ opacity: `${vis}` }}
                            ref={settingRef}
                            onClick={() => setMenu(!menu)}
                        />
                        {
                            menu ? <div className="task-options-dropdown" ref={dropDownRef}>
                                <div className="edit-option" onClick={() => setEditMode(!editMode)}>
                                    <FontAwesomeIcon icon={faPencil} />
                                    Edit
                                </div>
                                <div className="delete-option" onClick={() => { deleteTaskItem(data.id) }}>
                                    <FontAwesomeIcon icon={faTrash} />
                                    Delete
                                </div>
                            </div> : ''
                        }
                        {
                            editMode ?
                                <>
                                    <div className="blur"></div>
                                    <div className="task-heading-edit-popup">
                                        Enter your new task name :
                                        <input type="text" onChange={e => setTaskName(e.target.value)} />
                                        <button className="ok-button" onClick={() => {
                                            if (taskName != '') {
                                                setTimeout(() => {
                                                    editTask({
                                                        id: Math.ceil(Math.random() * 10000),
                                                        taskName: taskName,
                                                        startDate: '04/04/2020',
                                                        endDate: '28/04/2020',
                                                        comments: [],
                                                        files: [],
                                                        tags: ['Discovery'],
                                                        usersWorking: []
                                                    }, data.id)
                                                    setEditMode(0)
                                                }, 500)
                                            }
                                        }}>Ok</button>
                                    </div>
                                </> : ''
                        }
                    </div >
                )
            }}
        </Draggable >)
}

export default TaskItem