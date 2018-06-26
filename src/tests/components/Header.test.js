/*react test renderer : it allows us to render our components inside of just regular
javascript code and then we can assert something  */

import React from 'react';
import { shallow } from 'enzyme';
import Header from '../../components/Header';
import toJSON from 'enzyme-to-json';

// import ReactShallowRenderer from 'react-test-renderer/shallow';

// test('should render Header correctly', () => {
//     const renderer = new ReactShallowRenderer();
//     renderer.render(<Header />);
//     // console.log(renderer.getRenderOutput()); 
//     expect(renderer.getRenderOutput()).toMatchSnapshot();
// });


test('should render Header correctly using enzyme', () => {
    const wrapper = shallow(<Header />);
    // expect(wrapper.find('h1').length).toBe(1);
    // expect(wrapper.find('h1').text()).toBe('Expensify');
    // expect(toJSON(wrapper)).toMatchSnapshot();
    expect(wrapper).toMatchSnapshot();
});


// we can configure toJSON for all the test case in config file so we don't need to 
// type toJSON in all the test suit

