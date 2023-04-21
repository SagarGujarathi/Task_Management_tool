
import '../css/TaskItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFile, faMessage, faCalendarDays } from '@fortawesome/free-solid-svg-icons'
function TaskItem({ data }) {
    return (
        <>
            <div className="task-item">
                <div className="task-item-heading">{data.taskName}</div>
                <div className="info-container">
                    <span className="file-container">
                        <FontAwesomeIcon icon={faFile} />
                        {data.files.length}
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
            </div >
        </>
    )
}

export default TaskItem