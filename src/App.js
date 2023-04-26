import SearchBar from "./components/SearchBar"
import NewProject from "./components/NewProject"
import { useState } from 'react'
import { DragDropContext } from 'react-beautiful-dnd';
import Sidebar from "./components/Sidebar";

function App() {

  let tasks = [{
    id: Math.ceil(Math.random() * 10000),
    projectName: 'Support & Improvements',
    taskDivider: [
      {
        id: Math.ceil(Math.random() * 10000),
        taskName: 'To do',
        taskItems: [
          {
            id: Math.ceil(Math.random() * 10000),
            taskName: 'Spend time on positive things',
            startDate: '04/04/2020',
            endDate: '28/04/2020',
            comments: [],
            files: [],
            tags: ['Discovery'],
          }
        ]
      },
      {
        id: Math.ceil(Math.random() * 10000),
        taskName: 'In progress',
        taskItems: [
          {
            id: Math.ceil(Math.random() * 10000),
            taskName: 'Complete this project',
            startDate: '04/04/2020',
            endDate: '28/04/2020',
            endDate: '28/04/2020',
            comments: [],
            files: [],
            tags: ['Discovery'],
          },
          {
            id: Math.ceil(Math.random() * 10000),
            taskName: 'Learn new techs!',
            startDate: '04/04/2020',
            endDate: '28/04/2020',
            comments: [],
            files: [],
            tags: ['Discovery'],
          },
          {
            id: Math.ceil(Math.random() * 10000),
            taskName: 'Solve DSA',
            startDate: '04/04/2020',
            endDate: '28/04/2020',
            comments: [],
            files: [],
            tags: ['Discovery'],
          }
        ]
      }]
  }]
  const [taskData, setData] = useState(tasks)

  function handleTaskDnD({ source, destination }) {
    setData(oldData => {
      let dataClone = [...oldData]
      let removedData;
      dataClone.forEach((project, index1) => {
        project.taskDivider.forEach((container, index2) => {
          if (container.id == source.droppableId) {
            removedData = container.taskItems[source.index]
            dataClone[index1].taskDivider[index2].taskItems.splice(source.index, 1)
          }
        })
      })
      dataClone.forEach((project, index1) => {
        project.taskDivider.forEach((container, index2) => {
          if (container.id == destination.droppableId) {
            dataClone[index1].taskDivider[index2].taskItems.splice(destination.index, 0, removedData)
          }
        })
      })
      return dataClone
    })
  }

  function handleHeadingDnD({ source, destination, type, draggableId }) {
    setData(oldData => {
      let dataClone = [...oldData]
      let removedData;
      dataClone.forEach((project, index) => {
        if (project.id == source.droppableId) {
          removedData = project.taskDivider[source.index]
          project.taskDivider.splice(source.index, 1)
        }
      })
      dataClone.forEach((project, index) => {
        if (project.id == source.droppableId) {
          project.taskDivider.splice(destination.index, 0, removedData)
        }
      })
      return dataClone
    })

  }
  function handleEvent({ source, destination, type, draggableId }) {
    if (!destination) {
      return;
    }

    switch (type) {
      case 'task-group':
        handleTaskDnD({ source, destination, type, draggableId })
      case 'heading':
        handleHeadingDnD({ source, destination, type, draggableId })
    }
  }

  function changeTaskHeadingName(name, id) {
    setData(oldData => {
      let dataClone = [...oldData]
      dataClone.forEach((project) => {
        project.taskDivider.forEach((container) => {
          if (container.id == id) {
            container.taskName = name;
          }
        })
      })
      return dataClone
    })

  }
  function createTaskHeading(name, id) {
    setData(oldData => {
      let dataClone = [...oldData]
      dataClone.forEach((project) => {
        if (project.id == id) {
          project.taskDivider.push({
            id: Math.ceil(Math.random() * 10000),
            taskName: name,
            taskItems: []
          })
        }
      })
      return dataClone
    })
  }
  function deleteTaskItem(id) {
    setData(oldData => {
      let dataClone = [...oldData]
      dataClone.forEach((project) => {
        project.taskDivider.forEach((container) => {
          container.taskItems.forEach((task, index) => {
            if (task.id == id) {
              container.taskItems.splice(index, 1)
            }
          })
        })
      })
      return dataClone
    })
  }
  function deleteTaskHeading(id) {
    setData(oldData => {
      let dataClone = [...oldData]
      dataClone.forEach((project) => {
        project.taskDivider.forEach((container, index) => {
          if (container.id == id) {
            project.taskDivider.splice(index, 1)
          }
        })
      })
      return dataClone
    })
  }
  function editTask(data, id) {
    setData(oldData => {
      let dataClone = [...oldData]
      dataClone.forEach((project, index1) => {
        project.taskDivider.forEach((container, index2) => {
          container.taskItems.forEach((task, index) => {
            if (task.id == id) {
              container.taskItems[index] = data
            }
          })
        })
      })
      return dataClone
    })
  }
  function createTask(data, id) {
    setData(oldData => {
      let dataClone = [...oldData]
      dataClone.forEach((project) => {
        project.taskDivider.forEach((container, index) => {
          if (container.id == id) {
            project.taskDivider[index].taskItems.push(data)
          }
        })
      })
      return dataClone
    })
  }
  return (
    <DragDropContext onDragEnd={(result) => {
      handleEvent(result)
    }}>
      <div className="main-container">
        <SearchBar />
        <NewProject data={taskData[0]}
          changeTaskHeadingName={changeTaskHeadingName}
          createTaskHeading={createTaskHeading}
          deleteTaskItem={deleteTaskItem}
          deleteTaskHeading={deleteTaskHeading}
          editTask={editTask}
          createTask={createTask}
        />
      </div>
      <Sidebar />
    </DragDropContext >
  )
}
export default App