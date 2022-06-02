import { Child, ChildAsFC } from './Child';
import GuestList from '../state/GuestList';

const App = () => <div><h2>Hi there!</h2></div>;

const Parent = () => {
    return (
        <GuestList />
    );
};

export default Parent;
