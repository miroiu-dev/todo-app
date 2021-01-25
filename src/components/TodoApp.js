import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import clsx from 'clsx';
import './css/todoapp.css';

const initialTasks = [
	{
		id: 0,
		title: 'Example Task',
		content: 'Tap to mark as completed',
		completed: false,
	},
	{
		id: 1,
		title: 'Example Task',
		content: "I'm completed",
		completed: true,
	},
	{
		id: 2,
		title: 'Example Task',
		content: 'Press the add button to create a new task',
		completed: false,
	},
];
const savedTheme = localStorage.getItem('theme');
const savedTodos = JSON.parse(localStorage.getItem('todos'));
const TodoApp = () => {
	const [tasks, setTasks] = useState(savedTodos || initialTasks);
	const [editTask, setEditTask] = useState(null);
	const [finished, setFinished] = useState(false);
	const [todo, setTodo] = useState(false);
	const [all, setAll] = useState(true);
	const [theme, setTheme] = useState(savedTheme || 'dark');

	useEffect(() => {
		if (theme == 'light') {
			document.body.style = 'background:var(--pagecolorLight)';
		} else {
			document.body.style = ' background:var(--pagecolor)';
		}
		localStorage.setItem('theme', theme);
		localStorage.setItem('todos', JSON.stringify(tasks));
	}, [theme, tasks]);

	const addTask = (title, content) => {
		const newTask = { id: Math.floor(Math.random() * 1000), title: title, content: content };
		setTasks([...tasks, newTask]);
	};

	const removeTask = id => {
		if (editTask && id === editTask.id) {
			onEditCancel();
		}

		setTasks(tasks.filter(task => task.id !== id));
	};
	const showCompleted = id => {
		setTasks(tasks.map(task => (task.id == id ? { ...task, completed: !task.completed } : task)));
	};
	const showEdit = task => {
		setEditTask(task);
	};

	const onEditCancel = () => {
		setEditTask(null);
	};

	const saveEditTask = (id, title, content) => {
		setTasks(tasks.map(task => (task.id == id ? { ...task, title: title, content: content } : task)));
		setEditTask(null);
	};

	const onCancel = (setTitle, setContent) => {
		setEditMode(false);
		setContent('');
		setTitle('');
	};
	const byCompleted = () => {
		setFinished(true);
		setTodo(false);
		setAll(false);
	};
	const byTodo = () => {
		setTodo(true);
		setFinished(false);
		setAll(false);
	};
	const byAll = () => {
		setAll(true);
		setTodo(false);
		setFinished(false);
	};

	const changeTheme = () => {
		if (theme === 'light') {
			setTheme('dark');
		} else {
			setTheme('light');
		}
	};

	const containerClass = clsx('container', theme);
	return (
		<div className={containerClass}>
			<AddTodo
				key={editTask && editTask.id}
				addTask={addTask}
				onCancel={onCancel}
				editTask={editTask}
				saveEditTask={saveEditTask}
				onEditCancel={onEditCancel}
				theme={theme}
				setTheme={setTheme}
				changeTheme={changeTheme}
			/>
			{tasks.length > 0 && (
				<TodoList
					tasks={tasks}
					onRemove={removeTask}
					showCompleted={showCompleted}
					onEdit={showEdit}
					byCompleted={byCompleted}
					byTodo={byTodo}
					todo={todo}
					finished={finished}
					byAll={byAll}
					all={all}
					theme={theme}
				/>
			)}
		</div>
	);
};

export default TodoApp;
