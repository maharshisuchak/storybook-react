import Enzyme from 'enzyme';
import Adpater from 'enzyme-adapter-react-16';

Enzyme.configure({
    adapter: new Adpater()
});