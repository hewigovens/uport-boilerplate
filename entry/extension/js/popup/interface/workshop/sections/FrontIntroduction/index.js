/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { 
  Flex, Box, 
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
}from 'atomic'
import BrowserDisplay from 'components/sentient/BrowserDisplay'
import SmartphonePixel from 'components/sentient/SmartphonePixel'
/* ------------------------------- Component -------------------------------- */
export default props => (
<Section {...props} gradient="blue" color={['white']} pos="relative" pb={[20, 40, 80]} pt={[70, 100,140]} px={[20]} z={[15]} pos='relative' >
  <BackgroundImage image={assets.images.wolfMoon} z={0} o={[0.65]} ratio={1/2} />
  <Container w={[1,1, 1020]} >
    <Flex direction={['column', 'column', 'row']} mt={[40,60]} >
      <Box w={[1,1,0.7]}>
        <Heading f={[5,6,9]} level={[2]} color={'white'} mt={[10, 20]} >TRUSTED<br/><Span fw={300}>TERRITORY</Span></Heading>
        <Paragraph f={[4,5]} color={['white']}>Stay Safe in the Wild.</Paragraph>
      </Box>
      <Box w={[1,1,0.3]}>
        <SmartphonePixel>
          hello
        </SmartphonePixel>
      </Box>

    </Flex>
  </Container>
  <Container>
    <Flex my={[20, 40]} align={['center']} wrap={['wrap']} >
      <Box w={[1,1,0.5]} order={[2,2,1]} >
        <BrowserDisplay>
        </BrowserDisplay>
      </Box>
      <Box w={[1,1,0.5]} order={[1,1,2]} px={[10, 20, 40]} >
        <Heading f={[5,6]} level={[2]} color={'white'} mt={[0]}>Community Security.</Heading>
        <Heading f={[3,4]} level={[2]} color={'white'} mt={[0]}>Monitor Community Stakeholds Collectively.</Heading>
        <ul>
          <li>Inaccurate Interface Stat?</li>
          <li>Correct Date || Wallet Address</li>
          <li>News Altering && Social Engineering</li>
          <li>Altering Recorded/Immutable History?</li>
          <li>Malicious Code Injection?</li>
        </ul>
      </Box>
    </Flex>
  </Container>
</Section>
)
