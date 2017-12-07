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
<Section {...props} gradient="blue" gradientDir="180deg" color={['white']}px={[20]} z={[15]} pos='relative' >
  <Container w={[1,1, 1020]}>
    <Box w={[1,1,0.5]} >
      <Heading level={[3]} f={[3]}>Irregular DOM Change</Heading>
      <HorizontalRule bi='red' bs={5} w={[1]} />
        <ul>
          <li>Notify Pack</li>
          <li>Dispatch Guards</li>
          <li>Monitor Connected Territory</li>
        </ul>
      </Box>
      <Box mt={[0,0, 240]} ml={[1,1,'20%']} w={[1,1,0.8]} >
      <Heading level={[3]} f={[3]}>Interface Manipulation</Heading>
       <HorizontalRule bi='red' bs={5} w={[1]} />
        <ul>
          <li>Prevent Information Subversion</li>
          <li>False Reporting/Information Cycles</li>
        </ul>
      </Box>
  </Container>
  <Container w={[780]} pos='relative' mt={[0,0,140]} >
    <BrowserDisplay>
      <Image src={assets.screenshots.demo}/>
    </BrowserDisplay>
    <Absolute top right mt={['-10%']} mr={['-10%']} w={[0.5]} z={1005} >
      <Image src={assets.screenshots.demo} br={0.5} bs={2}b={'2px solid'} />
    </Absolute>
  </Container>

  {/* Section 2 */}
  <Container w={[1,1, 1020]}>
    <Box my={[0,0, 160]} ml={[1,1,'50%']} w={[1,1,0.5]} >
    <Heading level={[3]} f={[3]}>Fraudulent Wallet Address</Heading>
      <HorizontalRule bi='red' bs={5} ml={[null,null, '-30%']} w={['130%']} />
      <ul>
        <li>Resource Drained From Territory</li>
        <li>False Reporting/Information Cycles</li>
      </ul>
    </Box>
  </Container>
  <Container w={[780]} pos='relative' >
    <BrowserDisplay>
      <Image src={assets.screenshots.demo}/>
    </BrowserDisplay>
    <Absolute top left mt={['-20%']} ml={['-20%']} w={[0.5]} z={1005} >
      <Image src={assets.screenshots.demo} br={0.5} bs={2}b={'2px solid'} />
    </Absolute>
  </Container>
  
  {/* Section 3 */}
  <Container w={[1,1, 1020]}>
    <Box my={[0,0, 160]} ml={[1,1,'50%']} w={[1,1,0.5]} >
    <Heading level={[3]} f={[3]}>Fraudulent Wallet Address</Heading>
      <HorizontalRule bi='red' bs={5} ml={[null,null, '-30%']} w={['130%']} />
      <ul>
        <li>Resource Drained From Territory</li>
        <li>False Reporting/Information Cycles</li>
      </ul>
    </Box>
  </Container>
  <Container w={[780]} pos='relative' >
    <BrowserDisplay>
      <Image src={assets.screenshots.demo}/>
    </BrowserDisplay>
     <Absolute bottom right mb={['-20%']} mr={['-20%']} w={[0.5]} z={1005} >
      <Image src={assets.screenshots.demo} br={0.5} bs={2}b={'2px solid'} />
    </Absolute>
  </Container>
    

  <Container w={[1,1, 1020]} py={[0,0, 140]} >
    
    <Flex align='center' direction={['column', 'column', 'row']}>
      <Box w={[1,1,0.5]}>
        <Flex align='center' justify='center' ta='center' br={0.5} w={[1]} h={300} bg="green" >
          <Heading level={[3]} f={[5,6]}>Distributed<br/><Span fw={300} >Security</Span></Heading>
        </Flex>
      </Box>
      <Box w={[1,1,0.5]} ta='center'>
        <Heading level={[3]} f={[4,5]}>Solution</Heading>
        <HorizontalRule bi='green' bs={5} ml={[0,0,'-10%']} w={[1]} />
        <Paragraph f={[1]}>Communicate With the Pack.</Paragraph>
        <Paragraph f={[1]}>Peer-to-Peer Verification.</Paragraph>
        <Paragraph f={[1]}>Howl At The Night Sky.</Paragraph>
      </Box>
    </Flex>
  </Container>
  <Shape top left right w={[1]} svg={assets.svg.slope} w={[1]} />
</Section>

)
