import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List.js';

describe('<List />', () =>{
    it('renders without crashing', () =>{
        const div = document.createElement('div');
        ReactDOM.render(<List 
            
        />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})

describe('<List />', () =>{
    it('render this UI as expected', () =>{
        const tree = renderer.create(<List />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})