import styles from '../styles/Home.module.css'
import Nav from '../components/Nav';
import HeroSection from '../components/HeroSection';
import ValueSection from '../components/ValueSection';
import LearnMoreSection from '../components/LearnMoreSection';
import TeamSection from '../components/TeamSection';
import GetStartSection from '../components/GetStartSection';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div id='home'>
      <Nav />

      <div className='centerPageContainer'>
        <HeroSection />
        <ValueSection />
        <LearnMoreSection />
        <TeamSection />
        <GetStartSection />
      </div>

      <Footer />
    </div >
  )
}

export default Home;