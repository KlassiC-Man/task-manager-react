import {useState} from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';

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
  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
