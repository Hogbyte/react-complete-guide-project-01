import Card from './Card';

import css from './UserList.module.css';

const UserList = (props) => {
    return (
        <Card>
            {props.users.length === 0 && <div className={css.empty}>No users.</div>}
            {props.users.map(user => 
                <div key={user.id} className={css.user}>{user.name} ({user.age} years old)</div>
            )}
        </Card>
    );
}

export default UserList;