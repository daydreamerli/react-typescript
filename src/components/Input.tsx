import { InputProps } from "../types/types";

export const Input = (props : InputProps) => {
    return (
        <div className="Status">
            <h2 style={{ paddingRight: '1rem' } }>text input</h2>
            <input
                className="Input"
                type="text"
                value={props.value}
                onChange={props.handleChange} />
        </div>
    );
}