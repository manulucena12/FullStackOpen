import { RootState } from "../../Redux/store"
import { useSelector } from "react-redux"
import { DiaryForm } from "../Components/Form"

export const Diaries: React.FC = () => {
    const diaries = useSelector((state: RootState) => state.diaries )
    return (
        <div>
            <h1>Hello</h1>
            <ul>
                {diaries
                   .map((d, index) => (
                    <li key={d.id}>
                        Day {index +1}
                        <hr></hr>
                        <p></p>
                        Weather: {d.weather}
                        <p></p>
                        Visibility: {d.visibility}
                        <p></p>
                        Comments : {d.comment ? d.comment : 'No comments'}
                    </li>
                   ))
                }
            </ul>
            <DiaryForm/>
        </div>
    )
}