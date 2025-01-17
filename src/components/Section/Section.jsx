/* eslint-disable react/no-unescaped-entities */

import { Link } from "react-router-dom";


const Section = () => {
    return (
        <div>
        {/* <div className="text-center dark:bg-slate-700">
            <h1 className="text-center text-cyan-600 font-bold text-4xl underline pt-12">About Us</h1>
            <p className="font-medium text-lg text-indigo-700 mx-8 mt-8 pb-4 dark:text-white">Our industry has started commercial operation in 2000.  Now no.1 beverage company in Bangladesh with strong brand presence.With a mission to bring the world's flavors to your fingertips, we curate a delectable selection of products, from iconic brands to hidden gems, all in one place. Our platform is designed to cater to your every craving, offering an extensive range of beverages, snacks, and  essentials. At the heart of our industry is a commitment to quality and authenticity. We collaborate with renowned brands, ensuring that every product meets the highest standards of taste and nutrition. Whether you're searching for a comforting cup of coffee, a refreshing beverage, or a delicious snack, we've got you covered.</p>
        </div> */}

        <section className="bg-gray-100 dark:bg-gray-700">
    <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div className="max-w-lg">
                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white">About Us</h2>
                <p className="mt-4 text-gray-600 text-lg dark:text-gray-300">Our industry has started commercial operation in 2000.  Now no.1 beverage company in Bangladesh with strong brand presence.With a mission to bring the world's flavors to your fingertips, we curate a delectable selection of products, from iconic brands to hidden gems, all in one place. Our platform is designed to cater to your every craving, offering an extensive range of beverages, snacks, and  essentials. At the heart of our industry is a commitment to quality and authenticity. </p>
                <div className="mt-8">
            <Link to="/about" className="text-blue-500 hover:text-blue-600 text-lg font-medium dark:text-blue-300 dark:hover:text-blue-600">Learn more about us
                        <span className="ml-2">&#8594;</span></Link>
                </div>
            </div>
            <div className="mt-12 md:mt-0">
                <img src="https://images.unsplash.com/photo-1531973576160-7125cd663d86" alt="About Us Image" className="object-cover rounded-lg shadow-md"/>
            </div>
        </div>
    </div>
</section>



        
        </div>
    );
};

export default Section;