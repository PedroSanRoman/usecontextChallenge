import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import useTheme from '../hooks/useThem';
import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Jobs from '../pages/Jobs';
import Button from '../components/Button';

function RoutesApp () {
    const { theme } = useTheme ()
    return (
        <Router>
            <p>color: {theme}</p>
            <section className={`App ${theme}`}>

            <nav>
                <Link to='/'>Home</Link>
                <Link to='/profile'>Profile</Link>
                <Link to='/jobs'>Jobs</Link>
            </nav>
            <Button />
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/profile' element={<Profile />}/>
                <Route path='/jobs' element={<Jobs />}/>
            </Routes>
            </section>
        </Router>
    )
}

export default RoutesApp