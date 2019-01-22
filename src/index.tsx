import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as Enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import Login from './components/Login';

Enzyme.configure({ adapter: new Adapter() });

const Index = () => <Login />;

ReactDOM.render(<Index />, document.getElementById('container'));
