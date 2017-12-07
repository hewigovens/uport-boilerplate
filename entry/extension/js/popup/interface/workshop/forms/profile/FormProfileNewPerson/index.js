/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import _ from 'lodash'
/* ------------------------- Internal Dependencies -------------------------- */
import { createValidator, required } from 'logic/forms/validation'

/*--- Redux Store ---*/
import { databaseWriteRequest } from 'store/departments/actions'

/* ------------------------ Initialize Dependencies ------------------------- */
import FormRender from './render'

/* --------------------------- Component Entry ------------------------------ */
const FormProfileNewIdentity = props => <FormRender { ...props} />

/*-- Event Handlers ---*/
const onSubmit = (data, dispatch) => new Promise((resolve, reject) => {
  // Normalize Form Submission Data 
  const address = _.pickBy(data, (value, key)=> key.startsWith("address"));
  const contact =  _.pickBy(data, (value, key)=> key.startsWith("contact"));
  const identity = _.pickBy(data, (value, key)=> key.startsWith("identity"));

  const authentication = {
    displayName: (identity.identityNameFirst ? identity.identityNameFirst : '') + " " + (identity.identityNameLast ? identity.identityNameLast : '')
  }

  // Compose | Combine payload and metadata for database write 
  const payload = { authentication, contact, identity, address}
  const metadata = {
    entity: 'community',
    branch: ['people']
  }
  const config = {
    writeType: 'create'
  }

  // Dispatch | Request permission to write to the application database.
  dispatch(databaseWriteRequest({payload, metadata, config}))
})

/* ----------------------------- Form Validation -------------------------------- */
const validate = createValidator({
  nameFirst: [required],
})

/* ----------------------------- React Redux -------------------------------- */
const mapStateToProps = (state) => ({
  initialValues: {

  }
})

const mapDispatchToProps = dispatch => ({

})

export const config = {
  form: 'FormProfileNewIdentity',
  fields: [
    'nameFirst',
    'nameLast',
    'communicationEmail',
    'communicationPhone',
    'relationshipOrganization',
  ],
  destroyOnUnmount: true,
  onSubmit,
  validate
}


export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(config)(FormProfileNewIdentity))
