/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { Route } from 'react-router-dom';
/* ------------------------- External Dependencies -------------------------- */
// Atoms
import Box from 'atoms/Box'
import Absolute from 'atoms/Absolute'
import Flex from 'atoms/Flex'
// Routes
import RoutesEntityProject from '../../entity/Project'
import RoutesEntityPerson from '../../entity/Person'
import RoutesEntityOrganization from '../../entity/Organization'
import RoutesEntityEvent from '../../entity/Event'

import RoutesEntityCommunications from '../../entity/Communications'
/* ------------------------------- Component -------------------------------- */

export default () =>
<div>
  <RoutesEntityProject
    collection={'projects'}
    entity={'project'}
  />
  <RoutesEntityPerson
    collection={'people'}
    entity={'person'}
  />
  <RoutesEntityOrganization
    collection={'organizations'}
    entity={'organization'}
  />
</div>