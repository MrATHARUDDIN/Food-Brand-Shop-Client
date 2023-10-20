import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { useContext } from "react";
import { AuthContext } from "../../authentication/Private";



const Detail = ({ data }) => {
  const { photo, name, Price, _id ,  } = data;
  const {user} = useContext(AuthContext)
  return (
    <div>

       {/* Model */}
       <input type="checkbox" id="my_modal_7" className="modal-toggle" />
<div className="modal">
  <div className="modal-box">
    <h3 className="text-lg font-bold">Please Login</h3>
    <p className="py-4">You can Not Buy Ticket Without Login Please <Link to='/Login' className="text-blue-400">Login</Link> </p>
  </div>
  <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
</div>
    {/* Model */}


    {/* Card */}
      <div className="card w-96 hover:shadow-2xl bg-base-200 shadow-xl">
        <figure className="px-10 pt-10">
          <img src={photo} alt="" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
          <h2 className="card-title mb-2 mt-1">{name}</h2>
          <p className="font-semibold text-base">Price: {Price}tk</p>
          <div className="card-actions flex gap-5">
            { 
            user ?
<>
            <Link to={`/view/${_id}`}>
              <button className="btn btn-primary mt-2 mb-3">View Details</button>
            </Link>
            <Link to={`/update/${_id}`}>
              <button className="btn btn-success mt-2 mb-3">Update</button>
            </Link>

</>
            :

            <>
            <label htmlFor="my_modal_7"className="btn btn-primary mt-2 mb-3">View Details</label>
            <label htmlFor="my_modal_7"className="btn btn-success mt-2 mb-3">Update</label>
            </>

        }
          </div>
        </div>
      </div>
    </div>
  );
};

Detail.propTypes = {
  data: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    Price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Detail;
