

const Contact = () => {
    return (
        <div className=" bg-lime-100">
        {/* <h1 className="p-8 text-center text-5xl font-bold text-lime-900">Contact Us</h1>
       <div className="grid-cols-1 lg:flex justify-between mx-8">
       <div>
       <h1 className="py-4 text-center text-2xl font-bold text-lime-500">Call us :</h1>
        <p className="mb-8 text-center text-xl font-bold text-blue-600">Mobile: 01791234674</p>
       </div>
       <div>
        <h1 className="py-4 text-center text-2xl font-bold text-lime-500">Address:</h1>
        <p className="mb-8 text-center text-xl font-bold text-blue-600">Darussalam, Mirpur-1
Dhaka-1216</p>
       </div>
       <div>
        <h1 className="py-4 text-center text-2xl font-bold text-lime-500">Email:</h1>
        <p className="pb-8 text-center text-xl font-bold text-blue-600">sr-foodbeverage@gmail.com</p>
       </div>
       </div>
       <p className="py-4 text-center text-3xl font-bold text-sky-800">(Open : Sat - Fri, 8:00 AM to 11:00 PM)</p> */}





       <div className="bg-white">
      <header className="bg-sky-400 text-white text-center py-12 dark:bg-zinc-600">
        <h1 className="text-4xl xl:text-5xl font-bold mt-28 lg:mt-36">Contact Us</h1>
      </header>
      <section className="text-center py-12 px-4 dark:bg-slate-700 ">
        <h2 className="text-2xl font-bold dark:text-white">Get In Touch</h2>
        <p className="mt-4 text-gray-700 max-w-2xl mx-auto dark:text-slate-400">We are here to help you. Reach out to us via any of the following methods.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-8 animate-fadeIn">
          <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
            <h3 className="text-xl font-bold">Call Us</h3>
            <p className="text-gray-700 mt-2">Mobile: 0179123464</p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
            <h3 className="text-xl font-bold">Email Us</h3>
            <p className="text-gray-700 mt-2">sr-foodbeverage@gmail.com</p>
          </div>
          <div className="p-4 shadow-lg rounded-lg bg-green-100 hover:bg-green-200 transition-colors">
            <h3 className="text-xl font-bold">Visit Us</h3>
            <p className="text-gray-700 mt-2">Darussalam, Mirpur-1
            Dhaka-1216</p>
          </div>
        </div>
      </section>
      <section className="bg-gray-100 py-12 px-4 dark:bg-slate-500">
        <h2 className="text-2xl font-bold text-center dark:text-white ">Send Us A Message</h2>
        <form className="max-w-2xl mx-auto mt-8 space-y-8">
          <div>
            <label htmlFor="name" className="block text-gray-700 font-bold dark:text-white">Name</label>
            <input type="text" id="name" className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 dark:focus:ring-black  transition shadow-slate-500 dark:shadow-white" />
          </div>
          <div>
            <label htmlFor="email" className="block text-gray-700 font-bold dark:text-white">Email</label>
            <input type="email" id="email" className="w-full mt-2 p-3 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-sky-500 dark:focus:ring-black transition shadow-slate-500 dark:shadow-white" />
          
           
          </div>
          <div>
            <label htmlFor="message" className="block text-gray-700 font-bold dark:text-white">Message</label>
            <textarea id="message" rows="5" className="w-full mt-2 p-3 border rounded-lg shadow-sm shadow-slate-500 dark:shadow-white focus:outline-none focus:ring-2 focus:ring-sky-500 dark:focus:ring-black  transition "></textarea>
          </div>
          <button type="submit" className="w-full bg-sky-600 text-white py-3 rounded-lg shadow-lg hover:bg-sky-500 transition-colors dark:bg-sky-500 dark:hover:bg-sky-700 font-semibold text-lg">Send Message</button>
        </form>
      </section>
     
     
    </div>
    </div>
    );
};

export default Contact;