import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List.js';

// Smoke Test
describe('<List />', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List
            header="Some header"
            cards={[
            {id:"1", title: "Card One", content: "lorem ipsum"},
            {id:"2", title: "Card Two", content: "Some other lorem ipsum"},
            {id:"3", title: "Card Three", content: "Some different lorem ipsum"}
            ]}
        />, div);
        ReactDOM.unmountComponentAtNode(div);
    })
})

// Snapshot Test
describe('<List />', () =>{
    it('render this UI as expected', () => {
        const tree = renderer.create(<List
            header="Some header"
            cards={[
              {id:"1", title: "Card One", content: "lorem ipsum"},
              {id:"2", title: "Card Two", content: "Some other lorem ipsum"},
              {id:"3", title: "Card Three", content: "Some different lorem ipsum"}
              ]}
          />).toJSON();
        expect(tree).toMatchSnapshot();
    })
})

// header -> string
// cards -> array of objects with id, title and content (all strings)

