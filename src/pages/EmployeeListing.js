import React from "react";
import logo from "../logo.svg";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Button } from "react-bootstrap";
import EmployeeCreate from "./EmployeeCreate";

class EmployeeList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      modalShow: false,
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => this.setState({ data }));
  }

  render() {
    return (
      <div className="cardWrapper">
        <Button
          variant="primary"
          onClick={() =>
            this.setState({
              modalShow: true,
            })
          }
        >
          Launch vertically centered modal
        </Button>
        <Row xs={2} md={4} className="g-4">
          {Array.from({ length: 8 }).map((_, idx) => (
            <Col key={idx}>
              <Card>
                {/* <Card.Img variant="top" src={logo} style={{maxWidth:"50%"}} /> */}
                <Card.Body>
                  <Card.Title>Card title</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <EmployeeCreate
          show={this.state.modalShow}
          onHide={() =>
            this.setState({
              modalShow: false,
            })
          }
        />
      </div>
    );
  }
}
export default EmployeeList;
