import { useState, useEffect } from "react";
import { Button, Carousel, Modal } from "react-bootstrap";

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

const WelcomeScreen = ({ setShowWelcomeScreen }) => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    setShowWelcomeScreen(!code);
  }, []);


  return (
    <div className="WelcomeScreen">
      <h1>Welcome to the Meet app</h1>
      <Carousel className="welcomeCarousel" controls={false} touch>
        <Carousel.Item className="carouselItem">
          <img
            className="d-block w-100"
            src="https://hamzatcf.github.io/meet/view_events.png"
            alt="First slide"
          />
          <Carousel.Caption className="carouselCaption">
            <h3>Find Events</h3>
            <p>Explore javascript full-stack development events around the world</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carouselItem">
          <img
            className="d-block w-100"
            src="https://hamzatcf.github.io/meet/cool_charts.png"
            alt="Second slide"
          />

          <Carousel.Caption className="carouselCaption">
            <h3>Cool Charts</h3>
            <p>
              Events distributions visualized on fancy chart to...ummm...I mean why not.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carouselItem">
          <img
            className="d-block w-100"
            src="https://hamzatcf.github.io/meet/use_offline.png"
            alt="Third slide"
          />

          <Carousel.Caption className="carouselCaption">
            <h3>No internet? No problem!</h3>
            <p>
              Events will be cached locally on your computer so that you can view them while offline.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Button className="getStartedBtn" onClick={() => { setShow(true) }}>
        GET STARTED
      </Button>

      <a
        className="privacyLink"
        href="https://hamzatcf.github.io/meet/privacy.html"
        rel="nofollow noopener"
      >
        Privacy policy
      </a>
      <Modal show={show} onHide={() => { setShow(false) }}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="welcome-text">
            Log in to see upcoming events around the world for full-stack developers
          </p>
          <button
            className="google-btn"
            rel="nofollow noopener"
            onClick={() => {
              const getAuthURL =
                "https://3qvsrmj50h.execute-api.us-east-1.amazonaws.com/dev/api/get-auth-url";

              fetch(getAuthURL)
                .then(function (response) {
                  return response.json();
                })
                .then(function (json) {
                  const result = JSON.stringify(json);
                  const { authUrl } = JSON.parse(result); //gets the value of authUrl
                  window.open(authUrl, "_top");
                });

            }}
          >
            <img
              className="google-icon"
              src="https://hamzatcf.github.io/meet/btn_google.png"
              alt="Google sign-in"
            />
            <span className="google-text">
              Sign in with Google
            </span>
          </button>
          <a
            href="https://hamzatcf.github.io/meet/privacy.html"
            rel="nofollow noopener"
          >
            Privacy policy
          </a>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={() => { setShow(false) }}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div >
  )
}

export default WelcomeScreen;
