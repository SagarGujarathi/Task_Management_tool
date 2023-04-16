import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter } from '@fortawesome/free-solid-svg-icons'
import '../css/MainInfoBar.css'
function MainInfoBar(props) {
    return (
        <div className="main-info-bar">
            <div className="repo-name">
                {props.projectName}
            </div>
            <div className="task-nav-bar">
                <div className="links">
                    <a href="/">Board</a>
                    <a href="/">Files</a>
                    <a href="/">Details</a>
                </div>
                <span>
                    <FontAwesomeIcon icon={faFilter} /> &nbsp; Add filter
                </span>
            </div>
        </div>
    )
}

export default MainInfoBar