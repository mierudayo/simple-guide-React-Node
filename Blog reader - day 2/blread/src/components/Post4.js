import React from "react";
import { Card } from "react-bootstrap";

const Post4 = () => {
  return (
    <Card>
      <Card.Img variant="top" src="4th.jpg" width={20} height={250} />
      <Card.Body>
        <Card.Title>Computer Networks</Card.Title>
        <Card.Text>
          Computer networks are like digital highways that connect our devices
          and allow them to communicate. Just as roads help us reach different
          places, computer networks enable computers, phones, and other gadgets
          to share information and resources. These networks can be small, like
          the Wi-Fi in our homes, or vast, like the internet that spans the
          globe. They use a language called protocols to ensure devices
          understand each other. Networks are what make the internet possible,
          letting us browse websites, send emails, and stream videos.
          Understanding computer networks is a bit like being a traffic cop for
          data, making sure it flows smoothly from one place to another. It's a
          key part of our connected world.
        </Card.Text>
        <a href="#" className="btn btn-primary">
          Read More
        </a>
      </Card.Body>
    </Card>
  );
};

export default Post4;
