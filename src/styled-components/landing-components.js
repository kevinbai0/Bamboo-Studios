import styled from "styled-components";
import { Tagline } from "../utils/theme";
import * as theme from "../utils/theme";
import DefaultButton from "../components/default-button";

export const LandingContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 0 8vw 15vw;
  @media only screen and (min-width: 600px) {
    padding: 0 15vw 15vw;
  }
  @media only screen and (min-width: 1200px) {
    padding: 0 8vw 8vw;
  }
`;
export const TitleTagline = styled(Tagline)`
  margin: 3vw 0 0;
  font-size: 7.5vw;
  @media only screen and (min-width: 600px) {
    font-size: 6vw;
  }
  @media only screen and (min-width: 900px) {
    font-size: calc(12px + 3vw);
  }
`;
export const Subline = styled.h3`
  font-weight: 400;
  color: ${theme.colors.tintColor};
  line-height: 1.5;
  font-size: 6vw;
  @media only screen and (min-width: 450px) {
    font-size: 4vw;
  }
  @media only screen and (min-width: 900px) {
    width: 60vw;
    font-size: calc(12px + 2vw);
  }
`;

export const SecondaryContainer = styled.div`
  background-color: ${theme.colors.darkColor};
  padding: 10vw 8vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  @media only screen and (min-width: 600px) {
    padding: 10vw 15vw;
  }
  @media only screen and (min-width: 1200px) {
    padding: 6vw 8vw;
  }
`;

export const SecondLandingHeader = styled(theme.ResponsiveHeader)`
  color: ${theme.colors.lightColor};
  line-height: 1.5;
  margin: 0;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ContactHeader = styled(theme.ResponsiveHeader)`
    color: ${theme.colors.darkColor};
    margin: 10vw 0 3vw;
    @media only screen and (min-width: 900px) {
        margin: 5vw 0 3vw;
    }
`;

export const MessageLabel = styled(theme.ResponsiveText)`
    color: ${theme.colors.darkColor};
    margin: 1vw 0 10vw;
    @media only screen and (min-width: 900px) {
        margin: 1vw 0 5vw;
    }
`