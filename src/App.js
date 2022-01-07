import UserList from './components/UserList';

import css from './App.module.css';

const App = () => {
  const users = [
    { name: 'User A', age: 25 },
    { name: 'User B', age: 30 },
    { name: 'User C', age: 35 },
    { name: 'User D', age: 40 },
    { name: 'User E', age: 45 }
  ];

  return (
    <div className={css.app}>
      <UserList users={users} />
    </div>
  );
}

export default App;
