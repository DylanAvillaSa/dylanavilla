const Navbar = () => {
  return (
    <nav className='flex fixed top-0 left-0 right-0 bg-bg-white h-[50px] z-30 items-center px-3 justify-between rounded-b-sm lg:bg-bg-black '>
      <h1 className='text-slate-900 font-semibold lg:text-bg-white lg:text-2xl'>
        Dylan Avilla
      </h1>
      <img
        src='menu.png'
        className='w-[35px] h-[35px] object-cover lg:hidden'
      />
    </nav>
  );
};

export default Navbar;
