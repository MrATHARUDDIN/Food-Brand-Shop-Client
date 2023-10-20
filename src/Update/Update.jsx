import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const Update = () => {
    const Updatedata = useLoaderData();
    const { _id, name, Brandname, description, Rating, Price, type, photo } = Updatedata;
    
    const handleFormSubmit = (e) => {
      e.preventDefault();
      const form = e.target;
  
      const name = form.name.value;
      const Brandname = form.Brandname.value;
      const description = form.description.value;
      const Price = parseInt(form.Price.value);
      const Rating = form.Rating.value;
      const type = form.type.value;
      const photo = form.photo.value;
      const UpdateProduct = { name, Brandname, description, Rating, Price, type, photo };
  
      fetch(`https://server-side-7l1uxphj9-atharuddins-projects.vercel.app/products/${_id}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(UpdateProduct),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.modifiedCount > 0) {
            Swal.fire({
              title: 'Success!',
              text: 'Coffee Updated Successfully',
              icon: 'success',
              confirmButtonText: 'Close',
            });
          }
        })
        .catch((error) => {
          console.error(error);
        });
    };
    return (
        <div>
        <div>
<div className="bg-[#aebef1] w-9/11 h-3/4 mt-20 p-20">
    <h1 className="font-bold mb-10 text-center text-4xl">Update Product</h1>
  <form onSubmit={handleFormSubmit}>
    <section className="grid grid-cols-2 gap-10">
      <div className="form-control">
        <label className="label">
          <span className="label-text font-medium text-lg">Name</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            placeholder="Product Name"
            className="input input-bordered w-96"
            name="name"
            defaultValue={name}
            required
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text font-medium text-lg">Brand Name</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            placeholder="Brand Name"
            className="input input-bordered w-96"
            name="Brandname"
            defaultValue={Brandname}
            required
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text font-medium text-lg">Short description</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            placeholder="Short description"
            className="input input-bordered w-96"
            name="description"
            defaultValue={description}
            required
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text font-medium text-lg">Rating</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            placeholder="?/10"
            className="input input-bordered w-96"
            name="Rating"
            defaultValue={Rating}
            required
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text font-medium text-lg">Price</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            placeholder="Price"
            className="input input-bordered w-96"
            name="Price"
            defaultValue={Price}
            required
           
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text font-medium text-lg">Type</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            placeholder="Pizza , Burger , Roll etc."
            className="input input-bordered w-96"
            name="type"
            defaultValue={type}
            required
          />
        </label>
      </div>
      <div className="form-control">
        <label className="label">
          <span className="label-text font-medium text-lg">Photo</span>
        </label>
        <label className="input-group">
          <input
            type="text"
            placeholder="Photo Url"
            className="input input-bordered w-96"
            name="photo"
            defaultValue={photo}
            required
          />
        </label>
      </div>
    </section>
    <input
        type="submit"
        value="Update Product"
        className="p-3 rounded-xl hover:bg-[#d3d0fe]  bg-[#9ce4ff] w-52 mt-12 "
      />
  </form>
</div>
    </div>
    </div>
    );
  };
  
  export default Update;
  