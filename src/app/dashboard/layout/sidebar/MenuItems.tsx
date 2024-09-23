import {
  IconBox,
  IconPizza,
  IconUser,
  IconUsersGroup,
} from '@tabler/icons-react';

import { uniqueId } from 'lodash';

const Menuitems = [
  {
    id: uniqueId(),
    title: 'Orders',
    icon: IconBox,
    href: '/',
  },
  {
    id: uniqueId(),
    title: 'Add menu',
    icon: IconPizza,
    href: '/ui-components/buttons',
  },
  {
    id: uniqueId(),
    title: 'Role',
    icon: IconUser,
    href: '/ui-components/forms',
  },
  {
    id: uniqueId(),
    title: 'User',
    icon: IconUsersGroup,
    href: '/ui-components/alerts',
  },
];

export default Menuitems;
