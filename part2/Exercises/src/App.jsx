const Course = ({course}) => {
  return(
    <>
      <h1 key={course.id}> {course.name} </h1>
      <ul>
        {course.parts.map((parts)=>{
          return(
            <li key={parts.id}>Part name: {parts.name}. Numer of exercises: {parts.exercises}</li>
          )
        })}
      </ul>
      <h2>Total: {course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises }  </h2>
    </>
  )
}
const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      }
    ]
  }

  return <Course course={course} />
}

export default App