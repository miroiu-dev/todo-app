import React, { useContext } from 'react';
import Button from './Button';
import clsx from 'clsx';
import './css/task.css';
import { ThemeContext } from '../context/ThemeContext';

const Task = ({ task, onRemove, showCompleted, onEdit }) => {
	const theme = useContext(ThemeContext);
	const completed = task.completed ? 'completed' : '';
	const title = clsx('task-title', theme);
	const edit = clsx('edit', theme);
	return (
		<div className={`task-container ${completed}`}>
			<div className="task-content" onClick={() => showCompleted(task.id)}>
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
