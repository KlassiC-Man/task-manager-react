import {useState} from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: "Programming",
        day: "May 26th at 5:50pm",
        reminder: true,
    },
    {
        id: 2,
        text: "Learn React",
        day: "May 26th at 6:00pm",
        reminder: true,
    },
    {
        id: 3,
        text: "Study",
        day: "May 26th at 12:00pm",
        reminder: false,
    }
  ])

  //addTask
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    console.log(id);
    const newTask = {id, ...task};
    setTasks([...tasks, newTask]);
  }

  //Toggle Reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
  }

  //Task Deleter!
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  }  

  return (
    <div className="container">
      <AddTask onAdd={addTask} />
      <Header />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : 'No Tasks Pending!'}
    </div>
  );
}

export default App;
