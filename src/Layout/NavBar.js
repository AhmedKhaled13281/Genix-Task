import React from 'react'
import {Row  , Col , Form , Navbar , InputGroup , Dropdown , Nav , Container} from 'react-bootstrap'
import { MdOutlineShoppingCart } from "react-icons/md";
import { FcLike } from "react-icons/fc";
import { MdPerson } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";

const NavBar = ({children}) => {
  return (
    <div style={{ backgroundColor: "#000000" }}>
    <div >
    <Navbar style={{ backgroundColor: "#000000" }} className="d-flex justify-content-center w-100 flex-column mb-5">
        <Row
          className="mt-3 d-flex justify-content-center align-items-center"
          style={{ minWidth: "40%" }}
        >
          <Col xs={12} md={6} lg={8}>
            <InputGroup className="mb-3">
              <Form.Control
                type="text"
                placeholder="Search"
                className="mr-sm-2"
              />
              <InputGroup.Text id="basic-addon2">
                <IoIosSearch className="fs-5" />
              </InputGroup.Text>
            </InputGroup>
          </Col>

          <Col md={6} lg={4} className="d-flex justify-content-between mb-3">
            <img
              src="https://scontent.xx.fbcdn.net/v/t1.15752-9/385538758_334811295936864_6798372031370654424_n.png?stp=cp0_dst-png&_nc_cat=111&ccb=1-7&_nc_sid=510075&_nc_ohc=rrpt-NQHdIIAX8A2E7G&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_AdRmug3JeOV1uQ-55kIDSedO1Fn0H92-3DFeXvA-8O0WVQ&oe=65953F61"
              alt="Logo"
              width="30px"
              height="30px"
            />
            <MdOutlineShoppingCart className="fs-4 text-white" />
            <FcLike className="fs-4" />
            <MdPerson className="fs-4 text-white" />
          </Col>
        </Row>
        <Row className="mt-3 " style={{width : "100%"}}>
          <Col >

            <Nav className="me-auto d-flex justify-content-between flex-wrap fw-bold">
            <Form.Select
              aria-label="Default select example"
              style={{ maxWidth: "150px" }}
            >
              <option>Categories</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
              <Nav.Link className="text-white">Home Appliances</Nav.Link>
              <Nav.Link className="text-white">
                Baby Care & Mommy Products
              </Nav.Link>
              <Nav.Link className="text-white">Perfumes & Fragrances</Nav.Link>
              <Nav.Link className="text-white">
                Stationery - Office Supplies
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Navbar>
    </div>

      <div style={{ backgroundColor: "white" }}>
        {children}
      </div>
    </div>
  );
}

export default NavBar