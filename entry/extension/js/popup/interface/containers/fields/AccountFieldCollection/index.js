/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Field } from 'redux-form'
import styled from 'styled-components'
import { Box } from 'particles'

/* ------------------------- Internal Dependencies -------------------------- */
import ReduxField from 'organisms/ReduxField'
import FieldCollectionWrapper from 'containers/fields/FieldCollectionWrapper'


/* ---------------------------- Module Package ------------------------------ */
const FieldCollectionComponent = props => (
  <FieldCollectionWrapper direction={['column', 'row']} justify="space-evenly" {...props} >
    <Box flex='2 1 auto'>
      <Field name="accountEmail" placeholder="Email" component={ReduxField} type="email" height={35} {...props.fields} />
    </Box>
    <Box flex='3 1 auto'>
      <Field name="accountPassword" placeholder="Password" component={ReduxField} type="password" height={35} {...props.fields} />
    </Box>
  </FieldCollectionWrapper>
)

FieldCollectionComponent.defaultProps = {
  fields: {}
}

export default FieldCollectionComponent
