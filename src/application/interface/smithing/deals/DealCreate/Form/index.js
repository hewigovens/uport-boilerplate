/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import {Tabs, Tab} from 'material-ui/Tabs';
import Slider from 'material-ui/Slider';
import {
  AutoComplete,
  Checkbox,
  DatePicker,
  TimePicker,
  RadioButtonGroup,
  SelectField,
  TextField,
  Toggle
} from 'redux-form-material-ui'
/* ------------------------- Internal Dependencies -------------------------- */
import { Fixed } from 'particles'
import ReduxField from 'organisms/ReduxField'
import DealAddContributors from 'smithing/deals/DealAddContributors'
import DealAddContributorsButton from 'smithing/deals/DealAddContributorsButton'
import DealAddRole from 'smithing/deals/DealAddRole'

import DealAddPropertyButton from 'smithing/deals/DealAddPropertyButton'
import DealAddProperty from 'smithing/deals/DealAddProperty'

import { 
  Flex, Box,
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
} from 'atomic'

import StyleFormDefault from 'static/style/StyleFormDefault'

const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
};

function handleActive(tab) {
  alert(`A tab with this route property ${tab.props['data-route']} was activated.`);
}

export default props => {
  const { handleSubmit, pristine, reset, submitting } = props
  return (
    <form onSubmit={handleSubmit}>
      <Flex
        align='center'
        direction='column'
        justify='center'
        mb={40}
      >
      <Heading level={[3]} f={[4,5]} color='blue' ta='center' >
        Create New Deal
      </Heading>
        <Box w={[1,1, 0.7]} >
          <Field
            name="nameDisplay"
            type="text"
            component={ReduxField}
            placeholder="Deal Name"
            {...StyleFormDefault}
            fs={3}
            h={50}
          />
        </Box>
        <Flex 
          justify='space-evenly'
          mt={[10,15]}
          w={[1]} 
        >

            <Button type="submit" onClick={handleSubmit} gradient='cherry' w={1} >Submit</Button>
            <Button 
            gradient='blue'
            type="button" disabled={pristine || submitting} onClick={reset}
            w={1}
            >
              Clear Values
            </Button>
        </Flex>
      </Flex>
       <Tabs>


        <Tab label="Contributors" >
        <FieldArray name="contributors" component={DealAddContributors} {...props} />
        <Fixed bottom right z={100} >
          <Flex 
            align='center'
            justify='space-evenly'
            gradient='blue'
            py={[15]}
            px={[10]}
          >
            <FieldArray name="contributors" component={DealAddContributorsButton} {...props} />
          </Flex>
          </Fixed>
        </Tab>


        <Tab label="Properties" >
          <Flex 
            align='center'
            justify='space-evenly'
            py={[15]}
          >
            <Heading level={[3]} f={[5]}>
              Properties
            </Heading>
            <FieldArray name="property" component={DealAddPropertyButton} {...props} />
          </Flex>
          <FieldArray name="property" component={DealAddProperty} {...props} />
        </Tab>

        <Tab
          label="Files"
        >
          <div>
            <Heading level={[3]} f={[5]}>
              Resources
            </Heading>
            <p>
              Integer a consectetur nibh. Nam egestas, orci et ultricies elementum, augue massa imperdiet eros, vitae volutpat nisl urna eget libero. Vivamus nibh orci, imperdiet ac purus sit amet
            </p>
            <p>
              Integer a consectetur nibh. Nam egestas, orci et ultricies elementum, augue massa imperdiet eros, vitae volutpat nisl urna eget libero. Vivamus nibh orci, imperdiet ac purus sit amet
            </p>
            <p>
              Integer a consectetur nibh. Nam egestas, orci et ultricies elementum, augue massa imperdiet eros, vitae volutpat nisl urna eget libero. Vivamus nibh orci, imperdiet ac purus sit amet
            </p>
            
          </div>
        </Tab>
        <Tab
          label="Settings"
        >
          <div>
            <Heading level={[3]} f={[5]}>
              Settings
            </Heading>
            <p>
              This is a third example tab.
            </p>
          </div>
        </Tab>
      </Tabs>
    </form>
  )
}