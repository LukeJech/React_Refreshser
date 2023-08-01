import React from 'react';
import './App.css';
import GoalList from './components/GoalList';

const App = () => {
  const courseGoals = [{id: 'cg1', text: 'Finish the Course'}, 
  {id: 'cg2', text: 'Learn all about the Course Main Topic'}, 
  {id: 'cg3', text: 'Help other students in the Course Q&A'}, 
  {id: 'cg4', text: 'Creat my own React Game'}];

  return <div>
    <h1>A React App!</h1>
    <GoalList goals={courseGoals}/>
  </div>;
};

export default App;
