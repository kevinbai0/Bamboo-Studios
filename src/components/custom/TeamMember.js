import React from "react";
import styled from "styled-components";
import Img from "gatsby-image";
import * as theme from "../../utils/theme";

const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

const Image = styled(Img)`
    background-color: white;
    border-radius: 0.25vw;
`;

const NameField = styled.div`
    font-weight: 800;
    color: ${theme.colors.darkColor};
    margin: 0.5vw 0;
`;
const RoleField = styled.div`
    color: ${theme.colors.darkTintColor};
`;

export default function TeamMember({name, role, data, index}) {
    return (
        <Container key={index}>
            <Image fluid={data.childImageSharp.fluid} />
            <theme.ResponsiveText as={NameField}>{name}</theme.ResponsiveText>
            <theme.ResponsiveText as={RoleField}>{role}</theme.ResponsiveText>

        </Container>
    )
}