import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import DealPropertyCondition from 'smithing/deals/DealPropertyCondition'
import ReduxField from 'organisms/ReduxField'
import StyleFormDefault from 'static/style/StyleFormDefault'
import {
  FieldsAuthentication,
  FieldsAddress,
  FieldsAddressAutoComplete,
  FieldsContact,
  FieldsEntityName,
  FieldsMetadata,
  FieldsOrganization,
  FieldsTaxonomy,
  FieldsSettings,
  FieldsBiography,
} from 'foundry'

import { 
  Flex, Box, 
  BackgroundImage, BackgroundGradient, 
  InputWrapper, Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
} from 'atomic'

export default ({ fields, meta: { error, submitFailed }, ...props }) =>
<Flex
  bg='white'
  p={20}
  wrap='wrap'
>
  {fields.map((property, index) => (
    <Box 
      key={index}
      p={15}
      w={[1,1,0.5]}
    >
    <Box  
      bg='white'
      bs={1}
      p={15}
    >
      <h4>Property #{index + 1}</h4>
        <Field
          name={`${property}.name`}
          type="text"
          component={ReduxField}
          placeholder="Property Name"
          {...StyleFormDefault}
          w={[1]}
        />
      <Box w={1} mb={10} >
        <Heading level={[3]} f={[3]} my={[10]} >
          Address
        </Heading>
        <InputWrapper>
          <FieldsAddressAutoComplete {...StyleFormDefault} address={`${property}.props.address`} setAddress={props.setAddress} w={1} />
        </InputWrapper>
      </Box>
      <FieldArray name={`${property}.role`} component={DealPropertyCondition} />
    <Button
      type="button"
      onClick={() => fields.remove(index)}
      mt={15}
      w={1}
      >
      Remove Property
    </Button>
  </Box>
  </Box>
  ))}
</Flex>