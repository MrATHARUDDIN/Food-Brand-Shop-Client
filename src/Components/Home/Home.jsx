import Brand from "../Brand Card/Brand";
import Slider from "../Slider/Slider";
import Extrapage from "./Extrapage";
import Shop from "./Shop";

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <h1 className='mt-10 mb-20 text-center font-semibold text-3xl'>Popular Food Brands</h1>
            <Brand></Brand>
            <Extrapage></Extrapage>
            <Shop></Shop>
        </div>
    );
};

export default Home;