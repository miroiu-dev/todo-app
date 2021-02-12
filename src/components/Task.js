import React from 'react';
import Button from './Button';
import clsx from 'clsx';
import './css/task.css';

const Task = ({ task, onRemove, showCompleted, onEdit }) => {
	const completed = clsx('task-container', task.completed && 'completed');
	return (
		<div className={`task-container ${completed}`}>
			<div className="task-content" onClick={() => showCompleted(task.id)}>
				<h3 className={`task-title ${completed}`}>{task.title}</h3>
				<p className="task-title">{task.content}</p>
			</div>
			<div>
				<Button
					className="edit"
					onClick={() => {
						onEdit(task);
					}}
				>
					Edit
				</Button>
				<Button className="remove" onClick={() => onRemove(task.id)}>
					Remove
				</Button>
			</div>
		</div>
	);
};

export default Task;
