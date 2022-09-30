import {Link} from 'react-router-dom'
import Map from "./Map"

function Header(props) {
    return (
        <div className="h-[350px] w-full bg-slate-300">
            <div className='flex justify-center items-center gap-[20px]'>
                <Link to='/'>Home</Link>
                <Link to='/contact'>Contact</Link>
               
            </div>
            <Map/>
        </div>
    );
}

export default Header;