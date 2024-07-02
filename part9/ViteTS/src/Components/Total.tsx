interface Course {
    name: string,
    exerciseCount: number
}

interface ContentProps  {
    courseParts: Course[]
}

export const Total: React.FC<ContentProps> = ({courseParts}) => {
    const totalExercises = courseParts.reduce((sum, part) => sum + part.exerciseCount, 0)
    return  (
        <div>
            <h3>Number of exercises {totalExercises} </h3>
        </div>
    )
}