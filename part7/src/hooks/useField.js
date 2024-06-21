import { useState } from "react"

export const useField = () => {
    const [content, setContent] = useState('')
    const [author, setAuthor] = useState('')
    const [info, setInfo] = useState('')

    const getContent = (e) => setContent(e.target.value)
    const getAuthor = (e) => setAuthor(e.target.value)
    const getInfo = (e) => setInfo(e.target.value)
    const resetAll = (e) => {e.preventDefault();setContent('');setAuthor('');setInfo('')}

    return {
        content,
        getContent,
        author,
        getAuthor,
        info,
        getInfo,
        resetAll
    }
}