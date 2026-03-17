import React from "react";

function TaskItem({ task, index, deleteTask, toggleTask }) {

return (

<div className="task-item">

<div>

<input
type="checkbox"
checked={task.completed}
onChange={()=>toggleTask(index)}
/>

<span className={task.completed ? "completed" : ""} style={{marginLeft:"8px"}}>
{task.text}
</span>

</div>

<button onClick={()=>deleteTask(index)}>
Delete
</button>

</div>

);
}

export default TaskItem;