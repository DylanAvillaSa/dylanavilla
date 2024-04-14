import { useState } from "react";
import emailjs from "@emailjs/browser";
const Footer = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [emailSended, setEmailSended] = useState("Send message");
  const sendEmail = (e) => {
    e.preventDefault();

    setIsSubmitting(true);
    setEmailSended("Sending...");

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(
        (response) => {
          setEmailSended("Send message");
          setIsSubmitting(false);
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );

    e.target.reset();
  };

  return (
    <footer className='w-full right-0 mt-16 flex flex-col justify-center items-center font-poppins lg:flex lg:bg-bg-main'>
      <section className='flex flex-col gap-2 items-center mt-2 lg:flex lg:flex-col'>
        <h1 className='text-[28px]  w-[300px] text-center font-bold lg:text-[64px] lg:w-[500px]'>
          Got a project in <span className='text-bg-green'> mind? </span>
        </h1>
        <img
          src='footer.png'
          className='w-[40%]'
        />
      </section>

      <form
        className='flex w-full gap-3 flex-col justify-center items-center mt-10 lg:flex lg:flex-col lg:w-[30%] mb-4'
        onSubmit={sendEmail}>
        <h1 className='text-xl'>Email me</h1>
        <input
          type='text'
          placeholder='Name'
          name='user'
          className='rounded-md bg-bg-black p-2 w-[90%]'
        />
        <input
          type='email'
          name='from_name'
          placeholder='Email'
          className='rounded-md bg-bg-black p-2 w-[90%]'
        />

        <section className='w-full justify-center flex flex-col gap-3 items-center relative'>
          <input
            type='text'
            placeholder='Message'
            name='message'
            className=' w-[90%] flex flex-col items-start justify-start  placeholder:relative placeholder:left-2 placeholder:top-[-75px] placeholder:justify-start placeholder:items-start place-content-start  rounded  h-[180px] bg-bg-black text-white'
          />
          <button
            className='w-[40%] bg-bg-green p-2 rounded-md items-start'
            type='submit'
            disabled={isSubmitting}>
            {emailSended}
          </button>
        </section>
      </form>
    </footer>
  );
};

export default Footer;
