import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo";

import styled from "styled-components";
import * as theme from "../utils/theme";

const Container = styled.div`
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  color: ${theme.colors.darkColor};
`;
const Label404 = styled.h1`
  font-size: 20vw;
  font-weight: 900;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const MessageLabel = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 15%;
  line-height: 1.5;
  text-align: center;
  width: 90%;
`;

const NotFoundPage = () => (
  <Layout withoutFooter>
    <SEO title="404: Not found" />
    <Container>
      <Label404>404</Label404>
      <theme.ResponsiveText as={MessageLabel} baseSize={28}>Oops! The page you’re looking for doesn’t exist!</theme.ResponsiveText>
    </Container>
  </Layout>
)

export default NotFoundPage
