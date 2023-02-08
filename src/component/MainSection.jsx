import React, { useState } from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";
import CardSection from "./CardSection";
import Category from "./Category";
import { category, cardData } from "./utils/utlis";

const MainSection = () => {
  const [data, setData] = useState(cardData);

  const updateData = (newData) => {
    setData(newData);
  };

  return (
    <section>
      <Container>
        <Row>
          <h1 className="main-title">Trending Post</h1>

          <Col lg="8">
            <img
              src="https://edyoda.s3.amazonaws.com/media/blog-images/ace-soft-skills-small.jpg"
              alt=""
              width="95%"
            />
          </Col>
          <Col lg="4" className="trending__img">
            <img
              src="https://edyoda.s3.amazonaws.com/media/blog-images/aptitude-small.jpg"
              alt=""
              width="90%"
            />
            <img
              src="https://edyoda.s3.amazonaws.com/media/blog-images/learn_cloud_computing.jpeg"
              alt=""
              width="90%"
            />
          </Col>
        </Row>
        <Row>
          <Category category={category} updateData={updateData} />
        </Row>
        <Row>
          <CardSection cardData={data} />
        </Row>
      </Container>
    </section>
  );
};

export default MainSection;
