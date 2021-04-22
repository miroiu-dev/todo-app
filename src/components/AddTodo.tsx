import React, { useState, useEffect } from 'react';
import InputBox from './InputBox';
import './css/addtodo.css';
import { ToggleThemeButton } from './ToggleTheme';

const savedTheme = localStorage.getItem('theme');
type Task = {
	id: number;
	title: string;
	content: string;
	completed: boolean;
};
type Props = {
	addTask: (title: string, content: string) => void;
	onEditCancel: () => void;
	editTask: null | Task;
	saveEditTask: (id: number, title: string, content: string) => void;
};

const AddTodo: React.FC<Props> = ({
	addTask,
	onEditCancel,
	editTask,
	saveEditTask,
}) => {
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

	const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(e.target.value);
		setErrors({ ...errors, title: !e.target.value });
	};
	const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
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

	const addEditedTodo = (newTitle: string, newContent: string) => {
		if (editTask && newTitle.length && newContent.length) {
			saveEditTask(editTask.id, title, content);
			setTitle('');
			setContent('');
		}
		setErrors({ title: title.length === 0, content: content.length === 0 });
	};
	return (
		<div
			className="add-todo-container"
			onKeyPress={ev => ev.key === 'Enter' && addTodo()}
		>
			<div className="task-tracker-container">
				<h2 className="task-tracker">Task Tracker</h2>
				<div className="btns-container-add">
					{!editTask && (
						<ToggleThemeButton
							theme={theme}
							onClick={changeTheme}
						/>
					)}

					{!editTask && (
						<button className="btn" onClick={addTodo}>
							Add
						</button>
					)}
				</div>
				{editTask && (
					<div>
						<button
							className="btn edit margin"
							onClick={() => addEditedTodo(title, content)}
						>
							Edit
						</button>
						<button className="btn cancel" onClick={onCancel}>
							Cancel
						</button>
					</div>
				)}
			</div>
			<div className="todo-create-container">
				<InputBox
					label="Title:"
					value={title}
					onChange={onChangeTitle}
					hasError={errors.title}
				/>
				<InputBox
					label="Todo:"
					value={content}
					onChange={onChangeContent}
					hasError={errors.content}
				/>
			</div>
		</div>
	);
};

export default AddTodo;
