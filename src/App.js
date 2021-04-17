import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import {useState} from 'react'

function App() {

  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointmet',
        day: 'Feb 5th at 2:30pm',
        reminder: true
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 8th at 14:10pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Mar 14th at 10:00am',
        reminder: false
    },
    {
        id: 4,
        text: 'Zoom Java Appointmet',
        day: 'Jan 25th at 08:20am',
        reminder: true
    },
    {
        id: 5,
        text: 'UAT Appointmet',
        day: 'Feb 2th at 2:30pm',
        reminder: false
    }
])

// Delete Task
const deleteTask = (id) =>{
  console.log(id)
  setTasks(tasks.filter((task) => task.id !== id))
}

// Toggle Reminder
const toggleReminder = (id) =>{
  console.log(id)
  setTasks(tasks.map((task) => task.id === id? { ...task, reminder: !task}: task))
}

// Add Task
const addTask = (task) =>{
  console.log(task)
  const id = Math.floor(Math.random() * 1000) + 1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}

return (
    <div className='container'>
      <Header title={ 'Task Tracker' }  onAddTask={ () => setShowAddTask(!showAddTask)} />
      {
        showAddTask && <AddTask onAddTask = { addTask } />
      }
      {
        tasks.length > 0? <Tasks tasks={ tasks } onDelete={ deleteTask } onToggle={ toggleReminder } />: 'No tasks to show' 
      }
      
    </div>
  );
}

export default App;
