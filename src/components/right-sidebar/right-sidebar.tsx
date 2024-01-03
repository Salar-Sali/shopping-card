import { Offcanvas } from "react-bootstrap";

const RightSidebar = () => {
  return (
    <Offcanvas show={true} placement="end">
      <Offcanvas.Header>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
    </Offcanvas>
  );
};

export default RightSidebar;
