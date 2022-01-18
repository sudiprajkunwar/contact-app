import React from "react";
import { Col, Row } from "antd";
import styled from "@emotion/styled";
import { Color } from "../../constants/Color";
import { Link } from "react-router-dom";

const Wrapper = styled("div")`
  width: 100%;
  height: 100%;
`;

const Title = styled("h2")`
  font-size: 50px;
  font-weight: 700;
  color: ${Color.textDark};
  text-align: center;
`;

const Container = styled.div`
  height: 60vh;
`;

const UnderConstruction = () => {
  return (
    <Wrapper>
      <Container>
        <Link to="/contact">
          <Title>Page Not Found</Title>
          <Title>🏠</Title>
        </Link>
      </Container>
    </Wrapper>
  );
};
export default UnderConstruction;
