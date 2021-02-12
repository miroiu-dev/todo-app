import React from 'react';
import './style.css';
import TodoApp from './components/TodoApp';

const version = Number.parseFloat(localStorage.getItem('version') || 0);
const newVersion = 1.2;

if (version < newVersion) {
	console.log('Outdated app: removing local storage');
	localStorage.removeItem('todos');
}

localStorage.setItem('version', JSON.stringify(newVersion));

export default function App() {
	return <TodoApp />;
}
