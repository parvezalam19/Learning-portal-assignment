import React, { useState } from "react";
import { Container, Row } from "reactstrap";
import { cardData } from "./utils/utlis";
// import {category} from "./utils/utlis";

const Category = ({ category, updateData }) => {
  const [selectedUser, setSelectedUser] = useState({ id: 1, name: "All" });
  //   const [data, setData] = useState(cardData);

  const filterCard = (elm) => {
    setSelectedUser(elm);
    let filterAll;
    if (elm.name === "All") {
      filterAll = cardData;
    } else {
      filterAll = cardData.filter((items) => {
        return items.category === elm.name;
      });
    }
    updateData(filterAll);
  };

  return (
    <section>
      <Container>
        <Row>
          <h3>Categories</h3>
          <div class="categories">
            {category &&
              category.map((elm, index) => {
                return (
                  <span
                    className={
                      selectedUser && selectedUser.id === elm.id ? "active" : ""
                    }
                    key={elm.id}
                    onClick={(e) => filterCard(elm)}
                  >
                    <a href="#filter">{elm.name}</a>
                  </span>
                );
              })}
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default Category;
