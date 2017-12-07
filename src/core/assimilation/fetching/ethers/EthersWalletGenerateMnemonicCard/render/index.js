/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import PropTypes from 'prop-types'
import { Field } from 'redux-form'

/* ------------------------- Internal Dependencies -------------------------- */
import { Block } from 'particles'
import { Flex, Box, Button, Heading, ReduxField } from 'atomic'
import Paragraph from 'atoms/Paragraph'
import Form from 'molecules/Form'
import WalletDisplay from 'assimilation/display/ethers/EthersWalletDisplay'
/* ---------------------------- Form Component ------------------------------ */
Block.defaultProps = {is: 'form'}
export default ({ handleSubmit, isSubmitting, styled, ...props}) => (
<Form {...styled}>
  <Paragraph f={[1]}>
    The 15 word phrase is similar to a debit card pin. Excepts, it's much longer.
  </Paragraph>
  <Box>
    <Field name="mnemonicPhrase" placeholder="Mnemonic (15 Word Phrase)" component={ReduxField} type="text" />
  </Box>
  <Box mt={10} >
    <Button type="submit" onClick={handleSubmit} gradient='cherry'w={1} >Submit</Button>
  </Box>
  {
    !props.data ? null :
    <WalletDisplay data={props.data}/>
  }
</Form>
)