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
  //Exercise 1.4
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header name = {course} />
      <Part part = {parts[0].name} exer = {parts[0].exercises}/>
      <Part part = {parts[1].name} exer = {parts[1].exercises}/>
      <Part part = {parts[2].name} exer = {parts[2].exercises}/>
      <Total n1 = {parts[0].exercises} n2 = {parts[1].exercises} n3 = {parts[2].exercises} />

    </div>
  )
}

export default App