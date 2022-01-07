import css from './UserList.module.css';

const UserList = (props) => {
    return (
        <div className={css.userList}>
            {props.users.map(user => 
                <div className={css.user}>{user.name} ({user.age} years old)</div>
            )}
        </div>
    );
}

export default UserList;