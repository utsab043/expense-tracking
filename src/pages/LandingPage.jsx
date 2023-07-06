import Navbar from "../components/landing/Navbar";
import Services from "../components/landing/Services";
import About from "../components/landing/About";
import Footer from "../components/landing/Footer";
const LandingPage = () => {
  return (
    <main id="home">
      <Navbar />
      <div className="hlo container">
        <h1>
          Save money,
          <br /> save yourself.
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
