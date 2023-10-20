
const Footer = () => {
    return (
        <div>
            
           <footer className="footer footer-center p-10 bg-purple-100 pt-10 dark:bg-sky-950">
  <aside>
   <div className="flex ">
   <img className="w-40 shadow-xl rounded-full bg-white" src="https://i.ibb.co/S69bJX6/sr-food-beverage-ltd-low-resolution-logo-color-on-transparent-background.png" alt="" />
   
   </div>
    <p className="font-bold mt-4 dark:text-slate-50">
      Darussalam, Mirpur-1 <br/>Dhaka-1216 <br />Mobile No: 01791234674
    </p> 
    <p className="dark:text-slate-100">Copyright © 2023 - All right reserved</p>
  </aside> 
  <nav className="w-36 ">
    <h1 className="font-semibold text-left text-lg dark:text-slate-200">Follow Us</h1>
    <div 
    className="flex gap-4 "
    >
      <a href="https://www.facebook.com/"><img src="https://i.ibb.co/n0vvR5N/download.png" alt="" /></a> 
      <a href="https://www.instagram.com/"><img src="https://i.ibb.co/L81GxxG/download-2.png" alt="" /></a> 
      <a href="https://www.twitter.com/"><img src="https://i.ibb.co/gW9hZS6/download-1.png" alt="" /></a>
    </div>
  </nav>
</footer> 
        </div>
    );
};

export default Footer;