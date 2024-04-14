import Navbar from "./components/UI/Navbar/Navbar";
import Content from "./components/UI/Container/Content";
import Footer from "./components/UI/Footer/Footer";

const App = () => {
  return (
    <section className='font-poppins lg:bg-bg-black  bg-bg-main mt-2 flex-col text-slate-50 w-full flex justify-center items-center relative'>
      <Navbar />
      <Content />
      <Footer />
    </section>
  );
};

export default App;
