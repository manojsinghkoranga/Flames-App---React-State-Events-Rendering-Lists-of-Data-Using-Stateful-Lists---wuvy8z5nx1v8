import React, {Component, useState} from "react";
import '../styles/App.css';

const App = () => {
    
    const [firstName, setFirstName] = useState('');
    const [secondName, setSecondName] = useState('');

    const [isCalculated, setIsCalculated] = useState('false');
    const [relation, setRelation] = useState('');

    const updateFirstName = (event) => {
        setFirstName(event.target.value);
    }

    const updateSecondName = (event) => {
        setSecondName(event.target.value);
    }

    const relationships = (number) => {
        console.log(typeof number);
        switch (number.type) {
            case 0 : {
                return "Friends";
            }
            case 1 : {
                return "Love";
            }
            case 2 : {
                return "Affection";
            }
            case 3 : {
                return "Marriage";
            }
            case 4 : {
                return "Enemy";
            }
            default : {
                return "Sibling";
            }
        }
    }

    const calculateRelationship = () => {
        let firstArray = firstName.split("");
        let secondArray = secondName.split("");

        setIsCalculated(true);

        if(firstArray.length === 0 || secondArray.length === 0){
            setRelation('Please Enter valid input');
            return;
        }

        let count = 0;

        firstArray.forEach((element) => {
            if(secondArray.includes(element)){
                count++;
            }
        })

        let totalLength = (firstArray.length + secondArray.length - ( count * 2 )) % 6;
        console.log(totalLength);
        let str = relationships(totalLength % 6);

        console.log(str);
        console.log('i reached here');
    }

    const clearInputs = () => {

    }

    return(
        <div id="main">
            <input data-testid="input1" value={firstName} onChange={updateFirstName}/>
            <input data-testid="input2" value={secondName} onChange={updateSecondName}/>

            <button data-testid="calculate_relationship" onClick={calculateRelationship}>Calculate Relationship Future</button>
            <button data-testid="clear" onClick={clearInputs}>Clear</button>

            {isCalculated && <h3>{relation}</h3>}
        </div>
    )

}

export default App;
