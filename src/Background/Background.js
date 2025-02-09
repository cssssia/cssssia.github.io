import { useState, useEffect } from "react";
import "./Background.css";
import joystick from "../Photos/joystick.svg";
import oldController from "../Photos/oldController.svg";
import controller from "../Photos/controller.svg";
import code from "../Photos/code.svg";

export const useWindowSize = () => {
  const [pageWidth, setWidth] = useState(0);
  const [pageHeight, setHeight] = useState(0);

    useEffect(() => {
      const handleResize = () => {
        setWidth(document.getElementById("content").scrollWidth)
        setHeight(document.getElementById("content").scrollHeight);
      };

      handleResize();

      window.addEventListener("resize", handleResize);

      const observer = new MutationObserver(handleResize);

      observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true,
      });

      return () => {
        window.removeEventListener("resize", handleResize);
        observer.disconnect();
      };
      // }
    }, []);

    return { pageWidth, pageHeight };
};

function Background() {
  let width = window.innerWidth;
  let height = window.innerHeight;

  //1536 730 1536 730

  // let pageWidth = document.documentElement.scrollWidth;
  // let pageHeight = document.documentElement.scrollHeight;

  const imageArray = [joystick, oldController, controller, code];
  const angleRotationArray = [-145, -35, 0, 35, 145, 180];
  const directionRotationArray = ["rotation", "rotationBackwards"];

  function getArrayElement(array) {
    const randomNum = Math.floor(Math.random() * array.length);
    return array[randomNum];
  }

  function getRandomPosition(pageSize) {
    const randomPos = Math.floor(Math.random() * (pageSize / 3));
    const imgPosition = randomPos - (width * 0.05 * 2);
    if (imgPosition > 0) return imgPosition;
    else return randomPos;
  }

  function getImagePosition() {
    return {
      position: "absolute",
      width: width * 0.05,
      marginLeft: getRandomPosition(width),
      marginTop: getRandomPosition(height),
      transform: `rotate(${getArrayElement(angleRotationArray)}deg)`,
    };
  }

  function getSection() {
    return (
      <div id="section" style={{height: height / 3}}>
        <div style={getImagePosition()}>
          <div className="scale">
            <img
              src={getArrayElement(imageArray)}
              className={getArrayElement(directionRotationArray)}
              draggable="false"
            />
          </div>
        </div>
      </div>
    )
  }

  function useSection() {
    const sectionWidth = width / 3;
    const sectionHeight = height / 3;

    let horizontalSections = 3;
    let verticalSections = 3;

    const pageSize = useWindowSize();

    if (pageSize.pageWidth > width) {
      horizontalSections = Math.floor(pageSize.pageWidth / sectionWidth);
    }
    else {
      horizontalSections = Math.floor(width / sectionWidth);
    }

    if (pageSize.pageHeight > height) {
      verticalSections = Math.floor(pageSize.pageHeight / sectionHeight);
    }
    else {
      verticalSections = Math.floor(height / sectionHeight);
    }

    let sections = [];

    for (let i = 0; i < verticalSections; i++)
    {
      sections.push(getSection())
    }

    return sections;
  }

  return (
    <div id="background" className="backgroundContainer">
      <div style={{width: width / 3}}>
        {useSection()}
      </div>
      <div style={{width: width / 3}}>
        {useSection()}
      </div>
      <div style={{width: width / 3}}>
        {useSection()}
      </div>
    </div>
  );
}

export default Background;
