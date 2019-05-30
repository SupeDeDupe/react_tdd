import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
// import {createSerializer} from 'enzyme-to-json';

// expect.addSnapshotSerializer(createSerializer({mode: 'deep'}));

describe('App', () => {
    const app = shallow(<App />);

    it('renders correctly', () => {
        expect(app).toMatchSnapshot();
    });
    
    it('initializes the `state` with empty list of gifts', () => {
        expect(app.state().gifts).toEqual([]);
    });
    
    describe('when clicking the `add-gift` button', () => {
        const id = 1;

        beforeEach(() => {
            app.find('.btn-add').simulate('click');
        });
        afterEach(() => {
            app.setState( { gifts: [] } )
        });
        
        it('adds a new gift to `state`', () => {
            expect(app.state().gifts).toEqual([{ id }]);
        });
        
        it('adds a new gift to the rendered list', () => {
            expect(app.find('.gift-list').children()).toHaveLength(1);
        });

        it('creates a Gift component', () => {
            expect(app.find('Gift').exists()).toBe(true);
        });

        describe('and the user wants to remove the added Gift', () => {
            beforeEach(() => {
                app.instance().removeGift(id);
            });

            it('removed the gift from `state`', () => {
                expect(app.state().gifts).toEqual([]);
            });
        });
    });
});