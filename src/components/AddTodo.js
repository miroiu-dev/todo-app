import React, { useState, useEffect } from 'react';
import InputBox from './InputBox';
import './css/addtodo.css';
import { FaMoon as DarkThemeIcon, FaSun as LightThemeIcon } from 'react-icons/fa';

const savedTheme = localStorage.getItem('theme');

const AddTodo = ({ addTask, onEditCancel, editTask, saveEditTask }) => {
	const [title, setTitle] = useState(editTask ? editTask.title : '');
	const [content, setContent] = useState(editTask ? editTask.content : '');
	const [errors, setErrors] = useState({ title: false, content: false });

	const [theme, setTheme] = useState(savedTheme || 'dark');

	useEffect(() => {
		document.documentElement.setAttribute('data-theme', theme);
		localStorage.setItem('theme', theme);
	}, [theme]);

	const changeTheme = () => {
		setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
	};

	const onChangeTitle = e => {
		setTitle(e.target.value);
		setErrors({ ...errors, title: !e.target.value });
	};
	const onChangeContent = e => {
		setContent(e.target.value);
		setErrors({ ...errors, content: !e.target.value });
	};
	const addTodo = () => {
		if (title.trim() && content.trim()) {
			addTask(title, content);
			setTitle('');
			setContent('');
		}
		setErrors({ title: !title.trim(), content: !content.trim() });
	};

	const onCancel = () => {
		onEditCancel();
		setTitle('');
		setContent('');
	};

	const addEditedTodo = (newTitle, newContent) => {
		if (newTitle.length > 0 && newContent.length > 0) {
			saveEditTask(editTask.id, title, content);
			setTitle('');
			setContent('');
		}
		setErrors({ title: title.length === 0, content: content.length === 0 });
	};
	return (
		<div className="add-todo-container" onKeyPress={ev => ev.key === 'Enter' && addTodo()}>
			<div className="task-tracker-container">
				<h2 className="task-tracker">Task Tracker</h2>
				<div className="btns-container-add">
					{!editTask && (
						<button className="theme-button" onClick={changeTheme} aria-label="Switch theme">
							{theme == 'dark' ? <LightThemeIcon /> : <DarkThemeIcon />}
						</button>
					)}

					{!editTask && (
						<button className="btn" onClick={addTodo}>
							Add
						</button>
					)}
				</div>
				{editTask && (
					<div>
						<button className="btn edit margin" onClick={() => addEditedTodo(title, content)}>
							Edit
						</button>
						<button className="btn cancel" onClick={onCancel}>
							Cancel
						</button>
					</div>
				)}
			</div>
			<div className="todo-create-container">
				<InputBox label="Title:" value={title} onChange={onChangeTitle} hasError={errors.title} />
				<InputBox label="Todo:" value={content} onChange={onChangeContent} hasError={errors.content} />
			</div>
		</div>
	);
};

export default AddTodo;
