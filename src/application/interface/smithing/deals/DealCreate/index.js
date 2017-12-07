/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
import React from 'react'
import { reduxForm } from 'redux-form'
import Form from './Form'
import {
  branch,
  compose,
  lifecycle,
  withProps,
  withState,
  withStateHandlers,
  renderComponent
} from 'recompose'
import { connect } from 'react-redux'
/* ------------------------- Internal Dependencies -------------------------- */
import { SpinnerSquares } from 'atomic'
/*--- Redux Store ---*/
import { firestoreDocumentAddRequest } from 'store/departments/actions'
import { fromAuthentication } from 'store/departments/selectors'

/* --------------------------- Component Life ------------------------------- */

/*---*--- Lifecylce Methods ---*---*/
const QueryLifecycle = lifecycle({
  /*--- Component Mount ---*/
  componentDidMount() {

  },

  /*--- Component Update ---*/
  componentDidUpdate(prevProps) {
    if(this.props.submitting === true) {
      this.props.reset()
    }
  }
})


/* --------------------------- Form Actions -------------------------------- */
/*-- Event Handlers ---*/
const onSubmit = (data, dispatch, props) => new Promise((resolve, reject) => {
  console.log(data)

  /*--- Extraction ---*/
  const submission = {}
  submission.name = _.pickBy(data, (value, key)=> key.startsWith("name"));
  if (data.contributors) submission.contributors = data.contributors
  if (data.property) submission.property = data.property
  submission.permissions = _.pickBy(data, (value, key)=> key.startsWith("created"));
  
  /*--- Metadata/Configuration ---*/
  dispatch(firestoreDocumentAddRequest({
    payload: submission, 
    metadata: {
    branch: [
      'deals'
    ],
    delta: 'DealAdd',
    trigger: 'DealSearch',
    }
  }))

})

const mapStateToProps = (state, props) => {
  return {
    initialValues: {
      createdBy: fromAuthentication.getUserId(state)
    }
  }
}

/* ----------------------------- Form Validation -------------------------------- */
const config = {
  form: `FormDealCreate`,
  fields: [
    'nameOrganization',
    'nameOrganizationAlias',
  ],
  destroyOnUnmount: true,
  onSubmit,
}
const FormConfiguration = reduxForm({
  form: 'fieldArrays',
  onSubmit
})
const spinnerWhileLoading = (test) => branch(test,renderComponent(()=><SpinnerSquares gradient='cherry' />))
export default compose(
  connect(mapStateToProps),
  spinnerWhileLoading(
    (props) => !props.initialValues.createdBy ? true : false
  ),
  FormConfiguration,
  QueryLifecycle,
)(Form);
