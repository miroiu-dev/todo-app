import React from 'react';
import Button from './Button';
import clsx from 'clsx';
import './css/task.css';

type Tasks = {
	id: number;
	title: string;
	content: string;
	completed: boolean;
};

type Props = {
	task: Tasks;
	onRemove: (id: number) => void;
	showCompleted: (id: number) => void;
	onEdit: (task: Tasks) => void;
};

const Task: React.FC<Props> = ({ task, onRemove, showCompleted, onEdit }) => {
	const completedContainer = clsx('task-container', task.completed && 'completed');
	const completedTitle = clsx('task-title', task.completed && 'completed');
	return (
		<div className={completedContainer}>
			<div className="task-content" onClick={() => showCompleted(task.id)}>
				<h3 className={completedTitle}>{task.title}</h3>
				<p className="task-title">{task.content}</p>
			</div>
			<div>
				<Button className="edit" onClick={() => onEdit(task)}>
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
