import { useState } from "react";

const users = [
    {name: 'Sarah', age: 20},
    {name: 'Alex', age: 19},
    {name: 'Bob', age: 21},
    {name: 'Michael', age: 33}
];

const UserSearch: React.FC = () => {
    const [name, setName] = useState('');
    const [user, setUser] = useState<{ name: string, age: number } | undefined>();

    const onClick = () => {
        const foundUser = users.find((user) => user.name === name);

        setUser(foundUser);
    };

    return (
        <div>
            <h1>Find User</h1>
            <input type="text" value={name} onChange={({ target }) => setName(target.value)}/>
            <button onClick={onClick}>Find user</button>
            <div>
                <div>{user?.name}</div>
                <div>{user?.age}</div>
            </div>
        </div>
    );
}

export default UserSearch;