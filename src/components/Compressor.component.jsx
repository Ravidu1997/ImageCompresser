import React from "react";
import CircularSlider from "@fseehawer/react-circular-slider";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

import Card from "react-bootstrap/Card";
var style = {
  backgroundColor: "#1a1c20",
  margin: "50px",
  padding: "46px 110px 2px 30px",
  marginRight: "50px",
  marginBottom: "2px",
  left: "60px",
};
let link = {
  paddingRight: "52px",
};
let kb = {
  paddingLeft: "1px",
};
let title = {
  justifyContent: "center",
  alignItems: "center",
  marginLeft: "80px",
};
let download = {
  height: "200px",
  width: "auto",
  marginLeft: "40px",
};
let card = {
  padding: "180px 30px 30px 30px",
  margin: "70px",
  left: "150px",
};
let img = {
  paddingRight: "48px",
  paddingTop: "40px",
};
const Compressor = (props) => {
  const styles = {
    slider: {
      padding: "0 0 0.5rem 0",
      position: "static",
    },
  };

  return (
    <div>
      {props.outputFileName ? (
        <div>
          <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 " style={style}>
            {props.outputFileName ? (
              <div style={styles.slider}>
                <CircularSlider
                  label="Quality"
                  min={0}
                  max={100}
                  value={props.quality}
                  onChange={props.handleInputChange}
                  direction={1}
                  knobPosition="right"
                  knobColor="red"
                  valueFontSize="4rem"
                  labelColor="Gainsboro"
                  labelFontSize="20px"
                  progressColorFrom="orange"
                  progressColorTo="green"
                />
              </div>
            ) : (
              <></>
            )}
            <br />
            {props.outputFileName ? (
              <button
                type="button"
                className=" btn btn-dark"
                onClick={(e) => props.click(e)}
                style={title}
              >
                Compress
              </button>
            ) : (
              <></>
            )}
          </div>

          <div
            className="col-xl-3 col-lg-3 col-md-12 col-sm-12 p-5 m-10 ht mt-4"
            style={card}
          >
            {props.clicked ? (
              <div style={img}>
                <Card.Img
                  variant="top"
                  src={props.compressedLink}
                  className="card-img-top ht mt-1"
                  style={download}
                ></Card.Img>
                <div id="kb" style={kb}>
                  <h5>
                    {Number(
                      (parseInt(props.outputImage.size, 10) / 1024).toFixed(1)
                    )}{" "}
                    KB
                  </h5>
                </div>
              </div>
            ) : (
              <></>
            )}
            {props.clicked ? (
              <div
                className="  col-xl-3 col-lg-3 col-md-12 mb-5 col-sm-12 "
                style={link}
              >
                <a
                  href={props.compressedLink}
                  download={props.outputFileName}
                  className="mt-1 mx-5 ml-26 px-20 btn btn-dark "
                >
                  Download
                </a>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Compressor;
