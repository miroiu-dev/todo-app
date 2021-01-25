import React from 'react';
import Task from './Task';
import Button from './Button';
import './css/todolist.css';
import clsx from 'clsx';
const TodoList = ({
	tasks,
	onRemove,
	showCompleted,
	onEdit,
	byCompleted,
	byTodo,
	todo,
	finished,
	byAll,
	all,
	theme,
}) => {
	const taskList = clsx('task-list-container', theme);
	const filter = clsx('filter', theme);
	return (
		<div className={taskList}>
			<div className={filter}>
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
			{all &&
				tasks.map(task => (
					<Task
						key={task.id}
						task={task}
						onRemove={onRemove}
						showCompleted={showCompleted}
						onEdit={onEdit}
						theme={theme}
					/>
				))}
			{todo &&
				tasks.map(task =>
					task.completed == false ? (
						<Task
							key={task.id}
							task={task}
							onRemove={onRemove}
							showCompleted={showCompleted}
							onEdit={onEdit}
							theme={theme}
						/>
					) : (
						<></>
					)
				)}
			{finished &&
				tasks.map(task =>
					task.completed == true ? (
						<Task
							key={task.id}
							task={task}
							onRemove={onRemove}
							showCompleted={showCompleted}
							onEdit={onEdit}
							theme={theme}
						/>
					) : (
						<></>
					)
				)}
		</div>
	);
};

export default TodoList;
