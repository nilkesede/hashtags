import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Index from '../../src/pages';

Enzyme.configure({adapter: new Adapter()});

describe('Index', () => {
  const index = shallow(<Index/>);

  it('should show the app title', () => {
    expect(index.find('h1').text()).toEqual('Hubtec tasks management app.');
  });
});
