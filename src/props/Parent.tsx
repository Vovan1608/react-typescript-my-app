import { Child, ChildAsFC } from './Child';
import GuestList from '../state/GuestList';
import UserSearch from '../state/UserSearch';
import EventComponent from '../events/EventComponent';

const App = () => <div><h2>Hi there!</h2></div>;

const Parent = () => {
    return (
        <EventComponent />
    );
};

export default Parent;
