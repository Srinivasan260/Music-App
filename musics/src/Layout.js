import { Outlet, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import './layout.css';
import loging from './ty.png';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'font-awesome/css/font-awesome.min.css';

const Layout = () => {
  const auth = localStorage.getItem('user')
  return (
    <>
      <Container>
        <div className="re">
          <nav>
            <br></br><br></br><br></br>


            <h2 id="h2"> <small> SRTY APP</small></h2>

            <img src={loging} className="img1" height="70px" width="70px"></img>
            <br></br>
            <br></br>






            <Link to="/" ><i class="bi bi-house" id="li1"></i> Home</Link> <br></br> <br></br>




            <Link to="/skills" > <i class="bi bi-bootstrap-reboot" id="li1"></i>  Trending songs </Link><br></br> <br></br>

            <Link to="/App" ><i class="bi bi-gear" id="li1" ></i> Settings</Link> <br></br> <br></br>


          </nav>

        </div>

      </Container>


      <Outlet />
    </>
  )
};

export default Layout;