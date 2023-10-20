import { useLoaderData } from "react-router-dom";
import Cart from "./Cart";

const Myorder = () => {
    const data = useLoaderData();
    return (
        <div className="grid lg:grid-cols-3 lg:ml-2 md:ml-5 ml-32 md:grid-cols-2 grid-cols-1 md:gap-10 lg:gap-12 gap-20  mt-20  ">
        {
            data.map(data => <Cart key={data._id} data={data}></Cart>)
        }
        </div>
    );
};

export default Myorder;