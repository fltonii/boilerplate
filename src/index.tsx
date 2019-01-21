import React from 'react';
import ReactDOM from 'react-dom';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Login from './components/Login';

Enzyme.configure({ adapter: new Adapter() });

const Index = () => <Login />;

ReactDOM.render(<Index />, document.getElementById('container'));
