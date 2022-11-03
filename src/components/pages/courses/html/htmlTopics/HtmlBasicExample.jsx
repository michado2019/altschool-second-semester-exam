import React from "react";
import "./HtmlBasicExample.css";
import { Helmet } from "react-helmet-async";

export default function HtmlBasicExample() {
  return (
    <div className="htmlBasic-example_wrapper">
      <Helmet>
        <title>HTML Basic Example</title>
        <meta name="description" content="Basic example of HTML" />
        <link rel="canonical" href="/htmlBasic/example" />
      </Helmet>
      <a
        href="https://www.w3schools.com/html/tryit.asp?filename=tryhtml_basic_document"
        className="htmlBasic-example"
        target="_blank"
        rel="noreferrer"
      >
        Click me to view example!
      </a>
    </div>
  );
}
