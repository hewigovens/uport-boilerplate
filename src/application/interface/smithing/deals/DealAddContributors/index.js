import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import DealAddRole from 'smithing/deals/DealAddRole'
import ReduxField from 'organisms/ReduxField'
import StyleFormDefault from 'static/style/StyleFormDefault'

import { 
  Flex, Box, 
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
} from 'atomic'

export default ({ fields, meta: { error, submitFailed } }) =>
<Flex
  
  p={20}
  wrap='wrap'
>
  {fields.map((member, index) => (
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
      <button
        type="button"
        onClick={() => fields.remove(index)}
      >
      Remove Member
      </button>
      <h4>Contributor #{index + 1}</h4>
        <Field
          name={`${member}.email`}
          type="text"
          component={ReduxField}
          placeholder="Email"
          {...StyleFormDefault}
          w={[1]}
        />
      <Flex w={1} >
        <Field
          name={`${member}.firstName`}
          type="text"
          component={ReduxField}
          placeholder="First Name"
          {...StyleFormDefault}

        />
        <Field
          name={`${member}.lastName`}
          type="text"
          component={ReduxField}
          placeholder="Last Name"
          {...StyleFormDefault}

        />
      </Flex>
      <FieldArray name={`${member}.role`} component={DealAddRole} />
    </Box>
    </Box>
  ))}
</Flex>