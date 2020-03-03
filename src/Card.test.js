import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Card from './Card.js';

// Smoke Test
describe('<Card />', () => {
    it('renders without crashing', () =>{
        const div = document.createElement('div');
        ReactDOM.render(<Card 
            title="Some title"
            content="A string of content" />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})

// Snapshot Tests
describe('<Card />', () => {
    it('render this UI as expected', () => {
        const tree = renderer.create(<Card 
            title="Some title"
            content="A string of content" />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})

// title -> string
// content -> string

