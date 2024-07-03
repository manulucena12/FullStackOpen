import { useEffect, useState } from "react";
import { ContentProps, CoursePartBackground, CoursePartGroup, CoursePartBackend } from "../../Types/course";

export const Parts: React.FC<ContentProps> = ({courseParts}) => {
    const [group,setGroup] = useState<CoursePartGroup | null>(null)
    const [background,setBackground] = useState<CoursePartBackground | null>(null)
    const [special,setSpecial] = useState<CoursePartBackend | null>(null)
    useEffect(() => {
        courseParts.forEach(part => {
            switch (part.kind) {
                case "group":
                    setGroup(part);
                    break;
                case "background":
                    setBackground(part);
                    break;
                case "special":
                    setSpecial(part);
                    break;
                default:
                    break;
            }
        })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    return (
        <div>
            <ul>
                {courseParts
                    .map(c=> (
                        <li>
                            <h4>{c.name} has {c.exerciseCount} exercises</h4>
                            <p> {c.description ? c.description : 'No description' } </p>
                            <p> {c.kind === 'group' ?  group?.groupProjectCount : null } </p>
                            <p> {c.kind === 'background' ? background?.backgroundMaterial : null } </p>
                            <p> {c.kind === 'special' 
                             ? special?.requirements.map(r=>(r)) 
                             : null } </p>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}