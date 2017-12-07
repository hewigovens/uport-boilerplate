/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { Switch, Route } from 'react-router-dom';
/* ------------------------- Internal Dependencies -------------------------- */
import { Absolute } from 'particles'
import { fromMain } from 'workshop/zones'
import {
  FirestormEntitySync
} from 'containers'
import {
  PeopleActivityLatest,
  PersonAdd,
  PeopleSearchAdvanced,
  OrganizationAdd,
  OrganizationSearchAdvanced,
  ProjectAdd,
  ProjectSearchAdvanced,
  ProjectAddFullDescription,
  ResourceAdd,
  ResourceSearchAdvanced,
  ResourceAddFullDescription,
 } from 'foundry'

import {
  FormPersonAdd,
} from 'workshop/forms'

/* ------------------------------- Component -------------------------------- */
const UsersSync = () => <FirestormEntitySync entity="users" p={[10]}/>

export default () => 
<div>
  {/* People | Multiple */}
  <Route exact path="/dashboard/people" component={PersonAdd} />

  <Route exact path="/dashboard/organizations" component={OrganizationAdd} />
  <Route exact path="/dashboard/organizations/map" component={OrganizationSearchAdvanced} />

  {/*Projects | Multiple */}
  <Route exact path="/dashboard/projects/manage" component={ProjectSearchAdvanced} />
  <Route exact path="/dashboard/projects" component={ProjectAdd} />
  {/*Project | Single*/}
  <Route exact path="/dashboard/project/add" component={ProjectAddFullDescription} />
  
  {/*Projects | Multiple */}
  <Route exact path="/dashboard/resources/manage" component={ResourceSearchAdvanced} />
  <Route exact path="/dashboard/resources" component={ResourceAdd} />
  {/*Project | Single*/}
  <Route exact path="/dashboard/resource/add" component={ResourceAddFullDescription} />

  <Route path="/dashboard/profile" component={PeopleActivityLatest} />
  <Route path="/dashboard/volunteer/hotline/rapid-response" component={PeopleActivityLatest} />
  <Route exact path="/dashboard" component={PeopleActivityLatest} />
</div>
