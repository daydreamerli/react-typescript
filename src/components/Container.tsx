import { ContainerProps } from "../types/types";

export const Container = (props : ContainerProps) =>{
    return (
        <div style ={ props.styles}>
            Text content goes here
        </div>
    );
}