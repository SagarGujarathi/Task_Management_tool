import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faFilter } from '@fortawesome/free-solid-svg-icons'
import '../css/MainInfoBar.css'
function MainInfoBar() {
    return (
        <div className="main-info-bar">
            <div className="repo-name">
                Support & Improvements
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