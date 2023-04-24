import { Draggable } from "react-beautiful-dnd"
import { useState, useRef } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsis, faPencil, faTrash } from '@fortawesome/free-solid-svg-icons'
import '../css/TaskHeading.css'

function TaskHeading({ task, index, changeTaskHeadingName, deleteTaskHeading }) {
    const [vis, setVis] = useState(0)
    const [menu, setMenu] = useState(0)
    const [editMode, setEditMode] = useState(0)
    const [newName, setNewName] = useState('');
    const settingRef = useRef()
    const dropDownRef = useRef()
    window.addEventListener('click', (e) => {
        if (e.target != settingRef.current && e.target != dropDownRef.current) {
            setMenu(0)
        }
    })
    return (
        <Draggable draggableId={`${task.id}`} index={index} key={`${task.id}`}>
            {
                (provided) => {
                    return <>
                        <div
                            className="task-heading"
                            {...provided.dragHandleProps}
                            {...provided.draggableProps}
                            ref={provided.innerRef}
                            onMouseOver={() => setVis(1)}
                            onMouseLeave={() => setVis(0)}
                        >
                            <div className="task-name" >
                                <span>
                                    {task.taskName}
                                    &nbsp;
                                    &nbsp;
                                    <span>({task.taskItems.length})</span>
                                </span>
                            </div>
                            <FontAwesomeIcon
                                icon={faEllipsis}
                                className='heading-more-setting'
                                style={{ opacity: `${vis}` }}
                                onClick={() => setMenu(!menu)}
                                ref={settingRef}
                            />

                            {
                                menu ? <div className="options-dropdown" ref={dropDownRef}>
                                    <div className="edit-option" onClick={() => setEditMode(!editMode)}>
                                        <FontAwesomeIcon icon={faPencil} />
                                        Edit
                                    </div>
                                    <div className="delete-option" onClick={() => deleteTaskHeading(task.id)}>
                                        <FontAwesomeIcon icon={faTrash} />
                                        Delete
                                    </div>
                                </div> : ''
                            }
                        </div>
                        {
                            editMode ?
                                <>
                                    <div className="blur"></div>
                                    <div className="task-heading-edit-popup">
                                        Enter your task status :
                                        <input type="text" onChange={e => setNewName(e.target.value)} />
                                        <button className="ok-button" onClick={() => {
                                            if (newName != '') {
                                                changeTaskHeadingName(task.id, newName)
                                                setTimeout(() => {
                                                    setEditMode(0)
                                                }, 500)
                                            }
                                        }}>Ok</button>
                                    </div>
                                </> : ''
                        }
                    </>
                }
            }
        </Draggable >
    )
}

export default TaskHeading