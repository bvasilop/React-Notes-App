import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import '../setupTests';
import App from '../../components/App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});
