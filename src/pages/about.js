import React from 'react';
import Img from 'gatsby-image';
import Page from '../components/Page/Page';
import { graphql } from 'gatsby'

const AboutPage = ({ data }) => (
  <Page title="About">
    <div className="about-page">
      <div className="about-page__key-image">
        <Img sizes={data.profileImage.sizes} alt="A photo of Mark Shakespeare" />
      </div>
      <p>Mark studied Fine Art at Sheffield University before going on to train as an art therapist in 1985. He has since worked in the NHS providing an art therapy service for people with learning disabilities in Surrey. He retired from his role as Lead Consultant Art Therapist with Surrey & Borders Partnership NHS FT in 2015.</p>
      <p>Mark now works as a freelance art practitioner running workshops for groups as well as individual sessions.</p>
      <h2>What I do</h2>
      <p>Mark is committed to encouraging participation in the arts as an aid to recovery and increased wellbeing. It is not necessary to have artistic skill in order to experience the health and creative benefits of self-expression with the support of an experienced and trained therapist.</p>
      <p>A quote from the British Association of Art Therapists gives an excellent description.</p>
      <blockquote>Sometimes words cannot be used or found to describe thoughts and feelings but the process involved in image-making, and the images themselves can help to do so. Sometimes there are just too many words – and they get in the way of being able to be in touch with emotions. These are some of the reasons for the ‘Art' in art therapy.</blockquote>
    </div>
  </Page>
);

export default AboutPage;

export const pageQuery = graphql`
  query AboutPageImages {
    profileImage: imageSharp(id: { regex: "/profile/" }) {
      fixed(width: 560) {
        ...GatsbyImageSharpFixed
      }
    }
  }
`;
