

const Showcase = () => {

  function setSheenPosition(xRatio, yRatio, e) {
  // This creates a "distance" up to 400px each direction to offset the sheen
  const xOffset = 1 - (xRatio - 0.5) * 800;
  const yOffset = 1 - (yRatio - 0.5) * 800;
  e.target.style.setProperty('--sheenX', `${xOffset}px`)
  e.target.style.setProperty('--sheenY', `${yOffset}px`)
}

  const handleMouseMove = (e) => {
    const height = window.innerHeight;
    const width = window.innerWidth;
 // Creates angles of (-20, -20) (left, bottom) and (20, 20) (right, top)
 const yAxisDegree = e.pageX / width * 40 - 20;
 const xAxisDegree = e.pageY / height * -1 * 40 + 20;
 e.target.style.transform = `rotateY(${yAxisDegree}deg) rotateX(${xAxisDegree}deg)`;
 // Set the sheen position
 setSheenPosition(e.pageX / width, e.pageY / width, e);
  }

  return(
    <div className="showcase">
      <div className="demo">
        <div className="perspective-container" onMouseMove={handleMouseMove}>
          <div className="card"></div>
        </div>
      </div>
      <div>
        div 2
      </div>
      <div>
        div 3
      </div>
      <div>
        div 4
      </div>
      <div>
        div 5
      </div>
    </div>
  )
}

export default Showcase;
