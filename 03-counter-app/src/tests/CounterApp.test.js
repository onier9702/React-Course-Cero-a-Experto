
import { render } from '@testing-library/react';
import React from 'react'; // Shortcut --->>> imr + Tab
import { shallow } from 'enzyme';
import { CounterApp } from '../CounterApp';



describe('Testing the Counter App', () => { 

    let wrapper = shallow(<CounterApp />);
    beforeEach( () => {

        console.log('beforeEach!!!');
        wrapper = shallow(<CounterApp />);

    } );
    
    // test('should show up everything ok', () => { 
        
    //     // wrapper = shallow(<CounterApp />);
    //     expect(wrapper).toMatchSnapshot();
    // });
        
    test('should show up default value equal to 10', () => { 
        
        const wrapper = shallow(<CounterApp value={100}/>);
        const value   = wrapper.find('h2').text();
        
        expect(value).toBe('100');
        
    });
        
    test('it should increase the counter value ', () => { 
        
        const btn = wrapper.find('button').at(0);
        // console.log(btn.html());
        
        wrapper.find('button').at(0).simulate('click');
        const increaseButton = wrapper.find('h2').text();
        // console.log(increaseButton);
        expect(increaseButton).toBe('11');
        
        
    });
        
    test('should decrease the counter', () => { 
        
        wrapper.find('button').at(1).simulate('click');
        
        const decreaseButton = wrapper.find('h2').text();
        expect(decreaseButton).toBe('9');
        
    });
    
    test('should set the default value in the Reset Button', () => { 

        const wrapper = shallow(<CounterApp value={55}/>);

        wrapper.find('button').at(0).simulate('click');        
        wrapper.find('button').at(2).simulate('click');
        
        const counterText = wrapper.find('h2').text();

        expect(counterText).toBe('55');

     })
    
});


