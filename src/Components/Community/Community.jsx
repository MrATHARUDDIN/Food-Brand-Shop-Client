import React, { useState, useEffect, useContext } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from './../../authentication/Private';

const Community = () => {
    
    const { user } = useContext(AuthContext);

    const [comment, setComment] = useState('');
    const [category, setCategory] = useState('General');
    const [productOptions, setProductOptions] = useState([]); // State to store product options
    const [Post, setPost] = useState([]); // State to store product options

    const username = user?.displayName;

    useEffect(() => {
        // Fetch product options when the component mounts
        fetch('https://server-side-three-mauve.vercel.app/product')
            .then(response => response.json())
            .then(data => setProductOptions(data))
            .catch(error => console.error('Error fetching product options:', error));
    }, []);

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        const postData = {
            comment,
            category,
            username,
        };

        try {
            const response = await fetch('https://server-side-three-mauve.vercel.app/Posts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(postData),
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log('Response from server:', responseData);
                setComment('');
                setCategory('');
                Swal.fire({
                    title: 'Success!',
                    text: 'Post Successfull',
                    icon: 'success',
                    confirmButtonText: 'Close',
                  });
                  e.target = ""
                if(response.acknowledged == true){
                    Swal.fire({
                        title: 'Success!',
                        text: 'Post Successfull',
                        icon: 'success',
                        confirmButtonText: 'Close',
                      });
                }
            } else {
                console.error('Failed to make the POST request.');

                // Show SweetAlert when the POST request fails
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Failed to make the POST request!',
                });
            }
        } catch (error) {
            console.error('Error making the POST request:', error);
        }
    };

    useEffect(() => {
        // Fetch product options when the component mounts
        fetch('https://server-side-three-mauve.vercel.app/Posts')
            .then(response => response.json())
            .then(data => setPost(data))
            .catch(error => console.error('Error fetching product options:', error));
    }, []);

    return (
        <div>
            <h1 className="mt-10 mb-20 font-bold text-3xl text-center">Post to the Community</h1>
            <div className='grid justify-center'>
                <form onSubmit={handleFormSubmit}>
                    <div className="form-control mt-4">
                        <label className="label">
                            <span className="label-text font-medium text-lg">Product</span>
                        </label>
                        <label className="select">
                            <select
                                value={category}
                                onChange={(e) => setCategory(e.target.value)}
                                className="select-bordered w-96"
                            >
                                {/* Map over the productOptions array to create dynamic options */}
                                {productOptions.map(option => (
                                    <option key={option.id} value={option.value}>
                                        {option.name}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium text-lg">Comment</span>
                        </label>
                        <label className="input-group">
                            <textarea
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                type="text"
                                placeholder="Your Comment"
                                className="input input-bordered h-32 w-96"
                                name="Comment"
                                required
                            />
                        </label>
                    </div>
                    <input
                        type="submit"
                        value="Post"
                        className="p-3 rounded-xl hover:bg-[#d3d0fe]  bg-[#9ce4ff] w-52 mt-12"
                    />
                </form>
            </div>
            <hr className="h-2 mt-5" />
            <div>
                {/* Display posts as comments */}
                {Post.map((post) => (
                    <div key={post.id} className="mt-4 border w-96 h-auto bg-gray-300 p-4">
                        <p className="text-lg font-bold text-left">{post.username} --- {post.category}</p>
                        <p className="text-gray-600 font-semibold">Comment :- {post.comment}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Community;
