import { PersonProps } from "../types/types";

export const Person = (props : PersonProps) => {
    return (
        <div>
         <h1>{props.name.firstName} {props.name.lastName}</h1>
          
        </div>
    );
}