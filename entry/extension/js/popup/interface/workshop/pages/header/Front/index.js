/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'
import { Flex, Box, Grid, Text, Lead} from 'particles'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { 
 BackgroundImage, BackgroundGradient,
 Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
 Blockquote, HorizontalRule, Shape, Responsive 
 } from 'atomic'
import { ButtonLink } from 'fusion'
import {
  FormResourceURL,
  HashKeys,
} from 'workshop/forms'

import Login from 'workshop/forms/authentication/AuthorizationLogin'
import LinkButtonOutline from 'molecules/LinkButtonOutline'

const MediaQuery = require('react-responsive');

/* --------------------------- Styled Components ---------------------------- */
/* ------------------------- Component Properties --------------------------- */
/* ------------------------------- Component -------------------------------- */
const Front = ({ ...props }) => {
  return (
    <Section {...props} px={[20,40]} pt={[20, 40]} pb={[40]} color='white' textAlign='center' pos='relative' >
      <BackgroundImage image={assets.images.wolfpack} z={0} o={[0.5]} />
      <Flex direction={['column']}  mh={['50vh', '20vh']}justify={['center']} >
        <Box w={1} color="white" >
          <Heading level={[3]} f={[3]}>Howl To The Pack</Heading>
          <HashKeys/>
          <Heading level={[2]} f={[2]} color='white' fw="300" >Share Territory State</Heading>
          <HorizontalRule bi='colorBase' bs={5} gradient='lime' w={[0.1]} />
        </Box> 

      </Flex>

    </Section>
  )
}

/* ---------------------------- Export Package ------------------------------ */
export default Front