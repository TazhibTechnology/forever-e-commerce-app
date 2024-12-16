import { assets } from "../assets/frontend_assets/assets";

const Footer = () => {
  return (
    <div>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm'>
        <div>
          <img className='mb-5 w-32' src={assets.logo} alt='' />
          <p className='w-full md:w-2/3 text-gray-600'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            placeat suscipit natus corporis blanditiis? Numquam totam,
            repellendus excepturi possimus nemo dolorum tenetur sequi fugit
            adipisci rem consequatur consequuntur enim ipsam!
          </p>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>COMPANY</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>Home</li>
            <li>About</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div>
          <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-1 text-gray-600'>
            <li>+9379-6651-878</li>
            <li>TazhibTechnology@gmail.com</li>
          </ul>
        </div>

        
      </div>
      {/* Copy Right Text */}
      <div>
          <hr />
          <p className='py-5 text-sm text-center'>
            &copy; 2024 Prescripto. All rights reserved to TazhibTechnology.
          </p>
        </div>
    </div>
  );
};

export default Footer;
