const Content2 = () => {
  return (
    <section className='flex flex-col gap-5 mt-10 w-full justify-start items-center lg:flex lg:flex-col lg:w-full lg:min-h-screen lg:bg-bg-main'>
      <h1 className='font-semibold text-xl text-sky-300 lg:hidden'>
        My knowledge
      </h1>

      {/* layout desktop */}
      <main className='hidden lg:w-full lg:flex lg:min-h-screen lg:justify-center lg:items-center lg:py-20 lg:px-20'>
        <section className='hidden lg:flex lg:flex-col lg:gap-4 '>
          <h1 className='hidden lg:block lg:text-[64px] lg:font-bold'>
            About <span className='text-bg-green'>me</span>
          </h1>
          <p className='hidden lg:block lg:w-[60%] lg:text-wrap lg:text-justify lg:text-[18px]'>
            Halo, I'm Dylan <span className='text-bg-green'> Avilla </span>, As
            a fresh graduate front-end developer, im has just completed my
            formal education in the field of computer technology. I have a basic
            understanding of the technologies and programming languages use to
            create attractive and responsive user interfaces on the web. I may
            have skills in HTML, CSS, and JavaScript, and may have learned
            frameworks or libraries such as React and little bit next js.
          </p>
        </section>

        <section className='hidden lg:w-full lg:flex lg:relative '>
          <img
            src='items.png'
            className='absolute '
          />
          <img
            src='about.png'
            className='lg:w-[412.68px] lg:z-20 lg:object-contain'
          />
        </section>
      </main>

      {/* image skills layout mobile*/}
      <figure className='flex items-center w-full justify-center gap-10 lg:hidden'>
        <img
          src='html.png'
          className='w-[35px] h-[35px] object-cover'
        />
        <img
          src='css.png'
          className='w-[35px] h-[35px] object-cover'
        />
        <img
          src='javascript.png'
          className='w-[35px] h-[35px] object-cover'
        />
        <img
          src='reactjs.png'
          className='w-[35px] h-[35px] object-cover'
        />
      </figure>
    </section>
  );
};

export default Content2;
