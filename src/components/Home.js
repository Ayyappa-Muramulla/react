import './Home.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

function Home() {
  return (
    <section>
      <Navbar/>
      <video muted autoPlay loop className="Video">
        <source src="./VD/video1.mp4" type="video/mp4" />
      </video>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="card" id="card">
              <img src="./Cupboards/Cup.jpg" className="card-img-top" alt="Cupboards" />
              <div className="card-img-overlay CardHeader">
                <Link className="card-title" to="/Designs">
                  Cupboards
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="card" id="card">
              <img src="./Doors/15.jpg" className="card-img-top" alt="Doors" />
              <div className="card-img-overlay CardHeader">
                <Link className="card-title" to="/Designs">
                  Doors
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-4 col-lg-4">
            <div className="card" id="card">
              <img src="./beds/22.jpg" className="card-img-top" alt="Beds" />
              <div className="card-img-overlay CardHeader">
                <Link className="card-title" to="/Designs">
                  Beds
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='container'>
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-2"></div>
          <div className="col-sm-12 col-md-12 col-lg-8">
            <h1 className="H">About Us</h1>
            <div className="About">
              <center className="Center">
                The Best in Wood Furniture for Your Home
              </center>
              <p className="Para">
                Our company offers a wide range of high-quality furniture for
                every part of your home. Whether you're looking for a comfy sofa,
                a strong dining table, or a cozy bed, we have it all. Our
                selection includes both modern and classic styles, crafted to
                add beauty and comfort to your home. We believe that good
                furniture should be both stylish and functional.
              </p>
              <p className="Para">
                One thing that makes us special is our ability to create custom
                furniture. If you have a specific design in mind, our skilled
                team can make it just for you. We work closely with you to
                understand your ideas and turn them into reality. This
                dedication to creating personalized furniture has earned us top
                recognition in the industry. Our custom pieces are known for
                their unique style and quality.
              </p>
              <p className="Para">
                Quality is very important to us. We use only the best types of
                wood, like rich mahogany and durable oak, to make our furniture.
                Our customers give us the best ratings because our products are
                beautiful and long-lasting. We are proud to be known as the
                best in the market, providing furniture that not only looks
                good but also stays strong and reliable over time.
              </p>
              <center className="Center">For more Details Contact Us</center>
            </div>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-2"></div>
        </div>
      </div>
      <div className='container'id='ContactUs'>
            <div className='row'>
            <div className="col-sm-12 col-md-12 col-lg-2"></div>
            <div className="col-sm-12 col-md-12 col-lg-8">
            <h1 className="H">Contact Us</h1>
              <div className='Contact'>
                <center className='C'>
                  <table className="table" id="TA">
                        <tr id="TR">
                          <td id="Td">Mobile no</td>
                          <td id="Td">:</td>
                          <td id="Td">7989682710, 9553762426</td>
                        </tr>
                        <tr id="TR">
                          <td id="Td">What's App</td>
                          <td id="Td">:</td>
                          <td id="Td">9553762426</td>
                        </tr>
                        <tr id="TR">
                          <td id="Td">Address</td>
                          <td id="Td">:</td>
                          <td id="Td">
                            Machilipatnam, Chilakalapudi,
                            <br />
                            Krishna District, Andhra Pradesh.
                          </td>
                        </tr>
                        <tr id="TR">
                          <td id="Td">Pincode</td>
                          <td id="Td">:</td>
                          <td id="Td">521002</td>
                        </tr>
                      </table>
                </center>
                  </div>
            </div>
            <div className="col-sm-12 col-md-12 col-lg-2"></div>
            </div>
          </div>
          <Footer/>
    </section>
  );
}

export default Home;
