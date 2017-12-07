/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { Box, Block } from 'particles'

/* ------------------------- Internal Dependencies -------------------------- */
import {Button, ReduxField } from 'atomic'

/* --------------------------- Styled Components ---------------------------- */
const FormWrapper = Block

FormWrapper.defaultProps = {
  is: 'form'
}

/* ---------------------------- Form Component ------------------------------ */
const FormElements = (props) => {
  const { handleSubmit, isSubmitting, layout } = props
  return (
    <FormWrapper  {...layout} {...props}>
      <Box className='form' >
        <Box>
          <Button gradient='cherry' f={[3]} my={[15]} py={15} px={20,30} type="submit" onClick={handleSubmit} >Howl</Button>
        </Box>
      </Box>
    </FormWrapper>
  )
}

/* -------------------------- Form Configuration ---------------------------- */
FormElements.propTypes = {
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool
}

FormElements.defaultProps = {
  is: 'div',
}

export default FormElements
