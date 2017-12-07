/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

/* ------------------------- Internal Dependencies -------------------------- */
/*--- Form Validation ---*/
import { createValidator, required } from 'logic/forms/validation'

/*--- Redux Store ---*/

import { 
  databaseWriteRequest,
  databaseReadRequest
} from 'store/departments/actions'
/* ------------------------ Initialize Dependencies ------------------------- */
import FormRender from './render'

/* ----------------------------- Form Validation -------------------------------- */
const validate = createValidator({

})

/* ---------------------------- Form Handlers ------------------------------- */
/*-- Event Handlers ---*/
const onSubmit = (data, dispatch) => new Promise((resolve, reject) => {

  const hashes = {
    hashes: {
      data
    }
  }
  // Datebase Write => Firebase API 
  const config = {writeType: 'create'}
  const metadata = {
    entity: 'mutate',
    branch: [
      'request'
    ]
  }
  dispatch(databaseWriteRequest({payload: hashes, metadata, config }))
  dispatch(databaseReadRequest({
    payload:{},
    metadata: {
      entity: 'mutate',
      branch: ['request']
    } 
  }))

})

const mapStateToProps = (state) => ({
  initialValues: {}
})

const mapDispatchToProps = dispatch => ({

})

/* -------------------------- Form Configuration ---------------------------- */
const config = {
  form: 'Form',
  fields: [
    '',
  ],
  destroyOnUnmount: true,
  onSubmit,
  validate
}

/*-- Export Form ---*/
export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(config)(FormRender))
