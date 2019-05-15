import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import {createSerializer} from 'enzyme-to-json';

expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

const app = shallow(<App />);

it('renders correctly', () => {
    expect(app).toMatchSnapshot();
});