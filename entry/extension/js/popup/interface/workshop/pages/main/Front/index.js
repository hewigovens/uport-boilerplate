/* ------------------------- External Dependencies -------------------------- */
import React from 'react'
import styled from 'styled-components'
import MediaQuery from 'react-responsive'
/* ------------------------- Internal Dependencies -------------------------- */
import assets from 'assets'
import { 
  Flex, Box, 
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
}from 'atomic'
import { CommunityPrograms } from 'workshop/blocks'
import {
  Actions,
  FrontIntroduction,
  FrontJourney,
  FrontPrograms,
  FrontTrustTheTrustless,
  FrontWebRTC,
  FrontDetect,
  FrontNavigateTheWorld,
  FrontTrustTheBlockchain,
} from 'workshop/sections'
import { ButtonLink } from 'fusion'
import {
  FormResourceURL,
  HashKeys,
} from 'workshop/forms'
import {
  WalletAddress,
  HashDisplay,
  HashList,
} from 'foundry'
import {
  MiningInterface
} from 'containers'
/* --------------------------- Styled Components ---------------------------- */

/* ------------------------------- Component -------------------------------- */
export default props=> (
<div>
<Section gradient='blue' color='white' >
  <Container id="walletAddressContainer"  w={[980]} ta='center' py={[40,80,150]} >
    <Heading level={[3]} f={[3]}>Latest Hashes</Heading>
    <Heading level={[3]} f={[1]}>API for filtering available shortly.</Heading>
    <Heading level={[3]} f={[0]} fw={300} >When you reload you'll see the latest HASH | Proof of Concept</Heading>
    <HorizontalRule bi='colorBase' bs={5} gradient='lime' w={[1]} />
    <HashList/>
    <HorizontalRule bi='colorBase' bs={5} gradient='lime' w={[1]} />
    <Heading level={[3]} f={[3]}>Support The Pack</Heading>
    <Heading level={[4]} f={[2]}>Voluntary Crypto Botnet</Heading>
    <MiningInterface/>
  </Container>
</Section>

</div>)