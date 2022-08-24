import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Greeting } from './components/Greeting';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { SiteList } from './components/siteList';
import { Status } from './components/Status';

function App() {
  const personName = {
    firstName: 'Bruce',
    lastName: 'Wayne'
  }
  const clickButton = () => {
    alert('You clicked the button!');
  }

  return (
    <div className="App">
      <Status status= {"success"} />
      <Oscar>
        <h1>The Oscar result is coming</h1>
        <Heading>Little golden man goes to Leon </Heading>
      </Oscar>
      <Person name = {personName}/>
      <Greeting name={'Bruce'} messages={12} isLoggedIn={true} />
      <Button 
        handleClick = { (e) => clickButton()}
      />
      <Input  value = '' handleChange = { e => console.log('Text input')} />
      <Container styles= {{ border: '2px solid black', padding: '1rem', justifyContent: 'center' , paddingLeft:'2rem', paddingRight:'23'}}/>
      <SiteList />
    </div>
  );
}

export default App;
