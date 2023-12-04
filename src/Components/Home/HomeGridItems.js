import React from 'react'
import {Row  , Col ,} from 'react-bootstrap'

const HomeGridItems = () => {
  return (
    <div
      className="position-sticky text-black"
      style={{   maxWidth: "60%", margin: "60px auto" }}
    >
      <div
        className="border-rounded"
        style={{
          backgroundColor: "white",
          width: "100%",
          padding: "50px",
          borderRadius: "50px",
          marginBottom : '50px'
        }}
      >
        <Row xs={12} className="column-gap-4 w-100">
          <Col
            xs={12}
            md={4}
            style={{ backgroundColor: "#F5F5F5", borderRadius: "10px" }}
          >
            <h3 className="text-danger fw-bold">Best Seller</h3>
            <p>Get a discount on popular products</p>
            <img
              width="100%"
              src="https://scontent.xx.fbcdn.net/v/t1.15752-9/386468521_1034434747604317_2675812523507553786_n.png?stp=dst-png_p206x206&_nc_cat=106&ccb=1-7&_nc_sid=510075&_nc_ohc=rPnCF6rR7jMAX8cPDve&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTSdjsiCxprL3g5V7KL5nVJ87M1xGKRufRkqJSXw1GgNQ&oe=65957696"
              alt="ver"
            />
            <div className="d-flex justify-content-center">
              <big className="text-danger fw-bold me-2">60$</big>
              <small className="text-danger fw-bold">-25$</small>
            </div>
          </Col>
          <Col  md={7}>
            <Row
              className="mb-3"
              style={{ backgroundColor: "#F5F5F5", borderRadius: "10px" }}
            >
              <h3 className="text-danger fw-bold">The strongest brands</h3>
              <p>Selections at the best prices and best quality</p>
              <div className="d-flex justify-content-between ">
                <div className="me-2">
                  <img
                    width="100%"
                    src="https://scontent.xx.fbcdn.net/v/t1.15752-9/399139641_6649884135122049_994223732531068552_n.png?stp=dst-png_p206x206&_nc_cat=108&ccb=1-7&_nc_sid=510075&_nc_ohc=hXqNgnJNNdQAX8QVdf0&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdT9qtPY54_U-qLz2S8GPjZ5ffyO9HptQdLkqvuMs9hqzg&oe=65956EE8"
                    alt="ver"
                  />
                  <div className="d-flex justify-content-center">
                    <big className="text-danger fw-bold me-2">54$</big>
                    <small className="text-danger fw-bold">-22$</small>
                  </div>
                </div>
                <div className="me-2">
                  <img
                    width="100%"
                    src="https://scontent.xx.fbcdn.net/v/t1.15752-9/386889079_864706675117559_7865898096763931023_n.png?stp=dst-png_p206x206&_nc_cat=110&ccb=1-7&_nc_sid=510075&_nc_ohc=Zz8KvkJcDYwAX-hxp44&_nc_oc=AQla3EgKu0ivlhlxPZ5rqJBumboWAZM1HaOIdAzNwfakNXx0vslLrGeCfbk8bUyNMfTNNv7tkoI0Mg8FDmXFjJqU&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdSgbcbXtBLrywEj6QpaEt4YUNMTq7fjDGwXOOz2_sJrQg&oe=65959202"
                    alt="ver"
                  />
                  <div className="d-flex justify-content-center">
                    <big className="text-danger fw-bold me-2">60$</big>
                    <small className="text-danger fw-bold">-25$</small>
                  </div>
                </div>
                <div className="me-2">
                  <img
                    width="100%"
                    src="https://scontent.xx.fbcdn.net/v/t1.15752-9/404806373_297465395957475_5146719444187635081_n.png?stp=dst-png_p206x206&_nc_cat=106&ccb=1-7&_nc_sid=510075&_nc_ohc=cw3YyVtVnGgAX_WiQH8&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdTvQRsl9Agyvj3K636_B57uvYt1BhVJfE-2NNJ1oACRAA&oe=65957ADA"
                    alt="ver"
                  />
                  <div className="d-flex justify-content-center">
                    <big className="text-danger fw-bold me-2">48$</big>
                    <small className="text-danger fw-bold">-15$</small>
                  </div>
                </div>
              </div>
            </Row>

            <Row style={{ backgroundColor: "#F5F5F5", borderRadius: "10px" }}>
              <div className="d-flex w-100 ">
                <div style={{ width: "100%" }} className="d-flex justify-content-center align-item-center">
                    <div>
                    <h3 className="text-danger fw-bold">Weekly deals</h3>
                  <p>Discounted prices for the last 30 days</p>
                    </div>
                </div>

                <div className="align-items-center">
                  <div className="d-flex justify-content-center align-item-center">
                    <big className="text-danger fw-bold me-2">48$</big>
                    <small className="text-danger fw-bold">-15$</small>
                  </div>
                </div>

                <div>
                  <img
                    width="100%"
                    src="https://scontent.xx.fbcdn.net/v/t1.15752-9/384562867_1519150725540648_932953305273476391_n.png?stp=dst-png_p206x206&_nc_cat=107&ccb=1-7&_nc_sid=510075&_nc_ohc=o6u0zLcCYesAX-0_Gvw&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdQ_B9tF3Ulev4_LOkwQGO23OdTTkvoiRQTIHkTQy1LVjA&oe=65957565"
                    alt="ver"
                  />
                </div>
              </div>
            </Row>
          </Col>
        </Row>

      </div>

    </div>
  );
}

export default HomeGridItems