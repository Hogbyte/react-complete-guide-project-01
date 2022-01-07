import { useState } from 'react';

import css from './UserInput.module.css';

const UserInput = (props) => {
    const [ name, setName ] = useState('');
    const [ age, setAge ] = useState('');

    const nameChangeHandler = (event) => {
        setName(event.target.value.trim());
    };

    const ageChangeHandler = (event) => {
        setAge(event.target.value);
    }

    const clickHandler = () => {
        const newUser = { name, age: +age };
        setName('');
        setAge('');
        props.onAddUser(newUser);
    }

    return (
        <div className={css.userInput}>
            Username:<br />
            <input type="text" value={name} onChange={nameChangeHandler} /><br />
            Age (Years):<br />
            <input type="text" value={age} onChange={ageChangeHandler} /><br />
            <button type="button" onClick={clickHandler}>Add User</button>
        </div>
    );
}

export default UserInput;