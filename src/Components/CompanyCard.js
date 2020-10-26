import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Image from "react-bootstrap/Image";
function CompanyCard(props) {
  return (
    <Card className="text-center company-card">
      <Card.Body>
        <Image src={props.thumbnailUrl} thumbnail />

        <Card.Title>{props.name}</Card.Title>
        <Button variant="danger">{props.jobCount} Open Jobs</Button>
      </Card.Body>
    </Card>
  );
}
export default CompanyCard;
