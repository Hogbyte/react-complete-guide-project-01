import { useState } from 'react';

import ErrorModal from './ErrorModal';

import css from './UserInput.module.css';

const UserInput = (props) => {
    const [ name, setName ] = useState('');
    const [ age, setAge ] = useState('');
    const [ errorMessage, setErrorMessage ] = useState('');

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    };

    const ageChangeHandler = (event) => {
        setAge(event.target.value);
    };

    const clickHandler = () => {
        const nameText = name.trim();
        if (nameText.length === 0) {
            setErrorMessage('Please enter a username.');
            return;
        }

        const ageText = age.trim();
        if (ageText.length === 0 || Number.isNaN(+ageText)) {
            setErrorMessage('Please enter a number for an age value.');
            return;
        }

        const ageValue = +ageText;
        if (ageValue < 0 || ageValue > 99) {
            setErrorMessage('Please enter an age value between 0 and 99.');
            return;
        }
        
        setName('');
        setAge('');

        const newUser = { name: nameText, age: ageValue };
        props.onAddUser(newUser);
    };

    const modalCloseHandler = () => {
        setErrorMessage('');
    };

    return (
        <>
            <ErrorModal message={errorMessage} onClose={modalCloseHandler} />
            <div className={css.userInput}>
                Username:<br />
                <input type="text" value={name} onChange={nameChangeHandler} /><br />
                Age (Years):<br />
                <input type="text" value={age} onChange={ageChangeHandler} /><br />
                <button type="button" onClick={clickHandler}>Add User</button>
            </div>
        </>
    );
}

export default UserInput;