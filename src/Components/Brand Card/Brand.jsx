import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Brand = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('Brand.json')
            .then((response) => response.json())
            .then((jsonData) => {
                setData(jsonData);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <div>
            <div className='grid grid-cols-1 lg:ml-1 md:ml-10 ml-40 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {data.map((brand) => (
                    <Link to={`/Brand/${brand.brand_name}`} key={brand.id}>
                        <div className="card w-72 h-72 bg-base-100 shadow-lg  hover:shadow-2xl hover:bg-base-200">
        <figure className="px-10 pt-10">
          <img src={brand.image} alt={brand.brand_name} className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title">{brand.brand_name}</h2>
        </div>
      </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Brand;
