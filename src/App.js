import React, {useState} from 'react';
import './App.css';
import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    {id: 'cg1', text: 'Finish the Course'}, 
  {id: 'cg2', text: 'Learn all about the Course Main Topic'}, 
  {id: 'cg3', text: 'Help other students in the Course Q&A'}, 
  {id: 'cg4', text: 'Create my own React Game'}
]);


  const addNewGoalHandler = newGoal => {
    // setCourseGoals(courseGoals.concat(newGoal));
    setCourseGoals((prevCourseGoals) => {
      return prevCourseGoals.concat(newGoal);
    });
  };

  return <div>
    <h1>A React App!</h1>
    <NewGoal onAddGoal={addNewGoalHandler} />
    <GoalList goals={courseGoals}/>
  </div>;
};

export default App;
