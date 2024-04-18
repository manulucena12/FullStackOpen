const Header  = (props) => {
  return(
    <div>
      <p>Content: {props.course} </p>
    </div>
  )
}
const Part1 = (props) => {
  return(
    <div>
      <p> Part: {props.p1}, Number of exercises: {props.numberp1}</p>
    </div>
  )
}
const Part2 = (props) => {
  return(
    <div>
      <p> Part: {props.p2} Number of exercises: {props.numberp2}</p>
    </div>
  )
}
const Part3 = (props) => {
  return(
    <div>
      <p> Part: {props.p3} Number of exercises: {props.numberp3}</p>
    </div>
  )
}
const Content = () => {
  return(
    <div>
    <Part1 p1={p1} number={numberp1}/>
    <Part2 p2={p2} number={numberp2}/>
    <Part3 p3={p3} number={numberp3}/>
    </div>
  )
}
const Total  = (props) => {
  return(
    <div>
      <p>Content {props.total} </p>
    </div>
  )
}
const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <h1>{course}</h1>
      <p>
        {part1} {exercises1}
      </p>
      <p>
        {part2} {exercises2}
      </p>
      <p>
        {part3} {exercises3}
      </p>
      <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
    </div>
  )
}

export default App
