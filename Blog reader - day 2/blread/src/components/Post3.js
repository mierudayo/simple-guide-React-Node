import React from "react";
import { Card } from "react-bootstrap";

const Post3 = () => {
  return (
    <Card>
      <Card.Img variant="top" src="3rd.jpg" width={20} height={250} />
      <Card.Body>
        <Card.Title>Algorithm</Card.Title>
        <Card.Text>
          Algorithms are like recipes for computers. Just as we follow a recipe
          to make our favorite meal, computers follow algorithms to solve
          problems and perform tasks. These step-by-step instructions are a bit
          like magic spells that help computers make decisions, sort data, and
          find solutions. Think of them as the brains behind every piece of
          software and technology you use. Algorithms can be simple, like
          finding the highest number in a list, or complex, like predicting the
          weather. Learning about algorithms is like uncovering the secrets of
          how things work in the digital world, and it's a skill that empowers
          you to create your own technological wonders. So, whether you're
          sorting your playlist or sending a message, algorithms are there,
          making it all happen.
        </Card.Text>
        <a href="#" className="btn btn-primary">
          Read More
        </a>
      </Card.Body>
    </Card>
  );
};

export default Post3;
