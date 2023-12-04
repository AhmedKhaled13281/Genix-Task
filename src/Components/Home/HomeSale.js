import React from "react";
import { Row, Col, Card, Button } from "react-bootstrap";
const items = [
  {
    title: "text",
    image:
      "https://scontent.xx.fbcdn.net/v/t1.15752-9/406102612_1066899684436621_2102691640180441124_n.png?stp=dst-png_p206x206&_nc_cat=101&ccb=1-7&_nc_sid=510075&_nc_ohc=WyRnwsSauV8AX8brgou&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQAx_S3KCqorKVowfpuv6AcLcKn0iTx3EQT7cK_zoQ_dg&oe=65959BEC",
    lastPrice: 60,
    oldPrice: 25,
  },
];

const HomeSale = () => {
  const repeatedItems = Array(8).fill(items[0]);
  return (
    <>
      <div className="mt-5">
        <h3 className="text-danger fw-bold mb-3">Items For Sale</h3>
        <Row>
          {repeatedItems.map((item, index) => {
            return (
              <Col key={index} md={3} xs={12} className="mb-3">
                <div className="d-flex justify-content-center flex-column">
                  <img className="rounded" src={item.image} alt="vf" />
                  <p className="text-dark text-center">{item.title}</p>
                  <div className="d-flex justify-content-center">
                    <big className="text-danger fw-bold me-2">60$</big>
                    <small className="text-danger fw-bold">-25$</small>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
      <div className="mt-5">
        <h3 className="text-danger fw-bold mb-3 text-center">
          Trending Brands
        </h3>
        <div className="bg-light p-5">
          <Row>
            {Array(4)
              .fill()
              .map((item, index) => {
                return (
                  <Col key={index} md={3} xs={12} className="mb-3">
                    <div className="d-flex justify-content-center flex-column">
                      <img
                        className="rounded"
                        src="https://scontent.xx.fbcdn.net/v/t1.15752-9/385527885_1531803950928830_1015159541632884192_n.png?stp=dst-png_p168x128&_nc_cat=109&ccb=1-7&_nc_sid=510075&_nc_ohc=-YIhQyiYJ2UAX_O0YmB&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTTWuH50_p0CXg03wR7Uijl8rg9lF5uCFQwGvOv7Zwn9g&oe=6595A9FA"
                        alt="vf"
                      />
                    </div>
                  </Col>
                );
              })}
          </Row>
        </div>
      </div>

      <div className="mt-5">
      <h3 className="text-danger fw-bold mb-3 text-center">
      Explore Popular Categories
        </h3>
        <div className="">
          <Row>
            {Array(6)
              .fill()
              .map((item, index) => {
                return (
                  <Col key={index} md={4} xs={12} className="mb-3 d-flex justify-content-center align-items-center">
                    <div className="d-flex justify-content-center align-items-center rounded p-3" style={{boxShadow : 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'}}>
                        <div>
                            <img width='40px' height='40px' src="https://scontent.xx.fbcdn.net/v/t1.15752-9/406144898_1521141228701484_1934325615079263808_n.png?stp=cp0_dst-png&_nc_cat=107&ccb=1-7&_nc_sid=510075&_nc_ohc=Bx_-RDOYGCkAX_OQcQo&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSEf6lkQks_44R6NYO6JJFWQ16ybXUwTXGBH2iKy9OA8w&oe=659581E9" alt="fwe"/>
                            <img width='40px' height='40px' src="https://scontent.xx.fbcdn.net/v/t1.15752-9/386822614_2405111716328343_7107331631524277580_n.png?stp=cp0_dst-png&_nc_cat=101&ccb=1-7&_nc_sid=510075&_nc_ohc=5C_hwYDFrpsAX8rLoKu&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSwoouvTRQ7ajhbQwE-k17h9R9OoozRe_zWbM23dsF2_A&oe=6595829A" alt="fwe"/>
                            <img width='40px' height='40px' src="https://scontent.xx.fbcdn.net/v/t1.15752-9/385534702_317688301095855_687590255174806019_n.png?stp=cp0_dst-png&_nc_cat=100&ccb=1-7&_nc_sid=510075&_nc_ohc=cPxX7sUQtKAAX-Ykyw6&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRYOYH6JhFlmn_NCf2F84Qv4QE7jHZxwAd6zOtmy1dauA&oe=6595B74A" alt="fwe"/>
                            <img width='40px' height='40px' src="https://scontent.xx.fbcdn.net/v/t1.15752-9/385534398_1438979913694234_8756168675249652994_n.png?stp=cp0_dst-png&_nc_cat=108&ccb=1-7&_nc_sid=510075&_nc_ohc=1DXEBviTn2oAX_sPq8r&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQXyT03YUMQSY5UGEPIpci1QY3p1jgQR3zQR6dlnOGLCQ&oe=65958FC3" alt="fwe"/>
                        </div>
                        <hr style={{border: '1px solid black', height : '80px' , color : 'black' , margin : '5px'}}/>
                        <div className="text-dark">
                            <h6>Newest Brands</h6>
                            <h6>110+ orders and reviews</h6>
                        </div>
                    </div>
                  </Col>
                );
              })}
          </Row>
        </div>
      </div>
    </>
  );
};

export default HomeSale;
