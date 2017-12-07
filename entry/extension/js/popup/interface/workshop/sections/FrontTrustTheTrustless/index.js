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
  <BackgroundImage image={assets.images.moonEclipse} z={0} o={[0.35]} h={[1,1,0.8]} ratio={1/2} />
  <Container w={[1,1, 1020]} >
    <Heading f={[5,6,7]} level={[2]} color={'white'} mt={[10, 20]} >Trust The Untrustable</Heading>
    <Heading f={[2,3]} color={['white']} fw={300}>Follow pack intution. Monitor subversive ‘worldState’ change as it occurs.</Heading>
  </Container>
  <Container>
    <Flex my={[20, 40]} align={['center']} wrap={['wrap']} >
      <Box w={[1,1,0.5]} px={[10, 20, 40]} >
        <Heading f={[3,4]} level={[2]} color={'white'} mt={[0]}>Instant Alert Systems.</Heading>
        <Paragraph f={[1]}>Get howl updates about “not-friendly” activity.</Paragraph>
        <Paragraph f={[1]}>Prevent members of the pack from being hunted down. Contribute to the comtmunity well-being and personal safety. Protect yourself from today’s and tomorrow’s threats.</Paragraph>
      </Box>
      <Box w={[1,1,0.5]} >
        <BrowserDisplay>
        </BrowserDisplay>
      </Box>
    </Flex>
  </Container>
  <Container w={[1,1, 1020]} ta='center' py={[20,40,80]} >
    <Heading f={[5,6,8]} level={[2]} color={'white'} mt={[10, 20]} >DETECT <Span fw={300}>STATE</Span> CHANGE</Heading>
    <Heading f={[4,5]} color={['white']} fw={300} >Checksum DOM Nodes Across Device/Time</Heading>
  </Container>
  <Container>
    <Flex my={[20, 40]} align={['center']} wrap={['wrap']} >
      <Box w={[1,1,0.5]} >
        <BrowserDisplay>
        </BrowserDisplay>
      </Box>
      <Box w={[1,1,0.5]} pt={[0,0, 170]} px={[10, 20, 40]} >
        <Heading f={[5,6]} level={[3]} color={'white'} mt={[0]}>State of The World</Heading>
        <Heading f={[3,5]} level={[5]} color={'white'} mt={[0]}>Always In Motion</Heading>
        <Paragraph f={[1]}>The pack, always watching, always present. Howling across the moon’s sky. Monitoring territory for enemy intrusion and subtle influences of subersion by the sly beast.</Paragraph>
        <Paragraph f={[1]}>Share pack intution across devices with verified DOM nodes, ensuring the interface you expect to see is the one being rendered.</Paragraph>
        <Paragraph f={[1]}>Anomolies can and will be spotted quickly, if the pack communicates. Subversion attempts can be prevented, irregardless of the territories owners responses... or lack there of. </Paragraph>
        <Paragraph f={[1]}>The Pack is in charge of the hunt.</Paragraph>
      </Box>
    </Flex>
  </Container>
</Section>
)
