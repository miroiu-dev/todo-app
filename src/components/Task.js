import React from 'react';
import Button from './Button';
import clsx from 'clsx';
import './css/task.css';

const Task = ({ task, onRemove, showCompleted, onEdit, theme }) => {
	const completed = task.completed ? 'completed' : '';
	const title = clsx('task-title', theme);
	const edit = clsx('edit', theme);
	return (
		<div className={`task-container ${completed}`} onDoubleClick={() => showCompleted(task.id)}>
			<div className="task-content">
				<h3 className={`${title} ${completed}`}>{task.title}</h3>
				<p className={title}>{task.content}</p>
			</div>
			<div>
				<Button
					className={edit}
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
