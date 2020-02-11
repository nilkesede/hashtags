import React from 'react';
import {shallow} from 'enzyme';

import '../setup';
import Head from '../../src/components/head';

const title = 'Hashtags';
const description = 'Hashtags application!';

describe('Head component', () => {
  const wrapper = shallow(<Head title={title} description={description}/>);

  it('should show the app title', () => {
    expect(wrapper.find('title').text()).toEqual(title);
  });

  it('should show the app meta tag description', () => {
    expect(wrapper.find('meta[name="description"]').prop('content')).toEqual(description);
  });
});
