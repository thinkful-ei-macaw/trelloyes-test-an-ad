import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card.js';

describe('<Card />', () =>{
    it('renders without crashing', () =>{
        const div = document.createElement('div');
        ReactDOM.render(<Card />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})

describe('<Card />', () =>{
    it('render this UI as expected', () =>{
        const tree = renderer.create(<Card />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})