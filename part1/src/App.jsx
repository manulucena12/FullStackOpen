const Header = (props) => {
  return(
  <h1>Course name: {props.name} </h1>
  )
}
const Content = (props) => {
  return (
    <>
      <h2>Part: {props.partname}, Number of exercises: {props.exercises} </h2>
    </>
  )
}
const Total = (props) => {
  return(
    <h3>Number of exercises: {props.n1 + props.n2 + props.n3} </h3>
  )
}
const Part = (props) => {
  return(
  <h2>Part: {props.part}, Number of exercises: {props.exer}</h2>
  )
}

const App = () => {
  return (
    <div>
      <Header name = 'Half Stack application development' />
      <Part part = 'Fundamentals of React' exer = {10} />
      <Part part = 'Using props to pass data' exer = {7} />
      <Part part = 'State of a component' exer = {14} />
      <Total n1 = {10} n2 = {7} n3 = {14} />
    </div>
  )
}

export default App