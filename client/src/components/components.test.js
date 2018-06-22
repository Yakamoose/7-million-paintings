import React from 'react';
import {shallow, mount} from 'enzyme';

import Art from './art';
import NavBar from './nav';


describe('<App />', () => {
  it('Renders without crashing', () => {
    shallow(<NavBar loggedIn={true}/>);
  });
})
