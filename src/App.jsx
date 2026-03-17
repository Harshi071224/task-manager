import React, { useState, useEffect } from "react";
import TaskInput from "./TaskInput.jsx";
import TaskList from "./TaskList.jsx";

function App() {

const [tasks, setTasks] = useState(() => {
const savedTasks = localStorage.getItem("tasks");
return savedTasks ? JSON.parse(savedTasks) : [];
});

useEffect(() => {
localStorage.setItem("tasks", JSON.stringify(tasks));
}, [tasks]);

const addTask = (task) => {
setTasks([...tasks, { text: task, completed: false }]);
};

const deleteTask = (index) => {
const newTasks = tasks.filter((t, i) => i !== index);
setTasks(newTasks);
};

const toggleTask = (index) => {
const updated = [...tasks];
updated[index].completed = !updated[index].completed;
setTasks(updated);
};

return (

<div>

<nav className="navbar">
<h2 className="logo">My Task Manager</h2>
<div className="nav-links">
<a href="#home">Home</a>
<a href="#about">About</a>
<a href="#tasks">Tasks</a>
</div>
</nav>

<div className="container">

<section id="home">

<h1>Welcome to Student Task Manager</h1>

<p>
Stay organized and manage your daily activities efficiently.  
This simple task manager helps students add, track, and complete their tasks easily.
</p>

</section>

<section id="about">

<h2>About</h2>

<p>
The Student Task Manager is a simple and user-friendly web application built using React.
It helps students organize their daily tasks efficiently and stay productive.
</p>

<p>
Users can easily add new tasks, mark tasks as completed, and delete tasks once they are finished.
The application also keeps track of the total number of tasks and saves tasks automatically using local storage.
</p>


</section>

<section id="tasks">

<h2>Task Manager</h2>
<div className="task-card">
<TaskInput addTask={addTask} />
<h3>Total Tasks: {tasks.length}</h3>
{tasks.length === 0 ? (
<p className="no-task">No tasks available</p>
) : (
<TaskList
tasks={tasks}
deleteTask={deleteTask}
toggleTask={toggleTask}
/>
)}

</div>

</section>

</div>

<footer className="footer">

<div className="footer-content">

<div className="footer-left">
<h3>My Task Manager</h3>
<p>Organize your tasks and stay productive every day.</p>
</div>

<div className="footer-links">
<a href="#home">Home</a>
<a href="#about">About</a>
<a href="#tasks">Tasks</a>
</div>

</div>

<p className="copyright">
© 2026 Student Task Manager
</p>

</footer>
</div>

);
}

export default App;