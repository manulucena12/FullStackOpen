import { useState } from "react"
import { useImperativeHandle } from "react"
import { forwardRef } from "react"
import PropTypes from 'prop-types'
export const Togglable = forwardRef(({children, buttonLabel}, ref) => {
    const [visibility, setVisibility] = useState(false)
    const showChildren = {display: visibility ? '' : 'none'}
    const hideChildren = {display: visibility ? 'none' : ''}
    const handleVisibility = () => {
        setVisibility(!visibility)
    }
    useImperativeHandle(ref, () => ({
        handleVisibility
      }), [])
    return(
        <>
            <div style={showChildren}>
                {children}
                <button onClick={handleVisibility}>Close</button>
            </div>
            <div style={hideChildren}>
                <button onClick={handleVisibility}>{buttonLabel}</button>
            </div>
        </>
    )
})

Togglable.propTypes = {
    buttonLabel: PropTypes.string.isRequired
}