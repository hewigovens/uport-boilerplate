/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { Absolute } from 'particles'
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
<Section {...props}
  gradient="purple2"
  gradientDir="180deg"
  color={['white']}
  px={[20]}
  py={[200]}
  z={[15]}
  pos='relative' >
  <BackgroundImage image={assets.images.wolfHowl} z={0} o={[0.75]} ratio={1/2} />
  <BackgroundGradient gradientDir='190deg' gradient='purple1' o={0.4}/>
  <BackgroundGradient gradientDir='-90deg' gradient='purple3'  o={0.53}/>
  <Flex direction={['column']}  mh={['50vh', '50vh', '70vh']} justify={['center']} >
      <Container>
      <Heading level={[3]} f={[4,5]}>
        wolf.howl(worldState)
      </Heading>
      <Heading level={[3]} f={[5,6,7]} fw={300} >
        WebRTC - Peer to Peer State Verification
      </Heading>
    </Container>
  </Flex>
 

</Section>

)
