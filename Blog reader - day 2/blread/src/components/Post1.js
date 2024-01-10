import React from "react";
import { Card } from "react-bootstrap";

const Post1 = () => {
  return (
    <Card>
      <Card.Img variant="top" src="main.jpg" width={20} height={250} />
      <Card.Body>
        <Card.Title>Javascript</Card.Title>
        <Card.Text>
          JavaScript, often referred to as JS, is a fundamental building block
          of the digital world. It's a versatile and approachable programming
          language that plays a vital role in making websites and applications
          exciting and interactive. Imagine it as the creative tool that
          empowers developers to bring websites to life, making them more than
          just static pages. With JavaScript, you can add features like animated
          graphics, responsive forms, and real-time updates, enhancing the user
          experience in the digital realm. But JS doesn't stop at web
          development; it's a jack-of-all-trades language. It can be used on the
          server side, thanks to technologies like Node.js, making it capable of
          handling server operations. JS is like the Swiss Army knife of
          programming, serving various purposes, from crafting eye-catching web
          animations to building complex software. It's an essential language to
          learn if you want to dive into the fascinating world of technology and
          create digital wonders of your own.
        </Card.Text>
        <a href="#" className="btn btn-primary">
          Read More
        </a>
      </Card.Body>
    </Card>
  );
};

export default Post1;
