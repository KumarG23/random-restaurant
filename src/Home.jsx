import { Link } from "react-router-dom";


function Home() {
    return (
        <div>
            <Link to='/'>{'<- Back'}</Link>
            <h1>Home Page</h1>
        </div>
    )
}




export default Home