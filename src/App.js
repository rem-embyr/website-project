const Hello = (props) => {
  return (
    <div>
      <p>Hello {props.name}, you are {props.age} years old</p>
    </div>
  )
}

const App = () => {
  const name = 'Matthew'
  const age = 20
  return (
    <>
      <h1>Greetings</h1>
      <Hello name={name} age = {age}/>
      <Hello name="Embyr" age={10+9}/>
    </>
  )
}

export default App;
