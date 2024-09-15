"use client";
import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import LogoImg from "../../../public/images/tronoxlogo.png";
import { RiSearchLine } from "react-icons/ri";
import ShopingCard from "./ShopingCard";
import Image from "next/image";
import { MenuData } from "../data/MenuData";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "400",
  subsets: ["latin"],
});

const MainMenu = () => {
  return (
    <>
      <div className="main-menu">
        <Navbar expand="lg">
          <Navbar.Brand href="/" className="logo">
            <Image width={112} src={LogoImg} alt="logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto navbar my-lg-0" navbarScroll>
              {MenuData.map((item, i) => (
                <Nav.Link
                  key={i}
                  href={item.link}
                  className={poppins.className}
                >
                  {item.title}
                </Nav.Link>
              ))}
            </Nav>
            <Form className="search-box">
              <Form.Control type="search" placeholder="Search" />
              <Button className="search-icon">
                <RiSearchLine />
              </Button>
            </Form>
            <ShopingCard />
          </Navbar.Collapse>
        </Navbar>
      </div>
    </>
  );
};

export default MainMenu;
