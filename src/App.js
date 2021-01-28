import React, { useEffect, useState } from 'react';
import './style.css';
import TodoApp from './components/TodoApp';
import { ThemeContext } from './context/ThemeContext';

const version = Number.parseFloat(localStorage.getItem('version') || 0);
const newVersion = 1.2;

if (version < newVersion) {
	console.log('Outdated app: removing local storage');
	localStorage.removeItem('todos');
}

localStorage.setItem('version', JSON.stringify(newVersion));
const savedTheme = localStorage.getItem('theme');

export default function App() {
	const [theme, setTheme] = useState(savedTheme || 'dark');

	useEffect(() => {
		if (theme == 'light') {
			document.body.style = 'background:var(--pagecolorLight)';
		} else {
			document.body.style = ' background:var(--pagecolor)';
		}
		localStorage.setItem('theme', theme);
	}, [theme]);

	const toggleTheme = () => {
		setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
	};

	return (
		<ThemeContext.Provider value={theme}>
			<TodoApp toggleTheme={toggleTheme} />
		</ThemeContext.Provider>
	);
}
