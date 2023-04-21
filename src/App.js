import SearchBar from "./components/SearchBar"
import NewProject from "./components/NewProject"
import { useState } from 'react'
function App() {

  let tasks = {
    id: Math.ceil(Math.random() * 10000),
    projectName: 'Support & Improvements',
    taskDivider: [
      {
        id: Math.ceil(Math.random() * 10000),
        taskName: 'To do',
        taskItems: [
          {
            id: Math.ceil(Math.random() * 10000),
            taskName: 'Pat',
            date: '04/04/2020',
            comments: [],
            files: [],
            tags: ['Discovery'],
            usersWorking: []
          }
        ]
      }
    ]
  }
  const [taskData, setData] = useState(tasks)
  return (
    <div className="main-container">
      <SearchBar />
      <NewProject data={taskData} />
    </div>
  )
}

export default App