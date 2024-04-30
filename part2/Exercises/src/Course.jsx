const Course = () => {
    const courses = [
      {
        name: 'Half Stack application development',
        id: 1,
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
          },
          {
            name: 'Redux',
            exercises: 11,
            id: 4
          }
        ]
      }, 
      {
        name: 'Node.js',
        id: 2,
        parts: [
          {
            name: 'Routing',
            exercises: 3,
            id: 1
          },
          {
            name: 'Middlewares',
            exercises: 7,
            id: 2
          }
        ]
      }
    ]
  
    return (
      <div>
        <h1 key={courses[0].id} >Course name: {courses[0].name} </h1>
        <ul>
          {courses[0].parts.map((part)=>{
            return (
              <li key={part.id}>Part name: {part.name}. Number of exercises: {part.exercises}  </li>
            )
          })}
        </ul>
        <h2>Total number of exercises: {courses[0].parts.reduce((total,part)=>{
          return total + part.exercises
        },0)} </h2>
        <h1 key={courses[1].id}>Enviroment: {courses[1].name} </h1>
        <ul>
          {courses[1].parts.map((part)=>{
            return(
              <li  key={part.id}>Name: {part.name}. Number of exercises: {part.exercises}  </li>
            )
          })}
        </ul>
        <h2>Total number of exercises: {courses[1].parts.reduce((total2, part2)=>{
          return total2 + part2.exercises
        },0)} </h2>
      </div>
    )
  }
  export default Course