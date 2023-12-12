import React, { useState } from 'react';

const Community = () => {
    const [comment, setComment] = useState('');
    const [category, setCategory] = useState('General'); // Default category

    const handleFormSubmit = (e) => {
        e.preventDefault();

        console.log('Comment:', comment);
        console.log('Category:', category);
    };

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
                                <option value="General">General</option>
                                <option value="Announcement">Announcement</option>
                                <option value="Question">Question</option>
                                {/* Add more options as needed */}
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
        </div>
    );
};

export default Community;
