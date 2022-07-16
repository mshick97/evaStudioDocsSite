import styles from '../styles/Home.module.css'
import Nav from '../components/Nav';
import HeroSection from '../components/heroSection';
import ValueSection from '../components/ValueSection';

const Home = () => {
  return (
    <div id='home'>
      <Nav />
      <div className='centerPageContainer'>
        <HeroSection />
        <ValueSection />
      </div>
    </div >
  )
}

export default Home;