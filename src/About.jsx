import star from './assets/star.png';
import saturn from './assets/saturn1.png';
import { OrbitSpace } from 'orbit-space';

function About() {
  return (
    <div className="p-5">
      <OrbitSpace />
      <h1 id='menuTop'>About Page</h1>
      <div className='ship-container'>
        <img src={star} className='ship'></img>
        <img src={saturn} className='saturn'></img>
        <h2 id='category' className='pt-5 text-light'>The greatest restaurant in the galaxy!</h2>
        <h3 id='mars' className='pt-5 text-light'>New location on Mars coming soon!</h3>
      </div>
    </div>
  )
}


export default About
