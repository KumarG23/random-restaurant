import { OrbitSpace } from 'orbit-space';
import star from './assets/star.png';
import logo from './assets/logo1.png';
import asteroid from './assets/asteroid1.png';
import saturn from './assets/saturn1.png';



function Home() {
    return (
        <div>
            <OrbitSpace />
            <h1 id="menuTop" className="pt-5 text-light">Home Page</h1>
            <img src={logo} className='logo1'></img>
            
            
        <div className='ship-container'>
            <img src={star} className='ship'></img>
            <img src={asteroid} className='asteroid'></img>
            <img className='ship'></img>
            {/* <img src={saturn} className='saturn'></img> */}

        </div>
        </div>
    )
}




export default Home