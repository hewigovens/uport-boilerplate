/* ------------------------- External Dependencies -------------------------- */
import _ from 'lodash'
import React from 'react';
import { recompose } from 'recompose'
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'

/* ------------------------- Internal Dependencies -------------------------- */
/*--- Form Validation ---*/
import { createValidator, required } from 'logic/forms/validation'

/*--- Redux Store ---*/
import { databaseWriteRequest} from 'store/departments/actions'
import {  fromAuthentication } from 'store/departments/selectors'

/* ------------------------ Initialize Dependencies ------------------------- */
import FormRender from './render'

/* --------------------------- Component Entry ------------------------------ */
const FormRedux = props => <FormRender { ...props} />

/* ----------------------------- Form Validation -------------------------------- */
const validate = createValidator({

})

/* ---------------------------- Form Handlers ------------------------------- */
/*-- Event Handlers ---*/
const onSubmit = (data, dispatch, state) => new Promise((resolve, reject) => {
  const { timeStart, timeEnd, dateStart, dateEnd } = data

  const days = _.pickBy(data, (value, key)=> key.startsWith("day"));
  /*---*--- Hotline Data Format | documentation/volunteer/hotline --*---*/
  const submission = {days}

    submission.time = {}
    submission.time.hourStart = !timeStart ? null : timeStart.getHours()
    submission.time.hourEnd = !timeEnd ? null : timeEnd.getHours()
    submission.time.minuteStart = !timeStart ? null : timeStart.getMinutes()
    submission.time.minuteEnd = !timeEnd ? null : timeEnd.getMinutes()

    submission.time.dateStart = !dateStart ? null : dateStart.getTime() / 1000
    submission.time.dateEnd = !dateEnd ? null : dateEnd.getTime() / 1000

    submission.contact = {}
    submission.contact.contactPhone = data.contactPhone.replace(/\D+/g, "")

    submission.name = {}
    submission.name.nameFirst = data.nameFirst  
    submission.name.nameLast = data.nameLast  

  // Payload => Volunter Hotline(Immigration)
  const payload = {
    payload: {
      ...submission
    },
    metadata: {
      entity: 'volunteerHotline',
      hotlineDepartment: 'immigration', // TODO: Make variable dynamic, reading from database.
      userRequesting: data.userRequesting, // Do we need to pass this through form? Did @kamescg miss something?
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
  dispatch(databaseWriteRequest({payload, metadata, config }))
})

const mapStateToProps = (state, props) => { 
  const userRequesting = fromAuthentication.getUserId(state)
  return {
    initialValues: {
      userRequesting,
      nameFirst: props.identity.name.nameFirst,
      nameLast: props.identity.name.nameLast,
      contactPhone: props.identity.contact.contactPhone
    }
  }
}

const mapDispatchToProps = dispatch => ({

})

/* -------------------------- Form Configuration ---------------------------- */
const config = {
  form: 'TwilioTextSend',
  fields: [
    'timeStart',
    'timeEnd',
    'dateStart',
    'dateEnd',
    'dayMonday',
    'dayTuesday',
    'dayWednesday',
    'dayThursday',
    'dayFriday',
    'daySaturday',
    'daySunday',
    'userRequesting',
  ],
  destroyOnUnmount: true,
  onSubmit,
  validate
}

/*-- Export Form ---*/
export default connect(mapStateToProps, mapDispatchToProps)(reduxForm(config)(FormRedux))
