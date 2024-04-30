const Course = ({course, total}) => {
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
      <h2>Total number of exercises: {total} </h2>
      <h2>Total number of exercises using .reduce: {course.parts.reduce((total, parts)=>{
        return total + parts.exercises
      },0)} </h2>
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
  let total = 0
  let i = 0
  for(i=0;i<3;i++){
    total += course.parts[i].exercises
  }
  course.parts.reduce((total, parts) =>{
    return total + parts.exercises
  }, 0)

  return (
    <>
      <Course course={course} total={total} />
    </>
  )
}

export default App