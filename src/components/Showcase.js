import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import IconButton from '@mui/material/IconButton';

const Showcase = ({ showCaseArr }) => {

  function setSheenPosition(xRatio, yRatio, e) {
    const xOffset = 1 - (xRatio - 0.5) * 800;
    const yOffset = 1 - (yRatio - 0.5) * 800;
    e.target.style.setProperty('--sheenX', `${xOffset}px`)
    e.target.style.setProperty('--sheenY', `${yOffset}px`)
}

  const handleMouseMove = (e) => {
    const height = window.innerHeight;
    const width = window.innerWidth;
    const yAxisDegree = e.pageX / width * 40 - 20;
    const xAxisDegree = e.pageY / height * -1 * 40 + 20;
    e.target.style.transform = `rotateY(${yAxisDegree/5}deg) rotateX(${xAxisDegree/5}deg)`;
    setSheenPosition(e.pageX / width, e.pageY / width, e);
  }

  const handleClick = () => {
    console.log('i got clicked');
  }

  <div className="showcase-main-area">
    <div className="showcase-title">Showcase Title!</div>
    <div className="perspective-container" onMouseMove={handleMouseMove}>
      <div className="card" style={{backgroundImage: 'url(/images/ow-potg-website.png)'}}></div>
      <div className="feature-container1 animate-me">
        this will contain information about the first feature.
      </div>
      <div className="feature-container2">
        this will contain information about the 2nd feature.
      </div>
      <div className="feature-container3">
        this will contain information about the 3rd feature.
      </div>
      <div className="feature-container4">
        this will contain information about the 4th feature.
      </div>
    </div>
  </div>

  return(
    <div className="showcase">
      {
        showCaseArr.map((showcase) => {

          return <div className="showcase-main-area" key={showcase.title}>
            <div className="showcase-title">{showcase.title}</div>
            <div className="perspective-container" onMouseMove={handleMouseMove}>
              <div className="card" style={{backgroundImage: 'url(/images/ow-potg-website.png)'}}></div>
              <div className="feature-container1 animate-me">
                {showcase.feature1}
              </div>
              <div className="feature-container2">
                {showcase.feature2}
              </div>
              <div className="feature-container3">
                {showcase.feature3}
              </div>
              <div className="feature-container4">
                {showcase.feature4}
              </div>
            </div>
          </div>
        })
      }
      <IconButton sx={{ position: 'absolute', top: '50%', right: '0' }} onClick={handleClick}><ArrowForwardIosIcon fontSize='large' color='primary' /></IconButton>
      <IconButton sx={{ position: 'absolute', top: '50%', left: '0' }} onClick={handleClick}><ArrowBackIosIcon fontSize='large' color='primary' /></IconButton>
    </div>
  )
}

export default Showcase;
