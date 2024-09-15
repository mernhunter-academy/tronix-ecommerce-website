import { Col, Container, Row } from "react-bootstrap";
import "./styles/globals.scss";
import Menubar from "@/components/MenuBar";
import Layout from "@/components/Layout/Layout";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Layout>
        <Hero />
      </Layout>
    </>
  );
}
