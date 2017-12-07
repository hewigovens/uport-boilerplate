/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box } from 'rebass'
import styled from 'styled-components'
import { Field } from 'redux-form'
import { Grid } from 'grid-styled'

/* ------------------------- Internal Dependencies -------------------------- */
import Button from 'atoms/Button'
import ReduxField from 'organisms/ReduxField'

import NameFullFieldCollection from 'containers/fields/NameFullFieldCollection'
import AddressFieldCollection from 'containers/fields/AddressFieldCollection'
import ContactFullFieldCollection from 'containers/fields/ContactFullFieldCollection'
import FieldRelationshipsOrganization from 'containers/fields/FieldRelationshipsOrganization'

const FormWrapper = styled.form`
  display: block;
`

const FormElements = (props) => {
  const { handleSubmit, isSubmitting } = props
  return (
    <FormWrapper method="POST" onSubmit={handleSubmit}>
      <Field name="_csrf" type="hidden" component="input"/>
      <Flex direction={['column', 'column']} >
        <Box w={[1]} >
          <NameFullFieldCollection />
        </Box>
        <Box w={[1]} >
          <ContactFullFieldCollection/>
        </Box>

        <AddressFieldCollection/>
        <FieldRelationshipsOrganization/>

      </Flex>
      <div>
        <Button disabled={isSubmitting} type="submit">Save</Button>
      </div>
    </FormWrapper>
  )
}

FormElements.propTypes = {
  handleSubmit: PropTypes.func,
  isSubmitting: PropTypes.bool
}

export default FormElements
