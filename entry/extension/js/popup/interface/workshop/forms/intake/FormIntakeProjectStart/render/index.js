/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { Box } from 'rebass'

/* ------------------------- Internal Dependencies -------------------------- */
import Button from 'atoms/Button'
import ReduxField from 'organisms/ReduxField'
import { Image, Heading, Paragraph } from 'atomic'

import { NameFieldCollection, NameSingleFieldCollection, AccountFieldCollection } from 'containers' 

/* --------------------------- Styled Components ---------------------------- */
const FormWrapper = styled.form`
  background: #FFF;
  display: block;
  padding: 20px;
`
const nameDesign = {
  br: 5,
  bs: 1,
  height: 45, 
  mb: 0, 
  stripe: {

  } 
} 
const accountDesign = {
  bs: 0,
  f: [1],
  height: 45, 
  mb: 15, 
  stripe: {
    bg:'blueLight'
  } 
} 
/* ---------------------------- Form Component ------------------------------ */
const FormElements = ({...props}) => {
  const { handleSubmit, isSubmitting, layout, submitButton } = props
  return (
    <FormWrapper method="POST" onSubmit={handleSubmit} {...layout} {...props}>
      {/* Field | Name */}
      <NameSingleFieldCollection mb={[10,20]} fields={nameDesign} direction={['column']} />
      <AccountFieldCollection fields={accountDesign} direction={['column']} />
      {/* Submit */}
      <Box mt={[10,20,40]} w={1} >
        <Button type="submit" w={1} gradient='cherry' >{submitButton}</Button>
      </Box>
    </FormWrapper>
  )
}

/* -------------------------- Form Configuration ---------------------------- */
FormElements.propTypes = {
  is: PropTypes.string,
  submitButton: PropTypes.string,
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool
}

FormElements.defaultProps = {
  is: 'form',
  submitButton: 'Submit Form'
}

export default FormElements
