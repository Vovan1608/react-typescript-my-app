import { Child, ChildAsFC } from './Child';
import GuestList from '../state/GuestList';
import UserSearch from '../state/UserSearch';

const App = () => <div><h2>Hi there!</h2></div>;

const Parent = () => {
    return (
        <UserSearch />
    );
};

export default Parent;
