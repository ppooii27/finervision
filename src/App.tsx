import * as React from 'react';
import ListComment from './components/Comment/Index';
import CommentForm from './components/Comment/CommentForm';
import Nav from './components/Nav';
import { Routes, Route } from 'react-router-dom';

function App() {
	return (
		<>
			<Nav />
			<Routes>
				<Route path="/" element={<CommentForm />} />
				<Route path="/comments" element={<ListComment />} />
			</Routes>
		</>
	);
}

export default App;
