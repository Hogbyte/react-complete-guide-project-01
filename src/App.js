import { useState } from 'react';

import UserList from './components/UserList';
import UserInput from './components/UserInput';

import css from './App.module.css';

const App = () => {
  const [ users, setUsers ] = useState([]);

  const addUserHandler = (newUser) => {
      setUsers([...users, newUser]);
  }

  return (
    <div className={css.app}>
      <UserInput onAddUser={addUserHandler} />
      <br />
      <UserList users={users} />      
    </div>
  );
}

export default App;
