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
  gradient="wonderland"
  gradientDir="90deg"
  color={['white']}
  px={[20]}
  pb={[200]}
  z={[15]} pos='relative' >
<BackgroundImage image={assets.images.wolfPups} h={500,650,900} mt={125,200, 230} o={[0.65]} ratio={1/2} />
<BackgroundGradient gradientDir='00deg' h={500,650,900} gradient='purpleTransparent' o={1}/>
<BackgroundImage image={assets.images.landscape} mt={350,525,680} z={0} o={[0.65]} ratio={1/2} />
<Flex direction={['column']}  mh={['50vh', '50vh', '70vh']} justify={['center']} >
  <Container ta='center'>
    <Heading level={[3]} f={[6,7]} fw={300} >
      You can Trust
    </Heading>
    <Heading level={[3]} f={[7,8,9]} fw={700} >
      The Blockchain
    </Heading>
    <Heading level={[3]} f={[4,5]} fw={300} ts={'lightHazy'}>
      But, can you trust everything else?
    </Heading>
  </Container>
</Flex>
<Flex direction={['column']}  mh={['50vh', '50vh']} justify={['center']} >
  <Container ta='center'>
    <Heading level={[3]} f={[4,5]} fw={300} ts={'lightHazy'}>
      The weakest link will always be attacked first
    </Heading>
    <Heading level={[3]} f={[2,3]} fw={700} ts={'lightHazy'}>
      Protect The Pack
    </Heading>
  </Container>
</Flex>


{/*Section Example 2*/}
<Container ta='center' >
  <Heading level={[3]} f={[4,5]} fw={300} ts={'lightHazy'}>
    Interface Manipulation
  </Heading>
  <Heading level={[3]} f={[2,3]} fw={700} ts={'lightHazy'}>
    Protect The Pack
  </Heading>
</Container>

<Flex my={[20, 40]} align={['center']} wrap={['wrap']} >
  <Box w={[1,1,0.33333]} px={[20,35]} >
    <BrowserDisplay>
    </BrowserDisplay>
  </Box>
  <Box w={[1,1,0.33333]} px={[20,35]} >
    <BrowserDisplay>
    </BrowserDisplay>
  </Box>
  <Box w={[1,1,0.33333]} px={[20,35]} >
    <BrowserDisplay>
    </BrowserDisplay>
  </Box>
</Flex>

{/*Section Example 3*/}
<Container ta='center' >
  <Heading level={[3]} f={[4,5]} fw={300} ts={'lightHazy'}>
    Subversive Information
  </Heading>
  <Heading level={[3]} f={[2,3]} fw={700} ts={'lightHazy'}>
    Protect The Pack
  </Heading>
</Container>

<Flex my={[20, 40]} align={['center']} wrap={['wrap']} >
  <Box w={[1,1,0.33333]} px={[20,35]} >
    <BrowserDisplay>
    </BrowserDisplay>
  </Box>
  <Box w={[1,1,0.33333]} px={[20,35]} >
    <BrowserDisplay>
    </BrowserDisplay>
  </Box>
  <Box w={[1,1,0.33333]} px={[20,35]} >
    <BrowserDisplay>
    </BrowserDisplay>
  </Box>
</Flex>

{/*Section Example 1*/}
<Container ta='center' >
  <Heading level={[3]} f={[4,5]} fw={300} ts={'lightHazy'}>
    Communication Hijacking
  </Heading>
  <Heading level={[3]} f={[2,3]} fw={700} ts={'lightHazy'}>
    Protect The Pack
  </Heading>
</Container>

<Flex my={[20, 40]} align={['center']} wrap={['wrap']} >
  <Box w={[1,1,0.33333]} px={[20,35]} >
    <BrowserDisplay>
    </BrowserDisplay>
  </Box>
  <Box w={[1,1,0.33333]} px={[20,35]} >
    <BrowserDisplay>
    </BrowserDisplay>
  </Box>
  <Box w={[1,1,0.33333]} px={[20,35]} >
    <BrowserDisplay>
    </BrowserDisplay>
  </Box>
</Flex>

<Container ta='center' >
  <Heading level={[3]} f={[5,6,7]} fw={700} ts={'lightHazy'}>
    Attacks Will Continue
  </Heading>
  <Heading level={[3]} f={[4,5]} fw={300} ts={'lightHazy'}>
    Across The Landscape
  </Heading>
  <Heading level={[3]} f={[2]} fw={300} mt={[60,120,150]} ts={'lightHazy'}>
    What Pack are you apart of?
  </Heading>
</Container>

</Section>

)
