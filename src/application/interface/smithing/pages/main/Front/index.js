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
import { 
  FrontIntroduction,
  FrontJourney,
  FrontPrograms,
  FrontProjectsActive,
  FrontProjectsSubmit,
  FrontOrganizationSearch,
  FrontResourcesSearch,
  FrontArticleSearch,
} from 'smithing/sections'
import { CommunityPrograms } from 'smithing/blocks'

import {
  FirestoreListCompose
} from 'containers'

/* ------------------------------- Component -------------------------------- */
export default props => (
<div>
  <Shape top left right h={[ '70px', '90px', "125px"]} mt={[-70, -90, -125]} svg={assets.svg.waves} />
  <Shape top left right h={[ '70px', '90px', "125px"]} svg={assets.svg.waves} w={[1]} transform={['rotate(180deg)']} z={0} />
  <Section py={[60,220]} >
    <Container w={[420]} >
      <Heading level={[3]} f={[3]}>
        Build Distributed Applications
      </Heading>
      <Paragraph f={[1]}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et ullamcorper eros. Nullam ac massa lacus. Suspendisse sagittis, leo vitae scelerisque sagittis, nibh arcu faucibus leo, eu imperdiet dolor elit et augue. Mauris vel cursus odio, ut pharetra urna. Suspendisse vel nulla vel nibh interdum consequat in feugiat nisl. Duis a varius nisl. Praesent diam diam, semper at elit sit amet, aliquam porttitor metus. Integer suscipit semper augue eget ornare. Donec ac tempor neque. Cras congue nisl ut turpis varius varius. In hac habitasse platea dictumst. Donec sed nisi id ligula elementum gravida. Curabitur eu molestie mauris, sit amet porta augue. Praesent imperdiet lacus felis, a egestas lectus placerat vitae.
        </Paragraph>
    
        <Paragraph f={[1]}>
          Sed feugiat, augue sed laoreet porttitor, nibh urna pulvinar ante, nec tincidunt turpis libero quis leo. Sed eu justo odio. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla eleifend sagittis est, at pretium erat feugiat nec. Nam et massa congue ipsum egestas euismod id sit amet lorem. Morbi volutpat nunc vitae ligula pharetra, finibus tempus libero laoreet. Maecenas sodales, leo eu fermentum cursus, nibh nunc suscipit lectus, eget sodales erat leo vel ex. Donec et nulla laoreet, placerat lorem sed, viverra risus. Curabitur enim erat, pharetra et mauris ac, ultricies egestas nisi.
        </Paragraph>
    
        <Paragraph f={[1]}>
          Fusce tellus quam, porta a condimentum non, faucibus ut quam. Curabitur a dignissim odio. Praesent luctus commodo congue. In quis nulla scelerisque, ultricies mi ac, finibus tortor. Curabitur non odio nisl. Maecenas ullamcorper dolor ut volutpat rhoncus. Aliquam quis nibh nulla. Donec sodales augue nec ex volutpat, in bibendum nisi egestas. In eleifend ut magna eu tincidunt. Integer orci nibh, dignissim sed ullamcorper non, ultricies id tortor. Fusce lacinia velit vel ex placerat dignissim. Suspendisse maximus odio at tellus auctor facilisis. Praesent ut tellus erat.
        </Paragraph>
    </Container>
  </Section>
</div>
)
