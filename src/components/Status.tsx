import { StatusProps } from "../types/types";

export const Status = (props: StatusProps) => {
    let message : string ;
    switch(props.status){
        case 'loading':
            message = 'Loading ...';
            break;
        case 'success':
            message = 'Data fetched successfully!';
            break;
        case 'error':
            message = 'Error!'; 
            break;
        default:
            message = 'Start fetching data!';
    }
    return (
        <div className = "Status">
            <h1>Status : {message}</h1>
        </div>
    );
}