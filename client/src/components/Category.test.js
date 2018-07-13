import React from 'react';
import {shallow, mount} from 'enzyme';

import {Category} from './Category';

describe('<Category />',() => {
  //const category = [{key:1, category:'yoga'},{key:2, category:'running'}]; 
  it('Renders without crashing', () => {
    shallow(<Category category={[]}/>);
  });
});