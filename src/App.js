import SearchBar from "./components/SearchBar"
import MainInfoBar from './components/MainInfoBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { } from '@fortawesome/free-solid-svg-icons'
function App() {
  return (
    <div className="main-container">
      <SearchBar />
      <MainInfoBar />
      <div className="primary-task-container">
        <div className="task-heading-container">
          <div className="task-heading">To do</div>
        </div>
        <div className="main-task-container">
          <div className="task-container">
            <div className="task-item"></div>
            <div className="task-item"></div>
          </div>
          <div className="task-container">
            <div className="task-item"></div>
            <div className="task-item"></div>
          </div>
          <div className="task-container">
            <div className="task-item"></div>
            <div className="task-item"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App