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
const HomeRecommended = () => {
  const repeatedItems = Array(24).fill(items[0]);
  return (
    <>
        <div className="mt-5">
      <h3 className="text-danger fw-bold mb-3 text-center">Recommended</h3>
      <Row>
        {repeatedItems.map((item, index) => {
          return (
            <Col key={index} md={3} xs={12} className="mb-3">
              <div className="d-flex justify-content-center flex-column">
                <img className="rounded" src={item.image} alt="vf" />
                <p className="text-dark text-center">{item.title}</p>
                <div className="d-flex justify-content-center">
                  <big className="text-danger fw-bold me-2">60$</big>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
      <div className="d-flex justify-content-center">
        <Button variant="outline-danger" className="fs-3 fw-bold">
          View More
        </Button>
      </div>
    </div>

    <div className="mt-5 d-flex justify-content-center align-items-center flex-column">
      <h3 className="text-danger fw-bold mb-3 text-center">Sell With Sabbagh Group</h3>
      <img width="70%" src="https://scontent.fcai20-2.fna.fbcdn.net/v/t1.15752-9/393213765_3087901378009578_2255455183588630573_n.png?stp=dst-png_p206x206&_nc_cat=104&ccb=1-7&_nc_sid=510075&_nc_ohc=giUb0FuXxzEAX_aCKOJ&_nc_ht=scontent.fcai20-2.fna&oh=03_AdTyay0wLu9q_C6B5pzu4S_UeJ7vuPvBmW9Av55iPSVLJg&oe=659587E6" alt="ver"/>
    </div>
    </>
  );
};

export default HomeRecommended;
