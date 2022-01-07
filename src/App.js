import { useState } from 'react';

import UserList from './components/UserList';
import UserInput from './components/UserInput';

import css from './App.module.css';

const initialUsers = [
  { name: 'User A', age: 25 },
  { name: 'User B', age: 30 },
  { name: 'User C', age: 35 },
  { name: 'User D', age: 40 },
  { name: 'User E', age: 45 }
];

const App = () => {
  const [ users, setUsers ] = useState(initialUsers);

  const addUserHandler = (newUser) => {
      setUsers([...users, newUser]);
  }

  return (
    <div className={css.app}>
      <UserInput onAddUser={addUserHandler} />
      <UserList users={users} />      
    </div>
  );
}

export default App;
