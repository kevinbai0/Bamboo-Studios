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
    grid-template-rows: calc(100% - 125px) 125px;
    grid-template-columns: 100%;

    @media only screen and (min-width: ${theme.mobileSwitchWidth}px) {
        grid-template-rows: calc(100% - 140px) 140px;
    }
    justify-content: stretch;
    overflow: hidden;
    color: ${theme.colors.lightColor};
`;

const InfoLayer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: auto 1fr 1fr;
    height: inherit;
    flex-direction: column;    
    background-color: ${theme.colors.darkTintColor};
    padding: 20px;
    align-self: end;
`;

const ImageLayer = styled.div`
    background-color: white;
    min-width: 100%;
    height: 100%;
    align-self: stretch;
`;
const Image = styled(Img)`
    height: inherit;
`;

const Title = styled.h2`
    font-size: 18px;
    line-height: 1.2;
    max-height: 43px;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 900;
    margin: 0;
    @media only screen and (min-width: ${theme.mobileSwitchWidth}px) {
        font-size: 22px;
        max-height: 56px;
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
    justify-self: end;
    align-self: end;
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
                            <Image fluid={image} />
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