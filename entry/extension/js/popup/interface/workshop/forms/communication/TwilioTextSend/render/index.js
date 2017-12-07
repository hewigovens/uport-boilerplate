/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { Box, Block } from 'particles'

/* ------------------------- Internal Dependencies -------------------------- */
import {Button, ReduxField } from 'atomic'

/* --------------------------- Styled Components ---------------------------- */
const FormWrapper = styled(Block)`
  background: #FFF;
  display: block;
  padding: 20px;
`

FormWrapper.defaultProps = {
  is: 'form'
}

/* ---------------------------- Form Component ------------------------------ */
const FormElements = (props) => {
  const { handleSubmit, isSubmitting, layout } = props
  return (
    <FormWrapper  {...layout} {...props}>
      <Field name="requesting"component={ReduxField} type="text" />
      <Field name="textRecipient" label="Recipient" component={ReduxField} type="text" />
      <Field name="textBody" label="Message" component={ReduxField} type="textarea" />
      <Button type="submit" onClick={handleSubmit} >Submit</Button>
    </FormWrapper>
  )
}

/* -------------------------- Form Configuration ---------------------------- */
FormElements.propTypes = {
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool
}

FormElements.defaultProps = {
  is: 'form',
}

export default FormElements
