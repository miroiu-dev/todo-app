import React, { useContext } from 'react';
import Task from './Task';
import Button from './Button';
import './css/todolist.css';
import clsx from 'clsx';
import { ThemeContext } from '../context/ThemeContext';

const applyFilter = (tasks, filter) => {
	if (filter.completed) {
		return tasks.filter(t => t.completed);
	}

	if (filter.todo) {
		return tasks.filter(t => !t.completed);
	}

	return tasks;
};

const TodoList = ({ tasks, onRemove, showCompleted, onEdit, byCompleted, byTodo, byAll, filter }) => {
	const theme = useContext(ThemeContext);
	const taskList = clsx('task-list-container', theme);
	const filterButtons = clsx('filter', theme);

	const filteredTasks = applyFilter(tasks, filter);

	return (
		<div className={taskList}>
			<div className={filterButtons}>
				<div className="filter-content">
					<h3>Filter by:</h3>
					<div className="filter-btn-container">
						<Button className="finished" onClick={byCompleted}>
							Completed
						</Button>
						<Button className="todo" onClick={byTodo}>
							Todo
						</Button>
						<Button className="unfiltered" onClick={byAll}>
							All
						</Button>
					</div>
				</div>
			</div>
			{filteredTasks.map(task => (
				<Task key={task.id} task={task} onRemove={onRemove} showCompleted={showCompleted} onEdit={onEdit} />
			))}
		</div>
	);
};

export default TodoList;
