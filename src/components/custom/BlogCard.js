import React from "react";
import styled from "styled-components";
import * as theme from "../../utils/theme";
import { Link }  from "gatsby";

const Card = styled.div`
    background-color: white;
    width: 100%;
    height: 100%;
    border-radius: 10px;

    display: flex;
    flex-direction: column-reverse;
    justify-content: stretch;
    overflow: hidden;
    color: ${theme.colors.lightColor};

`;

const InfoLayer = styled.div`
    background-color: ${theme.colors.darkTintColor};
    padding: 20px;
`;

const ImageLayer = styled.div`
    background-color: white;
`;

const Title = styled.h2`
    font-size: 22px;
    font-weight: 900;
    margin: 0;
`;

const DateLabel = styled.h3`
    font-size: 16px;
    font-weight: 900;
    color: ${theme.colors.lightTintColor};
    margin: 0;
`;

export default function BlogCard({title,date,readTime,link}) {
    return (
        <theme.StyledLink to={link}>
            <Card>
                <InfoLayer>
                    <Title>{title}</Title>
                    <DateLabel>{parseDate(date)}</DateLabel>
                    <span>{readTime} min read</span>
                </InfoLayer>
                <ImageLayer>

                </ImageLayer>
            </Card>
        </theme.StyledLink>
    )
}

const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
]

function parseDate(date) {
    return months[date.getMonth()] + " " + date.getDate() + ", " + date.getFullYear(); 
}