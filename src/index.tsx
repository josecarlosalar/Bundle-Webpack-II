import React from "react";
import { createRoot } from "react-dom/client";

import "./styles.scss";

const root = createRoot(document.getElementById("root"));
console.log(`Api base: ${process.env.API_BASE}`);


root.render(
  <>
    <h1> Hello from Master Frontend Lemoncode </h1> 
  </>
);
