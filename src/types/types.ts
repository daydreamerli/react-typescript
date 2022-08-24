export type ContainerProps = {
    styles:React.CSSProperties
}

export type HeadingProps = {
    children: string
}

export type ButtonProps = {
    handleClick: (event : React.MouseEvent<HTMLButtonElement>) => void
}

export type StatusProps = {
    status: 'loading' | 'success' | 'error'
}

export type GreetingProps = {
    name: string
    messages?: number
    isLoggedIn: boolean
}

export type PersonProps = {
    name: IFullName
}

export interface IFullName{
    firstName: string
    lastName: string
}

export type OscarProps = {
    children : React.ReactNode
}

export type InputProps = {
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}