import Navbar from "../components/landing/Navbar";
import Services from "../components/landing/Services";
import About from "../components/landing/About";
import Footer from "../components/landing/Footer";
const LandingPage = () => {
  return (
    <main>
      <Navbar />
      <div className="flex container">
        <h1 className="hi">
          Save money, <br /> Save yourself.
        </h1>
        <img src="/hi.svg" alt="" className="hero-image" />
      </div>
      <Services />
      <About />
      <Footer />
    </main>
  );
};

export default LandingPage;
