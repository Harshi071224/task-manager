import React from "react";
import TaskItem from "./TaskItem.jsx";

function TaskList({ tasks, deleteTask, toggleTask }) {

return (

<div>

{tasks.map((task,index)=>(
<TaskItem
key={index}
task={task}
index={index}
deleteTask={deleteTask}
toggleTask={toggleTask}
/>
))}

</div>

);
}

export default TaskList;