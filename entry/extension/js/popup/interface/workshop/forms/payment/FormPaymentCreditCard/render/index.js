/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box } from 'rebass'
import styled from 'styled-components'
import { Field } from 'redux-form'
import { Grid } from 'grid-styled'
/* ------------------------- Internal Dependencies -------------------------- */
import Button from 'atoms/Button'
import Heading from 'atoms/Heading'
import ReduxField from 'organisms/ReduxField'


const FormWrapper = styled.form`
  display: block;
  margin: 15px 0;
`

const FormElements = (props) => {
  const { handleSubmit, isSubmitting } = props
  return (
    <FormWrapper method="POST" onSubmit={handleSubmit}>
      <div id="card-element"></div>
      <Button disabled={isSubmitting} type="submit">Add Card</Button>
    </FormWrapper>
  )
}

FormElements.propTypes = {
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool
}

export default FormElements
