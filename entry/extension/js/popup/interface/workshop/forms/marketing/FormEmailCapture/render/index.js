/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { Box } from 'particles'

/* ------------------------- Internal Dependencies -------------------------- */
import { Button} from 'atomic'
import ReduxField from 'organisms/ReduxField'

/* --------------------------- Styled Components ---------------------------- */
const FormWrapper = styled(Box)`
  background: #FFF;
  display: block;
  padding: 20px;
`
/* ---------------------------- Form Component ------------------------------ */
const FormElements = (props) => {
  const { handleSubmit, isSubmitting, layout } = props
  return (
    <FormWrapper method="POST" onSubmit={handleSubmit} {...layout}>
      <Field name="emailPrimary" placeholder="fred@widgetplace.com" component={ReduxField} type="email" />
    </FormWrapper>
  )
}

/* -------------------------- Form Configuration ---------------------------- */
FormElements.propTypes = {
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool
}

FormWrapper.defaultProps = {
  is: 'form',
}

export default FormElements
