/**
 * NotFoundPage
 *
 * This is the page we show when the user visits a url that doesn't have a route
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

const emojis = [
  '🤷',
  '🤷‍♂️',
  '🙄',
  '☹',
  '🙀',
  '😳',
  '👀',
  '🙅',
  '🧟',
  '🙆',
  '🤦',
  '🙅‍♂️',
  '🙆‍♂️',
  '🤦‍♂️',
  '🧤',
  '🛑',
  '🚧',
  '🚨',
  '⚰',
  '🚫',
  '⛔',
  '⚠',
  '❌',
  '✖',
  '❎',
  '‼',
  '⁉',
  '❓',
  '❔',
  '❕',
  '❗',
  '☢',
];

export default class NotFound extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    const emoji = convertToEmoji(emojis[Math.floor(Math.random() * emojis.length)]);
    return (
      <FadeInDiv>
        <div className="center">
          <h1>404</h1>
          <br /><span dangerouslySetInnerHTML={{ __html: emoji }} ></span>
        </div>
      </FadeInDiv>
    );
  }
}
