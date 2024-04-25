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
  //Exercise 1.3
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      <Header name = {course} />
      <Part part = {part1.name} exer = {part1.exercises} />
      <Part part = {part2.name} exer = {part2.exercises} />
      <Part part = {part3.name} exer = {part3.exercises} />
      <Total n1 = {part1.exercises} n2 = {part2.exercises} n3 = {part3.exercises} />
    </div>
  )
}

export default App