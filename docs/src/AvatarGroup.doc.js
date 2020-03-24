// @flow
import * as React from 'react';
import PropTable from './components/PropTable.js';
import Example from './components/Example.js';
import PageHeader from './components/PageHeader.js';

const cards = [];
const card = c => cards.push(c);

card(
  <PageHeader
    name="AvatarGroup"
    description="Show multiple avatars + counts in a line"
  />
);

card(
  <PropTable
    props={[
      {
        name: 'collaborators',
        type: 'Array<{| name: string, src?: string |}>',
        required: true,
      },
    ]}
  />
);

card(
  <Example
    description={`
    The size of the avatars is defined by their container. In this case the container is 64px wide & tall and each avatar is 48px.
  `}
    name="Example"
    defaultCode={`
<Box width={48}>
  <AvatarGroup
    collaborators={[
      {
        name: 'Keerthi',
        src: 'https://i.ibb.co/ZfCZrY8/keerthi.jpg',
      },
      {
        name: 'Shanice',
        src: 'https://i.ibb.co/7tGKGvb/shanice.jpg',
      },
      {
        name: 'James Jones',
        src: 'https://i.ibb.co/2Fc00R3/james.jpg'
      }
    ]}
    icon="add"
    count="99+"
  />
</Box>
`}
  />
);

export default cards;
