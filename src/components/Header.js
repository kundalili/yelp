import {Link} from 'react-router-dom'
import Map from "./Map"
import Search from './Search';
import logo from './img/yelp.png'

function Header(props) {
    return (
        <div className="header text-gray-600 font-bold flex justify-around items-center h-[150px] w-full bg-slate-300 gap-[20px]">
                <div>
                    <img src={logo} alt='logo' className='w-[80px] ml-[20px] '></img>
                </div >
                    <Link className='' to='/'><a>Home</a></Link>
                    <Link className='' to='/contact'>Contact</Link>
                    <Search/>
               
            </div>
    );
}

export default Header;