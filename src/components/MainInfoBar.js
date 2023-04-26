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
                    <a href="/">Details</a>
                </div>
            </div>
        </div>
    )
}

export default MainInfoBar