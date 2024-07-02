interface Course {
    name: string,
    exerciseCount: number
}

interface ContentProps  {
    courseParts: Course[]
}

export const Content: React.FC<ContentProps> = ({courseParts}) => {
    return  (
        <div>
            <ul>
                {courseParts
                    .map(c => (
                        <li key={c.name} > {c.name} {c.exerciseCount} </li>
                    ))
                }
            </ul>
        </div>
    )
}