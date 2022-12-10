import React from "react";

const Scroll = function (props) {
  return (
    <div
      style={{
        overflowY: "scroll",
        // border: "1px solid black",
        height: "500px",
        scrollbarWidth: "1px",
      }}
    >
      {props.children}
    </div>
  );
};

export default Scroll;
