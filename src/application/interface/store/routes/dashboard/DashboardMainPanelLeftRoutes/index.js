/* ------------------------- External Dependencies -------------------------- */
import React from 'react';
import { Switch } from 'react-router-dom';
import {Route} from 'atomic'
/* ------------------------- Internal Dependencies -------------------------- */
import { 
  Flex, Box, 
  BackgroundImage, BackgroundGradient,
  Button, Container, Heading, Image, Link, Paragraph, Section, Span, SVG,
  Blockquote, HorizontalRule, Shape, Responsive 
} from 'atomic'
/* ------------------------------- Component -------------------------------- */
export default () => 
<Box
  p={20}
  w={[200]}
>
  <Heading level={[3]} f={[3]}>
    Left Panel
  </Heading>
</Box>
