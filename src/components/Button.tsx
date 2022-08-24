import { ButtonProps } from "../types/types";

export const Button = (props :  ButtonProps) => {
    return (
        <div  className = "Status">
          <button  className = "Button" onClick={(e) =>props.handleClick(e)}>Click</button>
        </div>
    );
}

