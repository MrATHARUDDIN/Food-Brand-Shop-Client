import { Link } from 'react-router-dom';
import pic from '../../assets/Logo.png'
import pic2 from '../../assets/2111.w023.n001.1393B.p1.1393.jpg'
const Shop = () => {
    return (
        <div>
            <div className="hero min-h-screen mt-20 mb-20 bg-gray-200">
  <div className="hero-content text-center">
    <div className="max-w-md ml-10">
      <img src={pic} alt="" />
      <p className="py-6 text-xl">If you wnat to Know more about Us just visite the About Us page</p>
      <Link to={`/about`}>
      <button className="btn btn-primary">View About Us</button>
      </Link>
    </div>
    <div className='ml-10'>
    <img src={pic2} alt=""  className='w-80 ml-20'/>
    <h1 className="py-6 text-xl"> Also You can Visite Our Service By Click the Service button</h1>
    <Link to={`/Service`}>
      <button className="btn btn-primary">Service</button>
      </Link>
    </div>
  </div>
</div>
</div>
    );
};
export default Shop;