import React from "react";

interface IDisplay {
  value: string;
  className: string;
}

export const Display = (props: IDisplay) => (<p className={props.className}>{props.value}</p>);
