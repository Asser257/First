import React ,{ useState , useEffect } from 'react'
import { BrowserRouter , Router , Route , Routes , Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import 'animate.css'
import Home from './Home'
import ContactUs from './ContactUs';
import About from './About';
import NaVbar from './Navbar'
import BarLoader from "react-spinners/BarLoader" 
import { HashLink } from 'react-router-hash-link'
import { NavLink } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


{
  /* The following line can be included in your src/index.js or App.js file */
}


const App = () => {
//   const [count , setCount] = useState(0);
//   const [count22 , setCount22] = useState(2);

// useEffect (
// () => {
//   console.log("4mam")
// setInterval( () => console.log("قحه") ,1000)

// }, [count22])
const [posts , setPosts] =useState()
 const [loading , setLoading] = useState(false)

useEffect=( 
  () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(resp => resp.json())
    .then(data => {
      setPosts(data)
    })
  }
 )












 useEffect( () => {
  setLoading(true)
  setTimeout(
    () => {
      setLoading(false)
    }, 3000
  )
 }, [] )


 const [isOpen, setIsOpen] = useState(false);

 const toggle = () => setIsOpen(!isOpen);


  return (
    <div>
     {/* <h1>a7a</h1> 
     <h1>{count}</h1>
<button onClick={() =>setCount(count + 1)}>+</button>
<button onClick={() =>setCount(count - 1)}>-</button>

<h1>{count22}</h1>
<button onClick={() =>setCount22(count22 + 3)}>+</button>
<button onClick={() =>setCount22(count22 - 3)}>-</button> */}


<BrowserRouter>

{
  loading ? 
  <div className='loader'>
<BarLoader color={"#212cb9"} loading={loading} height={10} margin={10} />
  </div>
  
  :
  <>
<Navbar bg="dark" variant="dark">
        <Container className='par'>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto links">
{/* <Link to="Home">HOME</Link>
<Link to="About">ABOUT</Link>
<Link to="ContactUs">CONTACT US</Link> */}
<HashLink to="/#Home">HOME</HashLink>
<HashLink to="/#About">ABOUT</HashLink>
<HashLink to="/#ContactUs">CONTACT US</HashLink>

          </Nav>
        </Container>
      </Navbar>
      <ul>
{posts.map(post => (

<li>
  {post.title}
</li>

))}
        
      </ul>
  <Home />
  {/* <About />
  <ContactUs /> */}

      <Routes>

<Route path='Home' element={<Home />} />
<Route path='ContactUs' element={<ContactUs />} />
<Route path='About' element={<About />} />

</Routes>
</>
 }

</BrowserRouter>


    </div>
  )
}

export default App
