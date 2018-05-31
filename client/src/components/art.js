import React from 'react';

import NavBar from './nav';
import LogIn from './login';

import './art.css';


let images = [
  '1178910',
  '1178910',
  '1178910',
  '1178910'
]

const length = images.length;

var lineUp=[];
for (let i=0;i<length;++i) lineUp[i]=i;

function shuffle(array) {
  var tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
}

lineUp = shuffle(lineUp);

function displayA(item, index, className) {
  var elems = document.getElementsByClassName(`${className}`);
  for (var i = 0; i < elems.length; i++) {
    elems[i].style.backgroundImage = `url(https://source.unsplash.com/collection/${images[item]}/1000x1000)`;
  }
  console.log(item);
}

function displayB(item, index, className) {
  var elems = document.getElementsByClassName(`${className}`);
  for (var i = 0; i < elems.length; i++) {
    elems[i].style.backgroundImage = `url(https://source.unsplash.com/collection/${images[item]}/1000x1000)`;
  }
  console.log(item);
}

lineUp.forEach(function(item, index) {
  setTimeout(function() {
    displayA(item, index, 'art');
  }, index * 5000)
});

var lineUpB=[];
for (let i=0;i<length;++i) lineUpB[i]=i;
lineUpB = shuffle(lineUpB);
console.log(lineUp+lineUpB);

lineUpB.forEach(function(item, index) {
  setTimeout(function() {
    displayB(item, index, 'art2');
  }, index * 4000)
});


export default function Art() {
  return (
    <div className="body">

    <div id="art">
      <div className="container container1">
        <div className="art piece1 rotate-scale-up"></div>
      </div>
      <div className="container container2">
        <div className="art piece2 rotate-scale-up"></div>
      </div>
      <div className="container container3">
        <div className="art piece3 rotate-scale-up"></div>
      </div>
      <div className="container container4">
        <div className="art piece4 rotate-scale-up"></div>

      </div>
    </div>


    <div id="art2">
      <div className="container container5">
        <div className="art2 piece5 rotate-scale-up"></div>
      </div>
      <div className="container container6">
        <div className="art2 piece6 rotate-scale-up"></div>
      </div>
      <div className="container container7">
        <div className="art2 piece7 rotate-scale-up"></div>
      </div>
      <div className="container container8">
        <div className="art2 piece8 rotate-scale-up"></div>
      </div>
    </div>
    </div>
  );
}
