/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import { graphics } from 'assets'

import Paragraph from 'atoms/Paragraph'
import Image from 'atoms/Image'
import Section from 'atoms/Section'
import Container from 'atoms/Container'

import IdentityCredentialsRequest from 'assimilation/fetching/identity/IdentityCredentialsRequest'
/* ------------------------------- Component -------------------------------- */
export default props =>
<Section
  color='white'
  gradient='blue'
  py={[30,60,120]}
  {...props}
>
  <Container textAlign={['center']} w={[1,1, 720]} >
    <Paragraph f={[2]}>Start building with Ethereum today. </Paragraph>
    <IdentityCredentialsRequest
        styledButton={{
          gradient:'cherry',
          fs:3,
        }}
      />
  </Container>
</Section>
