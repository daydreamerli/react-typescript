import { GreetingProps } from "../types/types";

export const Greeting = (props: GreetingProps) => {
    const { messages = 0 } = props;

    return (
        <div>
            <h1>{props.isLoggedIn
                ? `Hi ${props.name}! Welcome to React with Typescript!`
                : `Welcome Guest`}
            </h1>
            <h2>{props.isLoggedIn
                ? `You have ${messages} unread messages!`
                : null} </h2>
        </div>
    );
}