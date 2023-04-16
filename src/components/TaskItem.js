
import '../css/TaskItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faMessage, faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { useDrag } from 'react-dnd'
function TaskItem({ data }) {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: 'taskItem',
        item: data,
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    }))
    return (
        <>
            <div className="task-item" ref={drag} style={{ opacity: isDragging ? '.5' : '1' }}>
                <div className="task-item-heading">{data.taskName}</div>
                <div className="info-container">
                    <span className="file-container">
                        <FontAwesomeIcon icon={faFile} />
                        {data.fileCount}
                    </span>
                    <span className="chat-container">
                        <FontAwesomeIcon icon={faMessage} />
                        {data.chatCount}
                    </span>
                    <span className="date-container">
                        <FontAwesomeIcon icon={faCalendarDays} />
                        {data.date}
                    </span>
                </div>
                <div className="tags-and-user">
                </div>
            </div>
        </>
    )
}

export default TaskItem