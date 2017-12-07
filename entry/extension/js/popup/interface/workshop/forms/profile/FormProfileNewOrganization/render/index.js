/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box } from 'rebass'
import styled from 'styled-components'
import { Field } from 'redux-form'
import { Grid } from 'grid-styled'
import { AutoComplete as MUIAutoComplete } from 'material-ui'
import {
  AutoComplete
} from 'redux-form-material-ui'

/* ------------------------- Internal Dependencies -------------------------- */
import Button from 'atoms/Button'
import Heading from 'atoms/Heading'
import ReduxField from 'organisms/ReduxField'

import AddressFieldCollection from 'containers/fields/AddressFieldCollection'
import ContactFullFieldCollection from 'containers/fields/ContactFullFieldCollection'
import FieldRelationshipsPerson from 'containers/fields/FieldRelationshipsPerson'
import VisibilityFieldCollection from 'containers/fields/VisibilityFieldCollection'

const FormWrapper = styled.form`
  display: block;
  margin: 20px 0;
`

const FormElements = (props) => {
  const { handleSubmit, isSubmitting } = props
  return (
    <FormWrapper method="POST" onSubmit={handleSubmit}>
      <Field name="_csrf" type="hidden" component="input"/>
      <Flex direction={['column', 'column']} >
        <Box w={[1]} >
          <Grid w={[1]} pr={10} >
            <Field name="name" placeholder="Organization" component={ReduxField} type="text" px={[10]} height={45} />
          </Grid>

          <Heading>Relationship</Heading> 
          <Field
            name="category"
            component={AutoComplete}
            dataSourceConfig={{ text: 'name', value: 'id' }}
            dataSource={[
              { id: 0, name: 'Retail' },
              { id: 1, name: 'Technology' },
              { id: 2, name: 'Construction' },
              { id: 3, name: 'Consulting' },
              { id: 4, name: 'Other' }
            ]}
            filter={MUIAutoComplete.fuzzyFilter}
            openOnFocus
            fullWidth
          />


          <Field
            name="category"
            component={AutoComplete}
            dataSourceConfig={{ text: 'name', value: 'id' }}
            dataSource={[
              { id: 0, name: 'Retail' },
              { id: 1, name: 'Technology' },
              { id: 2, name: 'Construction' },
              { id: 3, name: 'Consulting' },
              { id: 4, name: 'Other' }
            ]}
            floatingLabelText="Category"
            filter={MUIAutoComplete.fuzzyFilter}
            openOnFocus
            fullWidth
          />

        </Box>
        <Box w={[1]} >
          <ContactFullFieldCollection />
        </Box>

        <AddressFieldCollection/>
        <FieldRelationshipsPerson/>
        <VisibilityFieldCollection />

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
