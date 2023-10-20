import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Views = () => {
    const lodardata = useLoaderData();

    // Create a copy of lodardata without the 'id' property
    const lodardataWithoutId = { ...lodardata };
    delete lodardataWithoutId._id;

    const handleBuyClick = () => {
        fetch(`https://server-side-7l1uxphj9-atharuddins-projects.vercel.app/orders`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(lodardataWithoutId)
        })
        .then(response => response.json())
        .then(Data => {
            console.log(Data);
            showSuccessMessage();
        })
        .catch(error => {
            console.error('Error:', error)
        });
    }

    const showSuccessMessage = () => {
        Swal.fire({
            title: 'Success!',
            text: 'Product Added Successfully',
            icon: 'success',
            confirmButtonText: 'Close'
        });
    }
    return (
        <div>
            <div>
                <div className="hero p-20 min-h-screen bg-base-300">
                    <div className="hero-content flex-col lg:flex-row gap-44">
                        <img src={lodardata.photo} className="max-w-sm rounded-lg shadow-2xl" alt="Product" />
                        <div>
                            <h1 className="text-5xl font-bold">{lodardata.name}</h1>
                            <p className="mt-5 mb-3 text-2xl ">{lodardata.description}</p>
                            <p className="mb-3 mt-2 text-xl font-semibold">Rating : {lodardata.Rating}</p>
                            <p className="mb-3 mt-2 text-2xl font-bold">Price : {lodardata.Price}tk</p>
                            <button className="btn mt-8 btn-primary" onClick={handleBuyClick}>Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Views;
