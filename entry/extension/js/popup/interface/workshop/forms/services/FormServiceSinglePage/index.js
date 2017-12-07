/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { connect } from 'react-redux'
import { reduxForm, formValueSelector } from 'redux-form'

/* ------------------------- Internal Dependencies -------------------------- */
/*--- Form Validation ---*/
import { createValidator, required } from 'logic/forms/validation'

/*--- Redux Store ---*/
import { } from 'store/departments/actions'

/* ------------------------ Initialize Dependencies ------------------------- */
import FormRender from './render'
const selector = formValueSelector('FormServiceSinglePage')

/* --------------------------- Component Entry ------------------------------ */
const FormRedux = props => <FormRender { ...props} />


/* ----------------------------- Form Validation -------------------------------- */
const validate = createValidator({

})

/* ---------------------------- Form Handlers ------------------------------- */
/*-- Event Handlers ---*/
const onSubmit = (data, dispatch) => new Promise((resolve, reject) => {
  const { } = data
})


const mapStateToProps = (state) => ({
  initialValues: {},
  current: {
    entityType: selector(state, 'entityType'),
    entityOrganizationType: selector(state, 'entityOrganizationType')
  }
})

const mapDispatchToProps = dispatch => ({

})


/* -------------------------- Form Configuration ---------------------------- */
export const config = {
  form: 'FormServiceSinglePage',
  fields: [
    'nameFirst',
    'nameLast',
  ],
  destroyOnUnmount: true,
  onSubmit,
  validate
}

/*-- Export Form ---*/
export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(config)(FormRender))
