const ContentProject = () => {
  return (
    <section className='flex flex-col gap-4 w-full justify-center items-center mt-16 lg:flex lg:flex-wrap lg:min-h-screen lg:w-full lg:justify-start lg:items-center lg:bg-bg-black'>
      {/* Layout desktop */}
      <h1 className='hidden lg:block lg:text-[54px] lg:font-bold'>
        What I <span className='text-bg-green'> Do </span>
      </h1>
      <main className='hidden lg:flex lg:w-full lg:flex-wrap lg:gap-5 lg:px-10 lg:justify-center lg:items-center'>
        <section className='hidden lg:w-[400px] lg:h-[280px] lg:bg-bg-main lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-4'>
          <img
            src='../images/main bg/landing-page.jpg'
            className='object-cover w-full h-[230px] rounded-md'
          />
          <h1 className='text-xl text-fuchsia-200'>Company profile</h1>
        </section>

        {/* project 2 */}
        <section className='hidden lg:w-[400px] lg:h-[280px] lg:bg-bg-main lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-4'>
          <img
            src='../images/main bg/project2.jpg'
            className='object-cover w-full h-[230px] rounded-md bg-center '
          />
          <h1 className='text-xl text-teal-200'>Landing page</h1>
        </section>

        {/* project 3 */}
        <section className='hidden lg:w-[400px] lg:h-[280px] lg:bg-bg-main lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-4'>
          <img
            src='../images/main bg/portfolio.jpg'
            className='object-cover w-full h-[230px] rounded-md bg-center '
          />
          <h1 className='text-xl text-rose-200'>Website Portfolio</h1>
        </section>
        <section className='hidden lg:w-[400px] lg:h-[280px] lg:bg-bg-main lg:flex lg:flex-col lg:justify-center lg:items-center lg:gap-4'>
          <img
            src='../images/main bg/custom-cv.jpg'
            className='object-cover w-full h-[230px] rounded-md bg-center '
          />
          <h1 className='text-xl text-sky-200'>Custom Cv </h1>
        </section>
      </main>

      <h1 className='text-amber-200 font-semibold text-xl lg:hidden'>
        WHAT I DO
      </h1>

      <figure className='flex flex-col justify-center items-center gap-8 lg:hidden'>
        <section className='lg:hidden flex flex-col gap-1 justify-center items-center w-[80%] bg-bg-black'>
          <img
            src='../images/main bg/landing-page.jpg'
            className='object-cover w-full h-[230px] rounded-md'
          />
          <h1 className='text-xl text-fuchsia-200 pb-2'>Company profile</h1>
        </section>

        {/* project 2 */}
        <section className='lg:hidden flex flex-col gap-1 justify-center items-center w-[80%] bg-bg-black'>
          <img
            src='../images/main bg/project2.jpg'
            className='object-cover w-full h-[230px] rounded-md'
          />
          <h1 className='text-xl text-rose-200 pb-2'>Landing page</h1>
        </section>

        {/* project 3 */}
        <section className='lg:hidden flex flex-col gap-1 justify-center items-center w-[80%] bg-bg-black'>
          <img
            src='../images/main bg/portfolio.jpg'
            className='object-cover w-full h-[230px] rounded-md'
          />
          <h1 className='text-xl text-sky-200 pb-2'>Website portfolio</h1>
        </section>
      </figure>
    </section>
  );
};

export default ContentProject;
