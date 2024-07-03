import { useState } from "react"
import { Diary } from "../../Types/diaries"
import { useDispatch } from "react-redux"
import { createDiaryAction } from "../../Redux/Actions/diaries"
import { AppDispatch } from "../../Redux/store"

export const DiaryForm: React.FC = () => {
    const dispatch: AppDispatch = useDispatch()
    const [weather, setWeather] = useState<string>('')
    const [visibility, setVisibility] = useState<string>('')
    const [comment, setComment] = useState<string>('')

    const newDiary: Diary = {
        weather,
        visibility,
        comment
    }

    const handleDiary = (event: React.SyntheticEvent) => {
        event.preventDefault()
        dispatch(createDiaryAction(newDiary))
    }

    return (
        <div>
            <form onSubmit={handleDiary} >
                <fieldset>
                    <legend>
                        How was the weather?
                    </legend>
                    <label>
                        <input type="radio" name="weather" onClick={() => setWeather('sunny')} /> Sunny
                    </label>
                    <label>
                        <input type="radio" name="weather"  onClick={() => setWeather('cloudy')} /> Cloudy
                    </label>
                    <label>
                        <input type="radio" name="weather"  onClick={() => setWeather('rainy')} /> Rainy
                    </label>
                    <label>
                        <input type="radio" name="weather"  onClick={() => setWeather('stormy')} /> Stormy
                    </label>
                    <label>
                        <input type="radio" name="weather"  onClick={() => setWeather('windy')} /> Windy
                    </label>
                </fieldset>
                <fieldset>
                    <legend>
                        How was the visibility?
                    </legend>
                    <label>
                        <input type="radio" name="visibility" onClick={() => setVisibility('great')}/> Great
                    </label>
                    <label>
                        <input type="radio" name="visibility" onClick={() => setVisibility('ok')}/> Ok
                    </label>
                    <label>
                        <input type="radio" name="visibility" onClick={() => setVisibility('good')}/> Good
                    </label>
                    <label>
                        <input type="radio" name="visibility" onClick={() => setVisibility('poor')}/> Poor
                    </label>
                </fieldset>
                <fieldset>
                    <legend>
                        Tell us something about your day!
                    </legend>
                    <input onChange={(event) => setComment(event?.target.value)} placeholder="Add comment..." />
                </fieldset>
                <button>Create entry</button>
            </form>
        </div>
    )
} 