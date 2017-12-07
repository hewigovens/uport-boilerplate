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
  gradient="purpleHaze"
  gradientDir="180deg"
  color={['white']}
  py={[200]}
  z={[15]} pos='relative' >
  
<BackgroundImage image={assets.images.wolfHunt} h={[300,500,1150]} z={0} o={[0.85]} ratio={1/2} />
<BackgroundGradient h={[300,500,1150]} gradientDir='190deg' gradient='purpleTransparent' o={0.6}/>
<BackgroundGradient h={[300,500,1150]} gradientDir='-90deg' gradient='purpleTransparent'  o={0.83}/>
<Flex direction={['column']}  mh={['50vh', '50vh', '70vh']} >
    {/*Title 1*/}
    <Container>
      <Heading level={[3]} f={[6,7,9]} fw={300} ts={['darkPurple']} > 
        NAVIGATE<br/>
        <Span fw={900}>THE WORLD</Span>
      </Heading>
      <Heading level={[3]} f={[4,5]} fw={300} ts={['darkPurple']}>
        With the Pack by your side.
      </Heading>
    </Container>

    {/*Title 2*/}
    <Container mt={[20,40,80]} >
      <Heading level={[3]} f={[4,5,6]} ts={['darkPurple']}>
        Monitor Hacks Occuring
      </Heading>
      <Heading level={[3]} f={[4,5]} fw={300} ts={['darkPurple']}>
        Observe Shared World State
      </Heading>
    </Container>

    <Flex my={[20, 40]} align={['center']} wrap={['wrap']} >
      <Box w={[1,1,0.25]} pt={[0,0, 170]} px={[10, 20, 40]} >
        <Heading f={[5,6]} level={[3]} color={'white'} mt={[0]}></Heading>
      </Box>
      <Box w={[1,1,0.75]} pl={[null,null, '12.5%']}  >
        <BrowserDisplay>
        </BrowserDisplay>
      </Box>
    </Flex>

    <Container w={[780]} ta='center' >
      <Heading f={[6,7,8]} level={[3]} color={'white'} mt={[0]}>
        1 to N
      </Heading>
      <Heading f={[3,4]} level={[3]} color={'white'} mt={[0]}>
        Abnormal DOM Checksums
      </Heading>
    </Container>
    <Flex my={[20, 40]} align={['stretch']} wrap={['wrap']} >
      <Box w={[1,1,0.55]} pt={[0,0, 170]} px={[10, 20, 40]} >
        <BrowserDisplay>
        </BrowserDisplay>
      </Box>
      <Box w={[1,1,0.45]} pl={[null,null, '12.5%']} pos='relative'>
        <Absolute top bottom left right mt={['7%']} ml={['-30%']} w={[1,1,'110%']} z={1005} >
          <Image src={assets.screenshots.demo} br={0.5} bs={2}b={'2px solid'} />
        </Absolute>
      </Box>
    </Flex>


    <Container w={780} >
    <Flex align='center' justify='space-evenly' direction={['column', 'column', 'row' ]} ta='center' >
      <Heading f={[6]} level={[3]} color={'white'} mt={[0]}>
        trueChecksum
      </Heading>
      <Heading f={[3,4]} level={[3]} color={'white'} mt={[0]} px={[10]} >
        now becomes 
      </Heading>
      <Heading f={[6]} level={[3]} color={'white'} mt={[0]}>
        falseChecksum
      </Heading>
    </Flex>
    </Container>

    <Container mt={[40,80,140]} w={780}>
      <BrowserDisplay>
      </BrowserDisplay>
    </Container>

</Flex>
 

</Section>

)
