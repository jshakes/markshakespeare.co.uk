import React from 'react';
import Page from '../components/Page';

const AboutPage = props => {
  console.log(props);
  return (
    <Page title="About">
      <p>Mark studied Fine Art at Sheffield University before going on to train as an art therapist in 1985. He has since worked in the NHS providing an art therapy service for people with learning disabilities in Surrey. He retired from his role as Lead Consultant Art Therapist with Surrey & Borders Partnership NHS FT in 2015.</p>
      <p>Mark now works as a freelance art therapist running workshops for groups as well as individual sessions. He is registered with the <a href="http://www.hcpc-uk.org/" target="_blank" title="Health & Care Professions Council website">Health & Care Professions Council (HCPC)</a> and is a member of the <a href="http://www.baat.org/" target="_blank" title="British Association of Art Therapists website">British Association of Art Therapists (BAAT)</a>.</p>
      <h2>What I do</h2>
      <p>Mark is committed to encouraging participation in the arts as an aid to recovery and increased wellbeing. It is not necessary to have artistic skill in order to experience the health and creative benefits of self-expression with the support of an experienced and trained therapist.</p>
      <p>A quote from the British Association of Art Therapists gives an excellent description.</p>
      <blockquote>Sometimes words cannot be used or found to describe thoughts and feelings but the process involved in image-making, and the images themselves can help to do so. Sometimes there are just too many words – and they get in the way of being able to be in touch with emotions. These are some of the reasons for the ‘Art' in art therapy.</blockquote>
    </Page>
  );  
};

exports.data = {
  title: 'HERE IS THE PAGE TITLE'
};

export default AboutPage;
