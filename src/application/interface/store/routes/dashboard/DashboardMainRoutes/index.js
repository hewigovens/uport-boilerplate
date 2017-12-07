/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { connect } from 'react-redux';
import { Switch } from 'react-router-dom';
import { Route } from 'atomic' 
/* ------------------------- External Dependencies -------------------------- */
import { fromAuthentication } from 'appStore/departments/selectors'

/* ------------------------------- Component -------------------------------- */

const DashboardMainRoutes = props => (
<div>
  
</div>);


const mapStateToProps = (state, props) => ({
    authentication: {
      uid: fromAuthentication.getUserId(state)
    }
  }
)

export default connect(mapStateToProps)(DashboardMainRoutes)