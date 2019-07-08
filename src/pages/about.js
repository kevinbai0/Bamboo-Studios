import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import TemplatePage, { TemplateHeader } from "../components/custom/TemplatePage";
import { AboutParagraph, TeamMembers } from "../styled-components/about-components";
import * as theme from "../utils/theme";
import TeamMember from "../components/custom/TeamMember";
import { useStaticQuery, graphql } from "gatsby";

export default function AboutPage({data}) {
    const images = data.allFile.edges;
    console.log(images);
    return (
        <Layout>
            <SEO title="About" />
            <TemplatePage title="About">
                <theme.ResponsiveHeader as={TemplateHeader}>Who we are</theme.ResponsiveHeader>
                <theme.FluidText as={AboutParagraph}>
                    Bamboo Studios is a design & development agency focused on creating lasting digital experiences in the form of websites and mobile apps. We aim to provide businesses with the best services to help them thrive in today’s digital world.
                </theme.FluidText>
                <theme.FluidText as={AboutParagraph}>
                    At Bamboo Studios, we like to focus on the big picture. We don’t just create apps and websites. We create impactful and memorable experiences for your customers.
                </theme.FluidText>
                <theme.FluidText as={AboutParagraph}>
                    The small details are important to us too. We strive to make sure every pixel is in the right place and every interaction is as smooth as butter.
                </theme.FluidText>
                <theme.ResponsiveHeader as={TemplateHeader}>The Team</theme.ResponsiveHeader>
                <TeamMembers>
                    {
                        images.filter(({node: person}) => people[person.name])
                            .map(({node: person}, index) => 
                                <TeamMember index={index} name={people[person.name].name} role={people[person.name].role} data={person} />
                            )
                    }
                </TeamMembers>
            </TemplatePage>
        </Layout>
    );
}

// get image queries
/*export const TeamImage = graphql`
    fragment TeamImage on File {
        childImageSharp {
            fluid(maxWidth: 1000, maxHeight: 1000, quality: 100) {
                ...GatsbyImageSharpFluid
            }
            
        }
    }
`;
*/
export const query = graphql`
    query {
        allFile(filter: { sourceInstanceName: { eq: "people" } }) {
            edges {
                node {
                    name
                    childImageSharp {
                        fluid(maxWidth: 1000, maxHeight: 1000, quality: 100) {
                            ...GatsbyImageSharpFluid
                        }
                        
                    }
                }
            }
        }
    }
`;

/*
each with this template: 
kevinbai: file(relativePath: { eq: "kevin-bai.png" }) {
    ...TeamImage
}
*/

// get team images
export const people = {
    "Kevin Bai": {
        name: "Kevin Bai",
        imagePath: "kevin-bai.png",
        role: "Founder/Creative Director",
    }
}