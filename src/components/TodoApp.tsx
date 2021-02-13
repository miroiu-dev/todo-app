import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import './css/todoapp.css';
import axios from 'axios';

const savedTodos: Task[] | null = JSON.parse(localStorage.getItem('todos') || 'null');

type Task = {
	id: number;
	title: string;
	content: string;
	completed: boolean;
};

const TodoApp = () => {
	const [tasks, setTasks] = useState<Task[]>(savedTodos || []);
	const [editTask, setEditTask] = useState<null | Task>(null);
	const [filter, setFilter] = useState({
		completed: false,
		todo: false,
		all: true,
	});

	useEffect(() => {
		async function fetchData() {
			if (!savedTodos) {
				const todosResponse = await axios('https://jsonplaceholder.typicode.com/todos');
				setTasks(todosResponse.data.slice(0, 4).map((todo: Task) => ({ ...todo, content: todo.title })));
			}
		}
		fetchData();
	}, []);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(tasks));
	}, [tasks]);

	const addTask = (title: string, content: string) => {
		const newTask = { id: Math.floor(Math.random() * 1000), title: title, content: content, completed: false };
		console.log([...tasks, newTask]);
		setTasks([...tasks, newTask]);
	};

	const removeTask = (id: number) => {
		if (editTask && id === editTask.id) {
			onEditCancel();
		}

		setTasks(tasks.filter(task => task.id !== id));
	};

	const showCompleted = (id: number) => {
		setTasks(tasks.map(task => (task.id === id ? { ...task, completed: !task.completed } : task)));
	};

	const showEdit = (task: Task) => {
		setEditTask(task);
	};

	const onEditCancel = () => {
		setEditTask(null);
	};

	const saveEditTask = (id: number, title: string, content: string) => {
		setTasks(tasks.map(task => (task.id === id ? { ...task, title: title, content: content } : task)));
		setEditTask(null);
	};

	const byCompleted = () => {
		setFilter({ ...filter, todo: false, all: false, completed: true });
	};

	const byTodo = () => {
		setFilter({ ...filter, todo: true, all: false, completed: false });
	};

	const byAll = () => {
		setFilter({ ...filter, todo: false, all: true, completed: false });
	};

	return (
		<div className="container">
			<AddTodo
				key={editTask && editTask.id}
				addTask={addTask}
				editTask={editTask}
				saveEditTask={saveEditTask}
				onEditCancel={onEditCancel}
			/>
			{tasks.length > 0 && (
				<TodoList
					tasks={tasks}
					onRemove={removeTask}
					showCompleted={showCompleted}
					onEdit={showEdit}
					byCompleted={byCompleted}
					byTodo={byTodo}
					byAll={byAll}
					filter={filter}
				/>
			)}
		</div>
	);
};

export default TodoApp;
