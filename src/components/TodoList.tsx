import React from 'react';
import TaskComponent from './Task';
import Button from './Button';
import './css/todolist.css';

type Task = {
	id: number;
	title: string;
	content: string;
	completed: boolean;
};
type Filter = {
	completed: boolean;
	todo: boolean;
	all: boolean;
};
type Props = {
	tasks: Task[];
	onRemove: (id: number) => void;
	showCompleted: (id: number) => void;
	onEdit: (task: Task) => void;
	byCompleted: () => void;
	byTodo: () => void;
	byAll: () => void;
	filter: Filter;
};

const applyFilter = (tasks: Task[], filter: Filter) => {
	if (filter.completed) {
		return tasks.filter(t => t.completed);
	}

	if (filter.todo) {
		return tasks.filter(t => !t.completed);
	}

	return tasks;
};

const TodoList: React.FC<Props> = ({
	tasks,
	onRemove,
	showCompleted,
	onEdit,
	byCompleted,
	byTodo,
	byAll,
	filter,
}) => {
	const filteredTasks = applyFilter(tasks, filter);

	return (
		<div className="task-list-container">
			<div className="filter">
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
				<TaskComponent
					key={task.id}
					task={task}
					onRemove={onRemove}
					showCompleted={showCompleted}
					onEdit={onEdit}
				/>
			))}
		</div>
	);
};

export default TodoList;
