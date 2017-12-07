/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
import React from 'react';
import { compose, lifecycle, withProps, withState, renderComponent } from 'recompose'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

/* ------------------------- Internal Dependencies -------------------------- */
/*--- Form Validation ---*/
import { createValidator, required } from 'logic/forms/validation'

/*--- Redux Store ---*/
import { 
  firestoreDocumentUpdateRequest,
  firestoreDocumentGetRequest,
  entityResourceEditRequest,
 } from 'store/departments/actions'
import {  fromFirestore } from 'store/departments/selectors'


/* ------------------------ Initialize Dependencies ------------------------- */
import FormRender from './render'


/*---*--- Recompose ---*---*/
const defaultState = withState({

})
const defaultProps = withProps({
  pointerEnhanced: 'test'
})

/*---*--- Lifecylce Methods ---*---*/
const queryLifecycle = lifecycle({
  /*--- Component Mount ---*/
  componentDidMount() {

  },

  /*--- Component Update ---*/
  componentDidUpdate(prevProps) {

  }
})

/* ----------------------------- Form Validation -------------------------------- */
const validate = createValidator({

})

/* ---------------------------- Form Handlers ------------------------------- */
/*-- Event Handlers ---*/
const onSubmit = (data, dispatch, props) => new Promise((resolve, reject) => {
  /*--- Extraction ---*/
  const address = _.pickBy(data, (value, key)=> key.startsWith("address"));
  const contact =  _.pickBy(data, (value, key)=> key.startsWith("contact"));
  const name = _.pickBy(data, (value, key)=> key.startsWith("name"));

  /*--- Setup | Dispatch ---*/
  const payload = {
    address,
    contact,
    name
  }
  const metadata = {
    collection: 'resources',
    delta: `${props.delta}|Update`,
    document: props.delta,
  }

  /*--- Send | Dispatch ---*/
  dispatch(entityResourceEditRequest({payload, metadata }))
})

const mapStateToProps = (state, props) => {
  const delta = props.match.params.id
  const data = fromFirestore.getQueryData(state, delta)
  let initialValues = {};
  Object.keys(data).map(key=> ({...data[key]})).forEach(i=> initialValues = {...initialValues, ...i})
  if(data) return {delta, initialValues:{...initialValues}}
}

const mapDispatchToProps = dispatch => ({

})

/* -------------------------- Form Configuration ---------------------------- */
const config = {
  form: 'FormResourceEdit',
  fields: [
    'contactEmail',
    'contactPhone',
    'contactURL',
    'nameResource',
    'nameResourceLegal',
  ],
  destroyOnUnmount: true,
  onSubmit,
  validate
}

/*-- Export Form ---*/
const FormRedux = props => <FormRender { ...props} />
const formRedux = reduxForm(config)
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  formRedux,
  queryLifecycle,
  defaultState,
  defaultProps,
)(FormRedux);


// export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(config)(FormRender))