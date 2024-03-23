import React from "react";
import { Card, CardImg, CardBody, CardTitle, CardText, Button } from "react-bootstrap";

const CardComponent = ({ title, text, buttonText, buttonColor, image  }) => {
  return (
    <Card>
      <CardImg variant="top" src={image} />
      <CardBody>
        <CardTitle>{title}</CardTitle>
        <CardText>{text}</CardText>
        <Button color={buttonColor}>{buttonText}</Button>
       
      </CardBody>
    </Card>
  );
};

export default CardComponent;

