import React from "react";
import PropsChild from "./PropsChild";

function PropsParent() {
  return(
    <div>
      <PropsChild>
         Hello World
      </PropsChild>
      <PropsChild>
         ...and everyone else!
      </PropsChild>
      <PropsChild>
          Is there anyone else out there?
      </PropsChild>
    </div>
  )
}

export default PropsParent