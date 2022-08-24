import { OscarProps } from "../types/types";

export const Oscar = (props : OscarProps) => {

    return (
        <div>
            {props.children}
        </div>
    );
}