import { useState } from "react";
import Swal from "sweetalert2";

const Cart = ({data}) => {
    const { photo, name, Price, _id } = data;
    const [cartItems, setCartItems] = useState([]);
    const handleDelete = (_id) => {
        Swal.fire({
          title: 'Are you sure?',
          text: "You won't be able to revert this!",
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
          if (result.isConfirmed) {
            fetch(`https://server-side-7l1uxphj9-atharuddins-projects.vercel.app/orders/${_id}`, {
              method: 'DELETE',
            })
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
                setCartItems(cartItems.filter(item => item._id !== _id));
              });
          }
        });
      };
    return (
        <div>
            <div>
            <div>
      <div className="card w-96 hover:shadow-2xl bg-base-200 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={photo} alt="" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title mb-2 mt-1">{name}</h2>
          <p className="font-semibold text-base">Price : {Price}tk</p>
          <div className="card-actions flex gap-5">
          <button className="btn bg-red-500 mt-2 mb-3" onClick={() => handleDelete(_id)}>Delete</button>
          </div>
        </div>
      </div>
    </div>
        </div>
        </div>
    );
};

export default Cart;