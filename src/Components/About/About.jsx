import '../../App.css'

const About = () => {
    return (
        <>
        <div>
        <h2 className="font-bold text-left p-3 text-3xl">About Us</h2>
        <p className="text-left p-3 text-lg">
            At our food and beverage establishment, we take pride in offering an unforgettable dining experience. Whether you're a food enthusiast or just looking for a refreshing drink, you've come to the right place. We are dedicated to creating memorable moments for our customers.
        </p>
        <ul className="text-left p-4 text-lg ">
            <li className="font-bold text-3xl">Our Mission</li>
            <ul className="text-lg custom-bullet mt-4 mb-2 grid gap-1">
                <li >Deliver exceptional cuisine with the finest ingredients.</li>
                <li>Provide a diverse selection of beverages to suit all tastes.</li>
                <li>Ensure a comfortable and welcoming atmosphere for our guests.</li>
            </ul>
            <li className="font-bold text-3xl mb-6 mt-5">Our Story</li>
            <p>
                Founded in 2020, we've been on a culinary journey to satisfy your cravings for delicious food and drinks. Our dedicated team of chefs, bartenders, and staff work tirelessly to make your visit memorable. Over the years, we've grown and expanded, but our commitment to quality remains unchanged.
            </p>
            <li className="font-bold text-3xl mt-4 mb-4">Our Vision</li>
            <p>
                We envision becoming a premier destination for food and beverage enthusiasts, continually innovating and elevating our offerings to exceed your expectations. Your satisfaction is our motivation.
            </p>
        </ul>
        <p className="text-center font-semibold p-4 text-xl">Thank you for choosing us. We look forward to serving you and creating delightful experiences.</p>
    </div>
        </>
    );
};

export default About;
