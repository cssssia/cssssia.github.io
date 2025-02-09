import { useState, useRef, useLayoutEffect } from 'react';
import "./Background.css";
import joystick from "../Photos/joystick.svg";
import oldController from "../Photos/oldController.svg";
import controller from "../Photos/controller.svg";
import code from "../Photos/code.svg";

function Background() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  //1536 730 1536 730

  let pageWidth = document.documentElement.scrollWidth;
  let pageHeight = document.documentElement.scrollHeight;


  setTimeout(() => {

    pageWidth = document.documentElement.scrollWidth;
    pageHeight = document.documentElement.scrollHeight;

    console.log(pageHeight, pageWidth)
  }, 1);



  const imageArray = [joystick, oldController, controller, code];
  const angleRotationArray = [-145, -35, 0, 35, 145, 180];
  const directionRotationArray = ["rotation", "rotationBackwards"];

  function getArrayElement(array) {
    const randomNum = Math.floor(Math.random() * array.length);
    return array[randomNum];
  }

  function getRandomPosition(pageSize) {
    const randomPos = Math.floor(Math.random() * (pageSize / 3));
    const imgPosition = randomPos - pageWidth * 0.1;
    if (imgPosition > 0) return imgPosition;
    else return randomPos;
  }

  function getImagePosition() {
    return {
      position: 'absolute',
      width: pageWidth * 0.05,
      marginLeft: getRandomPosition(pageWidth),
      marginTop: getRandomPosition(pageHeight),
      transform: `rotate(${getArrayElement(angleRotationArray)}deg)`,
    };
  }

  function getSection() {

    const sectionWidth = width / 3;
    const sectionHeight = height / 3;

    let horizontalSections = 3;
    let verticalSections = 3;

    if (pageWidth > width)
    {
      horizontalSections = pageWidth / sectionWidth;
    }

    if (pageHeight > height)
    {
      verticalSections = pageHeight / sectionHeight;
    }

    return console.log(horizontalSections, verticalSections)
  }

  return (
    <div id="background" className="backgroundContainer">
      {console.log(width, height, pageWidth, pageHeight)}
      <div className="column">
        <div id="section" className="section">
        <div style={getImagePosition()}>
            <div className="scale">
            <img src={getArrayElement(imageArray)} className={getArrayElement(directionRotationArray)} draggable="false"/>
            </div>
          </div>
        </div>
        <div className="section">
        <div style={getImagePosition()}>
            <div className="scale">
            <img src={getArrayElement(imageArray)} className={getArrayElement(directionRotationArray)} draggable="false"/>
            </div>
          </div>
        </div>
        <div className="section">
          <div style={getImagePosition()}>
            <div className="scale">
            <img src={getArrayElement(imageArray)} className={getArrayElement(directionRotationArray)} draggable="false"/>
            </div>
          </div>
        </div>
      </div>
      <div className="column">
        <div id="section" className="section">
        <div style={getImagePosition()}>
            <div className="scale">
            <img src={getArrayElement(imageArray)} className={getArrayElement(directionRotationArray)} draggable="false"/>
            </div>
          </div>
        </div>
        <div className="section">
        <div style={getImagePosition()}>
            <div className="scale">
            <img src={getArrayElement(imageArray)} className={getArrayElement(directionRotationArray)} draggable="false"/>
            </div>
          </div>
        </div>
        <div className="section">
        <div style={getImagePosition()}>
            <div className="scale">
            <img src={getArrayElement(imageArray)} className={getArrayElement(directionRotationArray)} draggable="false"/>
            </div>
          </div>
        </div>
      </div>
      <div className="column">
        <div id="section" className="section">
        <div style={getImagePosition()}>
            <div className="scale">
            <img src={getArrayElement(imageArray)} className={getArrayElement(directionRotationArray)} draggable="false"/>
            </div>
          </div>
        </div>
        <div className="section">
        <div style={getImagePosition()}>
            <div className="scale">
            <img src={getArrayElement(imageArray)} className={getArrayElement(directionRotationArray)} draggable="false"/>
            </div>
          </div>
        </div>
        <div className="section">
        <div style={getImagePosition()}>
            <div className="scale">
            <img src={getArrayElement(imageArray)} className={getArrayElement(directionRotationArray)} draggable="false"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Background;
