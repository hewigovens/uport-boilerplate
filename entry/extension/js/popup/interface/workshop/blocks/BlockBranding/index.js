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
import UserProfile from 'containers/user/UserProfile'
import { DrawerOpen } from 'containers'


/* --------------------------- Styled Components ---------------------------- */

/* ------------------------- Component Properties --------------------------- */
/* ------------------------------- Component -------------------------------- */
export default props => (
    <Flex direction={['row']} align={"stretch"} justify="center"  bg={['blue']} gradient={['blue']} gradientDir='45deg' color={['blueLight']} bs={[0]}  z='20' pos='relative'>
      <Flex align="center" direction={['column']}  justify="center" w={[0.5, 0.35]} pl={[15]}>
        <Link to="/"><Heading color={'white'} level={4} margin={'0'} fontSize={[5]} fontWeight={'100'}>WOLF</Heading></Link>
      </Flex>
      <Flex align="center" direction={['column']} justify={[ 'center']} pr={[null, null, 15]} py={[5, 5, 'inherit']} w={[0.5, 0.23]}>
        <UserProfile py={[10]} />
      </Flex>
      <Flex align="center" justify='center' bg={['blueDark']} py={[10]} color='white' w={[1, 1, 0.07]} textAlign="center">
        <DrawerOpen><Heading f={[2]} level={[4]}><a>Menu</a></Heading></DrawerOpen>
      </Flex>
    </Flex>
)
