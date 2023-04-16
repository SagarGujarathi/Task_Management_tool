import SearchBar from "./components/SearchBar"
import NewProject from "./components/NewProject"
import { useState, useEffect } from 'react'
function App() {

  let tasks = {
    id: 1,
    projectName: 'Support & Improvements',
    taskBoard: [
      {
        id: 2,
        task: 'To do',
        taskItems: [
          {
            id: 3,
            taskName: 'JS Hint Implementation',
            date: '04/04/2020',
            comments: [],
            files: [],
            tags: ['Discovery'],
            userWorking: []
          },
          {
            id: 4,
            taskName: 'Buy cat',
            date: '04/04/2020',
            comments: [],
            files: [],
            tags: ['Discovery'],
            userWorking: []
          },
          {
            id: 5,
            taskName: 'Play with cat',
            date: '04/04/2020',
            comments: [],
            files: [],
            tags: ['Discovery'],
            userWorking: []
          }
        ]
      },
      {
        id: 6,
        task: 'To do',
        taskItems: [
          {
            id: 7,
            taskName: 'Learn react-dnd',
            date: '04/04/2020',
            comments: [],
            files: [],
            tags: ['Discovery'],
            userWorking: []
          },
          {
            id: 8,
            taskName: 'Learn fast coding',
            date: '04/04/2020',
            comments: [],
            files: [],
            tags: ['Discovery'],
            userWorking: []
          }
        ]
      },
      {
        id: 9,
        task: 'Side tasks',
        taskItems: [
          {
            id: 10,
            taskName: 'Play game',
            date: '04/04/2020',
            comments: [],
            files: [],
            tags: ['Discovery'],
            userWorking: []
          },
          {
            id: 11,
            taskName: 'Complete this project',
            date: '04/04/2020',
            comments: [],
            files: [],
            tags: ['Discovery'],
            userWorking: []
          }
        ]
      },
      {
        id: 12,
        task: 'Must do',
        taskItems: [
          {
            id: 13,
            taskName: 'Optimize the code',
            date: '04/04/2020',
            comments: [],
            files: [],
            tags: ['Discovery'],
            userWorking: []
          },
          {
            id: 14,
            taskName: 'Debug',
            date: '04/04/2020',
            comments: [],
            files: [],
            tags: ['Discovery'],
            userWorking: []
          }
        ]
      },
      {
        id: 15,
        task: 'Other work',
        taskItems: [
          {
            id: 16,
            taskName: 'Host the site',
            date: '04/04/2020',
            comments: [],
            files: [],
            tags: ['Discovery'],
            userWorking: []
          },
          {
            id: 17,
            taskName: 'Sleep',
            date: '04/04/2020',
            comments: [],
            files: [],
            tags: ['Discovery'],
            userWorking: []
          }
        ]
      }
    ]
  }
  let meow = tasks
  const [taskData, setData] = useState(tasks)
  function shiftTask(data, id) {
    console.log(data.id, id)
    let newData = [...meow.taskBoard]
    newData = newData.map((item) => {
      return {
        ...item,
        taskItems: item.taskItems.filter((object) => { return object.id != data.id })
      }
    })
    newData = newData.map((item) => {
      return {
        ...item,
        taskItems: (item.id == id) ? [...item.taskItems, data] : [...item.taskItems]
      }
    })
    let temp = {
      id: meow.id,
      projectName: meow.projectName,
      taskBoard: newData
    }
    meow = temp
    setData(temp)
  }
  return (
    <div className="main-container">
      <SearchBar />
      <NewProject data={taskData} shiftTask={shiftTask} />
    </div>
  )
}

export default App