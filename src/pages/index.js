import Head from "next/head";
import Footer from "../components/footer";
import Header from "../components/header";
import Develop from "../components/develop";
import Services from "../components/services";
import About from "../components/about";
import Contact from "../components/contact";

export default function Home(props) {
  
  return (
    <>
      <Head>
        <meta name="googlebot" content="notranslate"/>
        <meta httpEquiv='Content-Language' content='es'/>
        <meta name='distribution' content='global'/>

        <title>EsproTech</title>
        <link rel="icon" href="/favicon.ico" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="robots" content="max-image-preview:large" />
        <meta property="og:image" content="/portada.jpg" />
        <link href="/portada.jpg" rel="image_src"/>
        <meta property="image:width" content="240" />
        <meta property="image:height" content="135" /> 
      </Head>

      <div id="body" className="flex flex-col w-full">
        <Header/>
        <main>
          <About/>
          <Services/>
          <Develop/>
          <Contact/>
        </main>
        <Footer/>
      </div>
    </>
  );
};