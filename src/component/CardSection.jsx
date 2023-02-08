import React from "react";

// import { cardData } from "./utils/utlis";
import { Col, Card, CardBody } from "reactstrap";
const CardSection = ({ cardData }) => {
  return (
    <>
      {cardData && cardData.length > 0 ? (
        cardData.map((item, index) => (
          <Col lg="3" md='6' sm='12' key={index}>
            <Card>
              <div className="card__img">
                <img src={item.image} alt="" />
              </div>
              <CardBody>
                <div class="text-content">
                  <div class="heading">
                    <h1>{item.title.slice(0, 50)}...</h1>
                  </div>
                  <div>
                    <div class="author">
                      {item.name} <span class="date">| {item.date} </span>
                    </div>
                  </div>
                  <div class="desc">
                    <p> {item.description.slice(0, 120)}...</p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        ))
      ) : (
        <span className="text-center">
          <strong>No Data available</strong>
        </span>
      )}
    </>
  );
};

export default CardSection;
