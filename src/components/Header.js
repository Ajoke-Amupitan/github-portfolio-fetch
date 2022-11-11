import './Header.css';
import { Link as RouterLink} from 'react-router-dom';


function Header() {
    return (
        <header className="App-header">
        <h1>My Github Portfolio</h1>
        <nav>
         <RouterLink to='' className='App-link'>
           About me
         </RouterLink>
         <RouterLink to='/projects' className='App-link'>
           Repositories
         </RouterLink>
         {/* <RouterLink to='/projects/:name' className='App-link'>
           Repos Detail
         </RouterLink> */}
       </nav>
      </header>
    );
}

export default Header;