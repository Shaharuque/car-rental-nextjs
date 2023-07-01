//creating interface
//interface in typescript: interface is a structure that defines the contract in your application. it defines the syntax for classes to follow. classes that are derived from an interface must follow the structure provided by their interface.

import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}
