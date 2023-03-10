import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
    
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');

    const [relationshipStatus, setRelationshipStatus] = useState('');

    const updateFirstName = (event) => {
        setFirstName(event.target.value);
    }

    const updateSecondName = (event) => {
        setSecondName(event.target.value);
    }

    const relationships = (number) => {
        if(number === 1){
            return "Friends";
        }
        if(number === 2){
            return "Love";
        }
        if(number === 3){
            return "Affection";
        }
        if(number === 4){
            return "Marriage";
        }
        if(number === 5){
            return "Enemy";
        }
        
        return "Siblings";
        
    }

    const calculateRelationship = () => {
        let firstArray = firstName.split("");
        let secondArray = secondName.split("");

        if(firstArray.length === 0 || secondArray.length === 0){
            setRelationshipStatus('Please Enter valid input');
            return;
        }

        let count = 0;

        firstArray.forEach((element) => {
            if(secondArray.includes(element)){
                count++;
            }
        })

        let totalLength = (firstArray.length + secondArray.length - ( count * 2 )) % 6;
        
        let str = relationships(totalLength);

        setRelationshipStatus(str);
    }

    const clearInputs = () => {
        setFirstName('');
        setSecondName('');
        setRelationshipStatus('');
    }

    return(
        <div id="main">
            <input data-testid="input1" value={firstName} onChange={updateFirstName}/>
            <input data-testid="input2" value={secondName} onChange={updateSecondName}/>

            <button data-testid="calculate_relationship" onClick={calculateRelationship}>Calculate Relationship Future</button>
            <button data-testid="clear" onClick={clearInputs}>Clear</button>

            <h3 data-testid="answer">{relationshipStatus}</h3>
        </div>
    )

}

export default App;
