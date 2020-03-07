<h1 align="center">
  🔉 React Drum Machine
  <br>
</h1>

<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/davigl/drum-machine.svg">

  <img alt="Github Stars" src="https://img.shields.io/github/stars/Davigl/drum-machine?color=orange">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/Davigl/drum-machine?color=blueviolet">

  <a href="https://github.com/Davigl/drum-machine/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/Davigl/drum-machine?color=ff69b4">
  </a>
  
  <a href="https://github.com/Davigl/drum-machine/stargazers">
    <img alt="GitHub last commit" src="https://img.shields.io/github/stars/Davigl/drum-machine?color=9cf">
  </a>

  <a href="https://github.com/Davigl/drum-machine/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/Davigl/drum-machine?color=yellow">
  </a>
</p>

<p align="center">
  <a href="#thinking-about">About</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#ok_woman-user-stories">Stories</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>
</p>

***

## :thinking: About

Drum Machine project, where you can click in the buttons or press keyboard a key and it will play a drum unique sound. Visit the project by clicking [here](http://eudavi-drum-machine.netlify.com/). (Retro style)

<div align="center">

![](https://i.imgur.com/rcSVBW4.gif)

*Drum Machine*

</div>

## :ok_woman: User Stories 

- [x] <strong>User Story #1:</strong> I should be able to see an outer container with a corresponding <code>id="drum-machine"</code> that contains all other elements.   
- [x] <strong>User Story #2:</strong> Within <code>#drum-machine</code> I can see an element with a corresponding <code>id="display"</code>.   
- [x] <strong>User Story #3:</strong> Within <code>#drum-machine</code> I can see 9 clickable drum pad elements, each with a class name of <code>drum-pad</code>, a unique id that describes the audio clip the drum pad will be set up to trigger, and an inner text that corresponds to one of the following keys on the keyboard: Q, W, E, A, S, D, Z, X, C. The drum pads MUST be in this order.   
- [x] <strong>User Story #4:</strong> Within each <code>.drum-pad</code>, there should be an HTML5 <code>audio</code> element which has a <code>src</code> attribute pointing to an audio clip, a class name of <code>clip</code>, and an id corresponding to the inner text of its parent <code>.drum-pad</code> (e.g. <code>id="Q"</code>, <code>id="W"</code>, <code>id="E"</code> etc.).   
- [x] <strong>User Story #5:</strong> When I click on a <code>.drum-pad</code> element, the audio clip contained in its child <code>audio</code> element should be triggered.   
- [x] <strong>User Story #6:</strong> When I press the trigger key associated with each <code>.drum-pad</code>, the audio clip contained in its child <code>audio</code> element should be triggered (e.g. pressing the Q key should trigger the drum pad which contains the string "Q", pressing the W key should trigger the drum pad which contains the string "W", etc.).   
- [x] <strong>User Story #7:</strong> When a <code>.drum-pad</code> is triggered, a string describing the associated audio clip is displayed as the inner text of the <code>#display</code> element (each string must be unique).   

## :memo: License

Copyright © 2020, [Davi Guimarães](https://github.com/davigl).
