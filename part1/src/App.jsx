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
  //Exercise 1.5
  const course = {
    name: 'Half Stack application development',
    parts: [
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
  }

  return (
    <div>
      <Header name = {course.name} />
      <Part part = {course.parts[0].name} exer = {course.parts[0].exercises} />
      <Part part = {course.parts[1].name} exer = {course.parts[1].exercises} />
      <Part part = {course.parts[2].name} exer = {course.parts[2].exercises} />
      <Total n1 = {course.parts[0].exercises} n2 = {course.parts[1].exercises} n3 = {course.parts[2].exercises} />

    </div>
  )
}

export default App