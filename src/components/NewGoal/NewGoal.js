import React, {useState} from "react";
import "./NewGoal.css";

const NewGoal = props => {
    const [goalText, setGoalText] = useState('');
    const addGoalHandler = event => {
        event.preventDefault();

        const newGoal = {
            id: Math.random().toString(),
            text: goalText
        };
        setGoalText('');

        props.onAddGoal(newGoal);
    };

    const goalTextChangeHandler = event => {
        setGoalText(event.target.value);
    };

    return <form className="new-goal" onSubmit={addGoalHandler}>
        <input type="text" value={goalText} onChange={goalTextChangeHandler}/>
        <button type="submit">Add Goal</button>
    </form>
};

export default NewGoal;