import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';

import { useState, useEffect } from 'react';

import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";

const Showcase = () => {


  const [showCaseArr, setShowCaseArr] = useState([
    {
      title: "Overwatch POTG clips sharing",
      feature1: "Log in/register using Firebase authentication",
      feature2: "Read/Write data to/from Firebase Firestore database",
      feature3: "Search feature, comment section and ability to like clips",
      feature4: "Logged in user can upload own clips",
      url: "https://longmann94.github.io/video-streaming/",
      repoUrl: "https://github.com/Longmann94/video-streaming",
      imgUrl: "./images/ow-potg-website.png",
    },
    {
      title: "Hidden Objects mini game",
      feature1: "User click on image to find object",
      feature2: "Objects discovered will disappear",
      feature3: "Timer to record time until all objects are found",
      feature4: `A scoreboard that records the last ten player's time using Firebase Firestore`,
      url: "https://longmann94.github.io/hidden-object-game/",
      repoUrl: "https://github.com/Longmann94/hidden-object-game",
      imgUrl: "./images/hiddenObjectgame.png",
    },
    {
      title: "An online store",
      feature1: "User can add items to cart",
      feature2: "Search feature for items",
      feature3:
        "Cart page allow user to adjust quantity and update total costs",
      feature4: `Each item has its own preview page`,
      url: "https://longmann94.github.io/shopping-cart/",
      repoUrl: "https://github.com/Longmann94/shopping-cart",
      imgUrl: "./images/onlineStore.png",
    },
    {
      title: "Some of the stuff I did for Stelle",
      feature1: "Responsive Components",
      feature2: "Collaboration with backend developer",
      feature3:
        "Looks great on any device",
      feature4: `Animations to keep users engaged`,
      url: "https://www.stelle.au/app/longtest/home.php",
      repoUrl: "n/a",
      imgUrl: "./images/stelle_webpage.png",
    },
  ]);

  const [[showcase, direction], setShowcase] = useState([0, 0]);

  function setSheenPosition(xRatio, yRatio, e) {
    const xOffset = 1 - (xRatio - 0.5) * 800;
    const yOffset = 1 - (yRatio - 0.5) * 800;
    e.target.style.setProperty('--sheenX', `${xOffset}px`);
    e.target.style.setProperty('--sheenY', `${yOffset}px`);
}

  const handleMouseMove = (e) => {
    const height = window.innerHeight;
    const width = window.innerWidth;
    const yAxisDegree = e.pageX / width * 40 - 20;
    const xAxisDegree = e.pageY / height * -1 * 40 + 20;
    e.target.style.transform = `rotateY(${yAxisDegree/5}deg) rotateX(${xAxisDegree/5}deg)`;
    setSheenPosition(e.pageX / width, e.pageY / width, e);
  }

  const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    y: 0,
    opacity: 1
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    };
  }
};

const showcaseIndex = wrap(0, showCaseArr.length, showcase);

const cycleShowcase = (newDirection: number) => {
    setShowcase([showcase + newDirection, newDirection]);
  };

  return(
    <motion.div className="showcase"
      initial={{
        opacity: 0.25,
        y: '100%'
      }}
      animate={{
        opacity: 1,
        y: '0%'
      }}
      transition={{duration: 0.5, ease: 'easeOut'}}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={showcase}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 20 },
            opacity: { duration: 0.2 }
          }}
        className="showcase-main-area">
          <div className="showcase-top-area">
            <div className="showcase-title"><b>{showCaseArr[showcaseIndex].title}</b></div>
            <div className="showcase-title-links">
              <Link href={showCaseArr[showcaseIndex].url} target="_blank" rel="noopener noreferrer" underline="hover">
                Go to website
              </Link>
              <Link href={showCaseArr[showcaseIndex].repoUrl} target="_blank" rel="noopener noreferrer" underline="hover">
                Go to Repo
              </Link>
            </div>
          </div>

          <div className="perspective-container" onMouseMove={handleMouseMove}>
            <div className="card" style={{backgroundImage: `url(${showCaseArr[showcaseIndex].imgUrl})`}}></div>
            <div className="feature-container1 animate-me">
              {showCaseArr[showcaseIndex].feature1}
            </div>
            <div className="feature-container2">
              {showCaseArr[showcaseIndex].feature2}
            </div>
            <div className="feature-container3">
              {showCaseArr[showcaseIndex].feature3}
            </div>
            <div className="feature-container4">
              {showCaseArr[showcaseIndex].feature4}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
      <IconButton sx={{ position: 'absolute', top: '50%', right: '0' }} onClick={() => cycleShowcase(1)}>
        <ArrowForwardIosIcon fontSize='large' color='primary' />
      </IconButton>
      <IconButton sx={{ position: 'absolute', top: '50%', left: '0' }} onClick={() => cycleShowcase(-1)}>
        <ArrowBackIosIcon fontSize='large' color='primary' />
      </IconButton>
    </motion.div>
  )
}

export default Showcase;
