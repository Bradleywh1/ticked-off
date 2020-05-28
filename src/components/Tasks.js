import React from 'react';

export const tasks = () => {
    const tasks = []; 

    let projectName = '';

    return (
        <div className="tasks" data-testid="tasks">
            <h2 data-testid="project-name">{projectName}</h2>

            <ul className="task__list">
                {tasks.map(task => (
                    <li key={`${task.id}`}>
                        <Checkbox id={task.id} />
                    </li>
                ))}
            </ul>
        </div>
    )
}