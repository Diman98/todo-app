import { useState } from "react";

function TodoInput({ onAdd }) {
    const [task, setTask] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!task.trim()) return; // defence from empty task
        onAdd(task);
        setTask(""); // clear a field
    };

    return (
        <form onSubmit={handleSubmit} className="todo-form">
            <input
                type="text"
                placeholder="Enter a goal..."
                value={task}
                onChange={(e) => setTask(e.target.value)}
            />
            <button type="submit">Add</button>
        </form>
    );
}

export default TodoInput;
