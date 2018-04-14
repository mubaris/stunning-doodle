/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import styled, { keyframes } from 'styled-components';
import { fadeIn } from 'react-animations';

import convertToEmoji from '../../utils/emoji';

const animation = keyframes`${fadeIn}`;

const FadeInDiv = styled.div`
  animation: 5s ${animation};
`;

const Name = styled.span`
  color: #f35626;
  font-size: 125%;
  background-image: -webkit-linear-gradient(135deg, #DFEC51 0%,#73AA0A 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: hue 10s infinite linear;
  :hover {
    -webkit-animation: hue 2.5s infinite linear;
    font-size: 126%;
  }
  @-webkit-keyframes hue {
    from {
      -webkit-filter: hue-rotate(0deg);
    }

    to {
      -webkit-filter: hue-rotate(-360deg);
    }
  }
`;

export default class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    const title = convertToEmoji('Hi 👋');
    const laptop = convertToEmoji(' 👨‍💻');
    const react = convertToEmoji(' ⚛ ');
    const github = convertToEmoji(' 🐙 ');
    const sorry = convertToEmoji(' 🙇 ');
    const explore = convertToEmoji(' 🕵 ');
    const rocket = convertToEmoji(' 🚀 ');
    const resume = convertToEmoji(' 📄 ');
    const fire = convertToEmoji(' 🔥');
    const mail = convertToEmoji(' 💌 ');
    const thanks = convertToEmoji(' 🙏');
    return (
      <FadeInDiv>
        <div className="container">
          <div className="columns is-mobile">
            <div className="column is-three-fifths-desktop">
              <p dangerouslySetInnerHTML={{ __html: title }} />
              <p>My name is <Name>Mubaris NK.</Name> I&apos;m a Full Stack Developer
                <span dangerouslySetInnerHTML={{ __html: laptop }} ></span> from
                <a
                  className="third after"
                  href="https://en.wikipedia.org/wiki/Kerala"
                  target="_blank"
                > Kerala.</a>
              </p>
              <p>
                I work on various technologies. My favorite technologies are React
                <span dangerouslySetInnerHTML={{ __html: react }} ></span>
                Django and Golang.
              </p>
              <p>
                Most of my codes are available on
                <a
                  className="third after"
                  href="https://github.com/mubaris"
                  target="_blank"
                > GitHub
                <span dangerouslySetInnerHTML={{ __html: github }} ></span>
                </a>
                I used to maintain a <a
                  className="third after"
                  href="https://blog.mubaris.com"
                  target="_blank"
                >
                Machine Learning Blog.
                </a> Now I don&apos;t write over there. Sorry
                <span dangerouslySetInnerHTML={{ __html: sorry }} ></span>
              </p>
              <p>
                When I&apos;m excited I build amazing stuff. You can explore
                some of the things I built in the past
                <span dangerouslySetInnerHTML={{ __html: explore }} ></span>
                Just follow <a href="projects">this link</a>
              </p>
              <p>
                I stay close to the community and try to keep tabs with the pace
                at which the tech space is evolving.
                <span dangerouslySetInnerHTML={{ __html: rocket }} ></span>
                The best way to contact me
                is <a
                  className="third after"
                  href="https://twitter.com/Mubaris_NK"
                  target="_blank"
                >
                Twitter</a>
              </p>
              <p>
                Further you can visit my
                <a
                  className="third after"
                  href="https://linkedin.com/in/mubaris-nk"
                  target="_blank"
                > LinkedIn
                </a>
                {' '}profile. Or shoot me a cool
                <a
                  className="third after"
                  href="mailto:mubarishassannk@gmail.com?Subject%3DHi"
                > Email
                </a>
                <span dangerouslySetInnerHTML={{ __html: mail }} ></span>
              </p>
              <p>
                My interests are Open Source, Web Applications, Front-End Frameworks,
                Machine Learning, Data Analytics, Microservices and Emojis
                <span dangerouslySetInnerHTML={{ __html: fire }} ></span>
              </p>
              <p>
                I&apos;m looking for opportunities in Web Development.
                Check out my resume
                <span dangerouslySetInnerHTML={{ __html: resume }} ></span>
                <a
                  className="third after"
                  href="https://mubaris.com/CV.pdf"
                  target="_blank"
                >
                here
                </a>
              </p>
              <p>
                <br />
                Thanks for stopping by!
                <span dangerouslySetInnerHTML={{ __html: thanks }} ></span>
              </p>
              <p>
                <br />
                Mubaris NK<br />
                <a
                  className="third after"
                  href="mailto:mubarishassannk@gmail.com?Subject%3DHi"
                >
                  mubarishassannk@gmail.com
                </a><br />
                <a
                  className="third after"
                  href="https://twitter.com/Mubaris_NK"
                  target="_blank"
                >
                  @Mubaris_NK
                </a>
              </p>
              <p>
                <br />
                <a
                  href="mailto:mubarishassannk@gmail.com?Subject%3DFreelance%2520work"
                >
                  <img
                    src="https://img.shields.io/badge/HIRE%20ME-FOR%20FREELANCE-green.svg?longCache=true&style=for-the-badge"
                    alt="Hire Badge"
                  />
                </a>
              </p>
            </div>
          </div>
        </div>
      </FadeInDiv>
    );
  }
}
