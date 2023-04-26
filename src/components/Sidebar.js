import '../css/Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDiagramProject } from '@fortawesome/free-solid-svg-icons'
function Sidebar() {
    return <>
        <div className="sidebar-main-container">
            <div className="sidebar-item">
                <div className="list-heading">PROJECTS</div>
                <div className="list-item">
                    <FontAwesomeIcon icon={faDiagramProject} />
                    Support and development
                </div>
                <div className="list-item">
                    <FontAwesomeIcon icon={faDiagramProject} />
                    Support and development
                </div>
                <div className="list-item">
                    <FontAwesomeIcon icon={faDiagramProject} />
                    Support and development
                </div>
            </div>
        </div>
    </>
}

export default Sidebar