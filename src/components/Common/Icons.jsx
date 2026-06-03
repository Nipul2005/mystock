import React from "react";

function Icons({ icon_name, name, classes }) {
  return (
    <i
      className={`ri-${icon_name}-line text-2xl rounded-full ${classes}`} //ri-search-line text-2xl rounded-full
      title={`${name}`} // icon adjacent name
    ></i>
  );
}

export default Icons;
