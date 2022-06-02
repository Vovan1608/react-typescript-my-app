import { Child, ChildAsFC } from './Child';
import GuestList from '../state/GuestList';
import UserSearch from '../state/UserSearch';
import EventComponent from '../events/EventComponent';
import UserSearchComponent from '../classes/UserSearchComponent';
import UserSearchRefs from '../refs/UserSearchRefs';

const App = () => <div><h2>Hi there!</h2></div>;

const users = [
    {name: 'Sarah', age: 20},
    {name: 'Alex', age: 19},
    {name: 'Bob', age: 21},
    {name: 'Michael', age: 33}
];

const Parent = () => {
    return (
        <UserSearchRefs />
    );
};

export default Parent;
