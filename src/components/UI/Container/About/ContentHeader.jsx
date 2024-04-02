const ContentHeader = () => {
  return (
    <>
      <figure className='bg-bg-white lg:bg-transparent rounded-full w-[50%] lg:w-full bg-transparent'>
        <img
          src='../images/dylanavilla.jpg'
          className='object-contain lg:hidden rounded-full w-[220px] h-[220px]'
        />

        {/* desktop layout */}
        <main className='hidden lg:w-full lg:flex  lg:items-center lg:min-h-screen lg:justify-around'>
          <section className='hidden lg:flex lg:flex-col lg:gap-3'>
            <h1 className='hidden lg:block lg:text-[90px] lg:font-bold lg:w-[786px] lg:leading-[100px]'>
              FRONT END <span className='text-bg-green'>DEVELOPER</span>
            </h1>
            <div className='hidden lg:flex gap-8'>
              <button className='bg-bg-green p-2 rounded-md w-[25%]'>
                Hire me
              </button>
              <button className='bg-transparent p-2 rounded-md w-[35%] '>
                <a
                  download
                  className='flex items-center gap-3'>
                  Download CV
                  <img src='../images/main bg/download.png' />
                </a>
              </button>
            </div>
          </section>
          <div className='hidden lg:flex lg:bg-bg-white lg:rounded-full lg:w-[30%] lg:justify-center lg:items-center lg:p-2'>
            <img
              src='../images/main bg/logo.png'
              className='object-cover hidden lg:block lg:w-[400px] lg:h-[472.65px]'
            />
          </div>
        </main>
      </figure>
      <h1 className='font-bold text-2xl text-wrap font-Montserrat text-center w-[70%] lg:hidden'>
        I do code and make content{" "}
        <span className='text-bg-green'> about it </span>
      </h1>

      {/* description */}
      <section className='flex flex-col gap-3 w-full justify-center items-center lg:hidden'>
        <p className='w-[90%] text-center text-base lg:w-[430px] lg:text-xl'>
          Halo, I'm Dylan <span className='text-bg-green'> Avilla </span>,
          Thanks for coming and see my website portfolio, im is front-end
          developer who passionate about creating website from scratch.
        </p>
        {/* handler */}
        <div className='flex gap-4 w-full justify-center items-center mt-3'>
          <button className='shadow shadow-slate-50 p-2 bg-slate-100 text-slate-900 rounded-md'>
            Get In Touch
          </button>
          <button className='shadow-md  p-2 bg-bg-green text-slate-50 rounded-md'>
            Download Cv
          </button>
        </div>
      </section>
    </>
  );
};

export default ContentHeader;
