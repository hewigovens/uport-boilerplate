import React from 'react'
import { Field, FieldArray, reduxForm } from 'redux-form'
import Button from 'atoms/Button'

export default ({ fields, meta: { error, submitFailed } }) =>
<div>
<Button 
gradient='cherry'
type="button" onClick={() => fields.push({})}>
  Add
</Button>
{submitFailed && error && <span>{error}</span>}
</div>