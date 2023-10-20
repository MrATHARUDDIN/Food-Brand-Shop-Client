const SliderHero = ({ data }) => {
    const firstItem = data[0];
    const secondItem = data[1];
    const thirdItem = data[2];

    return (
        <div>
             <div>
             <div className="carousel w-11/12 h-96 mt-32 mb-5 ">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={firstItem.Bannerone} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src={secondItem.Bannertwo} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src={thirdItem.Bannerthree} className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div> 
</div>            
        </div>
        </div>
    );
};

export default SliderHero;
