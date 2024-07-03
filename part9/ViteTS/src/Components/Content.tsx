import { ContentProps } from '../../Types/course'

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