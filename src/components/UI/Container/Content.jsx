import ContentHeader from "./About/ContentHeader";
import Content2 from "./Myskill/Content2";
import ContentProject from "./Project/ContentProject";
const Content = () => {
  return (
    <section className='flex flex-col w-full justify-between items-center mt-24 font-Montserrat gap-5 min-h-screen'>
      <ContentHeader />
      <Content2 />
      <ContentProject />
    </section>
  );
};

export default Content;
