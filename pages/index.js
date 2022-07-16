import styles from '../styles/Home.module.css'
import Nav from '../components/Nav';
import HeroSection from '../components/heroSection';
import ValueSection from '../components/ValueSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div id='home'>
      <Nav />
      <div className='centerPageContainer'>
        <HeroSection />
        <ValueSection />
      </div>
      <Footer />
    </div >
  )
}

export default Home;