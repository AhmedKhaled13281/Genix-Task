import React from "react";
import {
  Row,
  Col,
  Button,
  Navbar,
  InputGroup,
  Carousel,
  Nav,
  Container,
} from "react-bootstrap";
const HomeBanner = () => {
  return (
    <div className="mt-5">
      <Row  className="d-flex justify-content-center align-items-center">
        <Col className="d-flex justify-content-center align-items-center">
          <div style={{ minWidth: "70%", position: "relative" }}>
            <img
              src="https://scontent.xx.fbcdn.net/v/t1.15752-9/384550368_298497659833736_7429972419278321127_n.png?stp=dst-png_p206x206&_nc_cat=110&ccb=1-7&_nc_sid=510075&_nc_ohc=Y0cGXFM_E48AX9Z4ul1&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQgfIPCqQ6Ix0B0S9_LX7uGG9fBEKsy7e-6HJLW7GymYQ&oe=65955D94"
              alt="Banner 1"
              width="100%"
            />
            <Button
              variant="light"
              className="fw-bold fs-3"
              style={{ position: "absolute", bottom: "4rem", right: "9rem" }}
            >
              Start Now
            </Button>
          </div>
        </Col>
      </Row>
      <Row className="mt-5">
        <Col className="d-flex justify-content-center align-items-center">
          <div style={{ minWidth: "70%" }} >
            <Carousel >
              <Carousel.Item>
                <img
                  src="https://scontent.xx.fbcdn.net/v/t1.15752-9/405242960_810969617496816_5166059253150203055_n.png?stp=dst-png_p206x206&_nc_cat=109&ccb=1-7&_nc_sid=510075&_nc_ohc=eBFsb3sVlPEAX-r_UcQ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdT9o-d3yGfahCKMkweOdYGn1gLSaKqtU3bynvZC2qKndw&oe=65954FC3"
                  alt="fwe"
                  width="100%"
                />
              </Carousel.Item>

              <Carousel.Item>
                <img
                  src="https://scontent.xx.fbcdn.net/v/t1.15752-9/405242960_810969617496816_5166059253150203055_n.png?stp=dst-png_p206x206&_nc_cat=109&ccb=1-7&_nc_sid=510075&_nc_ohc=eBFsb3sVlPEAX-r_UcQ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdT9o-d3yGfahCKMkweOdYGn1gLSaKqtU3bynvZC2qKndw&oe=65954FC3"
                  alt="fwe"
                  width="100%"
                />
              </Carousel.Item>
              <Carousel.Item>
                <img
                  src="https://scontent.xx.fbcdn.net/v/t1.15752-9/405242960_810969617496816_5166059253150203055_n.png?stp=dst-png_p206x206&_nc_cat=109&ccb=1-7&_nc_sid=510075&_nc_ohc=eBFsb3sVlPEAX-r_UcQ&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdT9o-d3yGfahCKMkweOdYGn1gLSaKqtU3bynvZC2qKndw&oe=65954FC3"
                  alt="fwe"
                  width="100%"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default HomeBanner;
