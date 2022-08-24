import { HeadingProps } from "../types/types"

export const Heading = (props : HeadingProps) => {
    return <h1>{props.children}</h1>
}