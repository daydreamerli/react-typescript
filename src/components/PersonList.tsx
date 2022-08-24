import { IFullName, Person } from "./Person";

type PListProps = {
    names: IFullName[];
}
export const PersonList = (props : PListProps) => {
    return (
        <div className = "PersonList">
          <h1 className = "PersonList-Header">Person List</h1>
          {props.names.map((name, index) => <Person key={index} name={name} />)}
         
        </div>
    );
}