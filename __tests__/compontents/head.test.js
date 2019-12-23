import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Head from '../../src/components/head';

Enzyme.configure({adapter: new Adapter()});

const title = 'Hubtec Tasks';
const description = 'Hubtec Tasks application!';

describe('Head component', () => {
  const head = shallow(<Head title={title} description={description}/>);

  it('should show the app title', () => {
    expect(head.find('title').text()).toEqual(title);
  });

  it('should show the app meta tag description', () => {
    expect(head.find('meta[name="description"]').prop('content')).toEqual(description);
  });
});
