/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
/* ------------------------- Internal Dependencies -------------------------- */
import ReduxField from 'organisms/ReduxField'
import StyleFormDefault from 'static/style/StyleFormDefault'
import { 
  Flex, Box, 
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
} from 'atomic'

export default ({ fields, meta: { error } }) => !fields ? null :
<Box>

<Button
gradient='blue'
type="button" onClick={() => fields.push()}>
  Add Permissions
</Button>
  <Flex direction="column" >
    {fields.map((role, index) => (
      <Box key={index}>
        <Field
          name={role}
          type="text"
          component={ReduxField}
          label={`Access #${index + 1}`}
          {...StyleFormDefault}
        />
        <Button
          type="button"
          onClick={() => fields.remove(index)}
        >
        Remove Permission
        </Button>
      </Box>
    ))}
  </Flex>
  {error && <li className="error">{error}</li>}
</Box>
