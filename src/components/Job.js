import React, { useEffect,useState } from "react";
import "../Styles/jobLogo.css";
import { Card, Button, Container, Badge,Modal } from "react-bootstrap";
import $ from "jquery";
import ReactMarkdown from "react-markdown";
function Job({ job }) {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    let badges = $(".o-badge");
    //console.log(badges)
    badges
      .on("mouseover", function () {
        let widthl = this.scrollWidth;

        $(this).animate(
          {
            scrollLeft: `+=${widthl}`,
          },
          5000,
          "linear",
          function () {
            $(this).animate(
              {
                scrollLeft: 0,
              },
              "fast",
              function () {
                $(this).trigger("mouseover");
              }
            );
          }
        );
      })
      .mouseleave(function () {
        var animSpeed = $(this).scrollLeft() * 10;
        $(this).stop().animate(
          {
            scrollLeft: 0,
          },
          "fast"
        );
      });
  });

  return (
    <Card style={{ margin: "5px" ,paddingBottom : "10px"}}>
      <div
        style={{
          display: "flex",
          paddingLeft: "10px",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Card.Title>
            {job.title} -{" "}
            <span className="text-muted font-weight-light">{job.company}</span>
          </Card.Title>
          <Card.Subtitle className="font-weight-light">
            {new Date(job.created_at).toLocaleDateString()}
          </Card.Subtitle>
        </div>
        <img className="c-logo" src={job.company_logo} />
      </div>
      <div style={{ display: "flex", alignItems: "center", padding: "10px" }}>
        <Badge
          style={{ marginLeft: "10px", maxWidth: "inherit" }}
          variant="dark"
        >
          {job.type}
        </Badge>
        <Badge
          className="o-badge"
          style={{ marginLeft: "10px", maxWidth: "40%", overflow: "hidden" }}
          variant="dark"
        >
          {job.location}
        </Badge>
      </div>
      <div style = {{padding : "10px"}}>
        <ReactMarkdown source = {job.how_to_apply} />
      </div>
      <Card.Text style = {{marginLeft : "10px"}}>
        <Button variant = "primary" onClick = {handleShow}>View Details</Button>

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{job.company}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ReactMarkdown source = {job.description}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
        </Card.Text>
      
    </Card>
  );
}

export default Job;
