import { Link } from 'react-router-dom';
import pic from '../../assets/delivery10_generated.jpg'
const Extrapage = () => {

    return (
        <div className="mt-32 mb-32">
             <h1 className='text-3xl font-bold mt-10 mb-5'>Order Now</h1>
            <Link to='/Service'>
            <div>
            <img src={pic} alt="" className='hover:border-red-100  hover:shadow-2xl ' />
            </div>
            <button className='btn bg-red-300 relative lg:bottom-[7rem] md:bottom-20 bottom-20 right-40 md:right-64 lg:right-[30rem]'>Shop Now</button>
            </Link>
        </div>
    );
};

export default Extrapage;
