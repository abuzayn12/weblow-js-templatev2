import './styles/style.css';
import barba from '@barba/core';
import webgl from './webgl';

barba.init({
    transitions: [{
      name: 'default-transition',
      once() {
        webgl()
      },
      leave() {

      },
      enter() {
        // create your amazing enter animation here
      }
    }]
  });
