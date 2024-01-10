import React from "react";
import { Card } from "react-bootstrap";

const Post2 = () => {
  return (
    <Card>
      <Card.Img variant="top" src="2nd.jpg" width={20} height={250} />
      <Card.Body>
        <Card.Title>Data Structure</Card.Title>
        <Card.Text>
          Data structures are like the containers and organizers of information
          in the world of programming. Think of them as digital filing systems
          that help computers store and manage data efficiently. They come in
          different forms, such as lists, arrays, and trees, each with its own
          superpower. Lists are like to-do lists, allowing you to keep things in
          order. Arrays are collections of similar items, like an array of
          fruit, where you can access them by number. Trees are like family
          trees, connecting data in a hierarchical way. These structures help
          programmers work with data, whether it's a list of friends' names or
          the contents of a library. Understanding data structures is like
          knowing which box to look in for your favorite toy—it's a fundamental
          skill in the world of coding.
        </Card.Text>
        <a href="#" className="btn btn-primary">
          Read More
        </a>
      </Card.Body>
    </Card>
  );
};

export default Post2;
