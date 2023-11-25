import { render } from '@testing-library/react';
import PrimeraApp from  '../PrimeraApp';
import React from 'react'; // Shortcut --->>> imr + Tab
import { shallow } from 'enzyme';

describe('', () => { 

    test('should first show up the message ', () => {
        // --- Antes de Enzyme ----
        // const greeting = 'Hola soy Carlos';
        // const {getByText}  = render(<PrimeraApp name={greeting}/>);
        // expect(getByText(greeting)).toBeInTheDocument();
        // ---- Despues de Enzyme ----
        const nombre = 'Hola soy Carlos';
        const wrapper = shallow(<PrimeraApp name={ nombre }/>);

        expect(wrapper).toMatchSnapshot();
    })

    test('should first show up I am a SUBTITLE', () => { 

        const nombre = 'Hola soy Carlos';
        const subTitle = 'I am a subTitle!!';
        const wrapper = shallow(<PrimeraApp 
            name={ nombre } 
            subtitle= {subTitle}
            />);
        
        const textParagraph = wrapper.find('p').text();
        console.log(textParagraph);
        expect(textParagraph).toBe(subTitle);

     })
 })

