/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Flex, Box } from 'rebass'
import styled from 'styled-components'
import { Field } from 'redux-form'
import { Grid } from 'grid-styled'
import { AutoComplete as MUIAutoComplete } from 'material-ui'
import MenuItem from 'material-ui/MenuItem'
import { RadioButton } from 'material-ui/RadioButton'
import {
  AutoComplete,
  Checkbox,
  DatePicker,
  TimePicker,
  RadioButtonGroup,
  SelectField,
  Slider,
  TextField,
  Toggle
} from 'redux-form-material-ui'

/* ------------------------- Internal Dependencies -------------------------- */
import Button from 'atoms/Button'
import Heading from 'atoms/Heading'
import ReduxField from 'organisms/ReduxField'

import AddressFieldCollection from 'containers/fields/AddressFieldCollection'
import NameFullFieldCollection from 'containers/fields/NameFullFieldCollection'
import ContactFullFieldCollection from 'containers/fields/ContactFullFieldCollection'
import FieldRelationshipsOrganization from 'containers/fields/FieldRelationshipsOrganization'

const FormWrapper = styled.form`
  display: block;
  margin: 15px 0;
`

const FormElements = (props) => {
  const { handleSubmit, isSubmitting } = props
  return (
    <FormWrapper method="POST" onSubmit={handleSubmit}>
      <Field name="_csrf" type="hidden" component="input"/>
      <Flex direction={['column', 'column']} >
        <Box w={[1]} >
          <Field name="opportunityName" placeholder="Opportunity Name" component={ReduxField} type="text" height={45} />

          <Field
            name="opportunityPriority"
            component={SelectField}
            hintText="Priority"
            fullWidth
          >
            <MenuItem value="priorityHigh" primaryText="High" />    
            <MenuItem value="priorityMedium" primaryText="Medium" />    
            <MenuItem value="priorityLow" primaryText="Low" />    
          </Field>

          <Field
            name="opportunityStage"
            component={SelectField}
            hintText="Stage"
            fullWidth
          >
            <MenuItem value="stateQualified" primaryText="Qualified" />
            <MenuItem value="stageFollowUp" primaryText="Follow Up" />
            <MenuItem value="stagePresentation" primaryText="Presentation" />
            <MenuItem value="stageContract" primaryText="Contract" />
            <MenuItem value="stageNegotiation" primaryText="Negotiation" />
          </Field>
          
          <Field
            name="opportunityStatus"
            component={SelectField}
            hintText="Status"
            fullWidth
          >
            <MenuItem value="statusOpen" primaryText="Open" />
            <MenuItem value="statusWon" primaryText="Won" />
            <MenuItem value="statusLost" primaryText="Lost" />
            <MenuItem value="statusAbandoned" primaryText="Abandoned" />
    
          </Field>

        </Box>
        <hr/>
        <Box w={[1]} >
          <Heading>Scheduling</Heading>
          <Field name="opportunityDeadline" component={DatePicker} format={null} hintText="Deadline" fullWidth/>
          <hr/>
        </Box>
        <Box w={[1]} >
          <Heading>Assignment</Heading>
          <Field
            component={AutoComplete}
            name="opportunityAssignment"
            dataSource={['Cheddar', 'Mozzarella', 'Parmesan', 'Provolone']}
            floatingLabelText="Opportunity Assignemtn"
            filter={MUIAutoComplete.fuzzyFilter}
            openOnFocus
            fullWidth
          />
          <hr/>
        </Box>
        <Box w={[1]} >
          <FieldRelationshipsOrganization/>
        </Box>

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
