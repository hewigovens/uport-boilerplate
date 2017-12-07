/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'

/*-* Atoms *-*/
import Flex from 'atoms/Flex'
import Box from 'atoms/Box'
import Container from 'atoms/Container'
import Heading from 'atoms/Heading'
import Paragraph from 'atoms/Paragraph'
import Link from 'atoms/Link'
import Span from 'atoms/Span'
import Section from 'atoms/Section'
import HorizontalRule from 'atoms/HorizontalRule'
import BackgroundImage from 'atoms/BackgroundImage'

/*-* Workshop *-*/
import Login from 'workshop/forms/authentication/AuthorizationLogin'
import IdentityCredentialsDelta from 'assimilation/fetching/identity/IdentityCredentialsDelta'
import IdentityCredentialsRequest from 'assimilation/fetching/identity/IdentityCredentialsRequest'
import UPortCredentialsDelta from 'assimilation/fetching/uport/UPortCredentialsDelta'
import UPortCredentialsRequest from 'assimilation/fetching/uport/UPortCredentialsRequest'

/* ------------------------------- Component -------------------------------- */
export default props => 
<Section {...props} px={[20,40]} pt={[20, 40]} pb={[120]} color='white' textAlign='center' pos='relative' >
  <BackgroundImage image={assets.images.earth} z={0} o={[0.5]} />
  <Flex direction={['column']}  mh={['50vh', '70vh']}justify={['center']} >
    
    <Box w={1} color="white" >
      <Heading fontSize={[5,6,7]} level={3} fontWeight={[300]} mb={10} ts={['darkPurple']}>
        Distributed <Span fw={[700]}>Applications</Span>
      </Heading>
      <HorizontalRule bi='colorWheel' bs={1} w={[0.1333]} />
      <br/>
      <Paragraph fontSize={[2]} fontWeight={[100]} mb={[10]} ts={['darkPurple']}>
        To make a great dream come true, the first requirement is a great capacity to dream;<br/><strong>the second is persistence.</strong>
      </Paragraph>
    </Box> 

    <Box>
      <Container w={[680]} >
        <Paragraph fontSize={[2,3]} fontWeight={[100]} ts={[0]} mt={[10,30, 60]} ><strong>Be The Change</strong> - Join The Community</Paragraph>
        <UPortCredentialsRequest
        
          styledButton={{
            gradient:'cherry',
            fs:3,
          }}
        />
        <UPortCredentialsDelta
          styledCard={{
            bg:'white',
            color: 'charcoal',
            mw: 400,
            p: 20
          }}
          />
      </Container>
    </Box>
  </Flex>
</Section>