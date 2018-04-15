import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    overflow-x: unset;
    overflow-y: unset;
    background: #141411;
    color: #ffffff;
    line-height: 2.4em;
    cursor: unset;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background: #141411;
    color: #ffffff;
    min-height: 100%;
    min-width: 100%;
    font-size: 150%;
  }

  p,
  label {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    margin-bottom: 2.7%;
  }
  a,a:visited,a:hover,a:active{
    -webkit-backface-visibility:hidden;
            backface-visibility:hidden;
    position:relative;
    transition:0.5s color ease;
    text-decoration:none;
    color:#81b3d2;
  }
  a:hover{
    color:#d73444;
  }
  a.before:before,a.after:after{
    content: "";
    transition:0.5s all ease;
    -webkit-backface-visibility:hidden;
            backface-visibility:hidden;
    position:absolute;
  }
  a.before:before{
    top:-0.25em;
  }
  a.after:after{
    bottom:-0.25em;
  }
  a.before:before,a.after:after{
    height:5px;
    height:0.35rem;
    width:0;
    background:#d73444;
  }
  a.first:after{
    left:0;
  }
  a.second:after{
    right:0;
  }
  a.third:after,a.sixth:before,a.sixth:after{
    left:50%;
    -webkit-transform:translateX(-50%);
            transform:translateX(-50%);
  }
  a.fourth:before,a.fourth:after{
    left:0;
  }
  a.fifth:before,a.fifth:after{
    right:0;
  }
  a.seventh:before{
    right:0;
  }
  a.seventh:after{
    left:0;
  }
  a.eigth:before{
    left:0;
  }
  a.eigth:after{
    right:0;
  }
  a.before:hover:before,a.after:hover:after{
    width:100%;
  }
  .navbar-item:hover {
    background: #4a4a4a;
  }
  .navbar-item.active {
    background: #ff00ff;
  }
  .navbar-item {
    cursor: pointer;
  }
  .navbar-item a {
    color: #ffffff;
  }
  .section {
    width: 100%;
    height: 100%;
  }
  .center {
    font-size: 200%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1 {
      font-size: 200%;
    }
    > * {
      font-size: 200%;
    }
  }
`;
