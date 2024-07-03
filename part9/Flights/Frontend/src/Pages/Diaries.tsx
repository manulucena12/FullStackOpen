import { RootState } from "../../Redux/store"
import { useSelector } from "react-redux"

export const Diaries: React.FC = () => {
    const diaries = useSelector((state: RootState) => state.diaries )
    return (
        <div>
            <h1>Hello</h1>
            <ul>
                {diaries
                   .map(d => (
                    <li key={d.id}>
                        {d.weather}
                    </li>
                   ))
                }
            </ul>
        </div>
    )
}