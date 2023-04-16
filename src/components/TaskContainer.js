
import { useDrop } from 'react-dnd'
import TaskItem from './TaskItem'


function TaskContainer({ data, shiftTask }) {
    const [{ isOver }, drop] = useDrop(() => ({
        accept: 'taskItem',
        drop: (item, monitor) => shiftTask(item, data.id),
        collect: (monitor) => ({
            isOver: monitor.isOver()
        })
    }))
    return (
        <div className="task-container" ref={drop}>
            {data.taskItems.map((taskItem) => {
                return (
                    <TaskItem data={taskItem} />
                )
            })}
            {isOver ?
                <div style={{ height: '200px', backgroundColor: '#FFFFFF', opacity: '0.2' }}></div>
                : ''
            }
        </div>
    )
}

export default TaskContainer