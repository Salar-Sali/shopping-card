import Col from "react-bootstrap/esm/Col";

const HomePageRightSide = () => {
  return (
    <Col
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        src={`${import.meta.env.BASE_URL}/assets/home.svg`}
        alt="online-shopping"
      />
    </Col>
  );
};

export default HomePageRightSide;
