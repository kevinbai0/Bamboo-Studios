import React from "react";
import styled from "styled-components";
import * as theme from "../../utils/theme";
import parseDate from "../../utils/dateParser";

import Img from "gatsby-image";

const Card = styled.div`
    background-color: white;
    width: 100%;
    height: 100%;
    border-radius: 10px;

    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: 100%;
    justify-content: stretch;
    overflow: hidden;
    color: ${theme.colors.lightColor};
`;

const InfoLayer = styled.div`
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.darkTintColor};
    padding: 20px;
`;

const ImageLayer = styled.div`
    background-color: white;
`;

const Title = styled.h2`
    font-size: 18px;
    font-weight: 900;
    margin: 0;
    @media only screen and (min-width: ${theme.mobileSwitchWidth}px) {
        font-size: 22px;
    }
`;

const DateLabel = styled.h3`
    font-size: 14px;
    font-weight: 900;
    color: ${theme.colors.lightTintColor};
    margin: 0;
    @media only screen and (min-width: ${theme.mobileSwitchWidth}px) {
        font-size: 16px;
    }
`;

const AuthorLabel = styled.span`
    font-size: 14px;
    align-self: flex-end;
    @media only screen and (min-width: ${theme.mobileSwitchWidth}px) {
        font-size: 16px;
    }
`;

export default function BlogCard({title,date,author,image,link}) {
    return (
        <theme.StyledLink to={link}>
            <Card>
                <ImageLayer>
                    {
                        image &&
                            <Img fluid={image} />
                    }
                </ImageLayer>
                <InfoLayer>
                    <Title>{title}</Title>
                    <DateLabel>{parseDate(date)}</DateLabel>
                    <AuthorLabel>By {author}</AuthorLabel>
                </InfoLayer>
            </Card>
        </theme.StyledLink>
    )
}