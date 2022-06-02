import { Component } from "react";

interface User {
    name: string;
    age: number;
}

interface UserSearchProps {
    users: User[];
}

interface UserSearchState {
    name: string;
    user: User | undefined;
}
class UserSearchComponent extends Component<UserSearchProps> {
    state: UserSearchState = {
        name: '',
        user: undefined
    }

    onClick = () => {
        const { users } = this.props;
        const { name } = this.state;

        const foundUser = users.find((user) => user.name === name);

        this.setState({ user: foundUser });
    }

    render() {
        const { name, user } = this.state;

        return (
            <div>
            <h1>Find User</h1>
            <input type="text" value={name} onChange={({ target }) => this.setState({ name:  target.value })}/>
            <button onClick={this.onClick}>Find user</button>
            <div>
                <div>{user?.name}</div>
                <div>{user?.age}</div>
            </div>
        </div>
        );
           
    }
}

export default UserSearchComponent;
