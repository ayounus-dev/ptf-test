import React from "react";
import { Container } from "react-bootstrap";
import CompanyCard from "../../Components/CompanyCard";
import Companies from "../../MockData/Companies";
import Row from "react-bootstrap/Row";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function FeaturedCompanies() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    desktopSmall: {
      breakpoint: { max: 1150, min: 464 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Container style={{ marginTop: "5em" }}>
      <Row className="companies-header">
        <a className="mr-auto heading" href="">
          Featured Companies
        </a>
        <a href="">View All Companies {">"}</a>
      </Row>

      <Carousel responsive={responsive} className="companies-carousel">
        {Companies.data.map(
          ({ name, thumbnail, active_published_jobs_count, id }) => (
            <CompanyCard
              name={name}
              thumbnailUrl={thumbnail?.url}
              jobCount={active_published_jobs_count}
              key={id}
            />
          )
        )}
      </Carousel>
    </Container>
  );
}

export default FeaturedCompanies;
