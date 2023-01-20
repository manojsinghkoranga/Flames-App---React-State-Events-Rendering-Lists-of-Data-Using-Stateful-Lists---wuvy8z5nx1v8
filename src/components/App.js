import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
    
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');

    const updateFirstName = (event) => {
        setFirstName(event.target.value);
    }

    const updateSecondName = (event) => {
        setSecondName(event.target.value);
    }

    return(
        <div id="main">
            <input data-testid="input1" value={firstName} onChange={updateFirstName}/>
            <input data-testid="input2" value={secondName} onChange={updateSecondName}/>

            <button data-testid="calculate_relationship" onClick={calculateRelationship}>Calculate Relationship Future</button>
            <button data-testid="clear" onClick={clearInputs}>Clear</button>

            {isCalculate && <h1>{}</h1>}
        </div>
    )

}


export default App;
