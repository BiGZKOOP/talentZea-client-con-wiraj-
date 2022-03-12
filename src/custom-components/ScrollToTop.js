// ScrollToTop.jsx
import { useEffect } from "react"

const ScrollToTop = (props) => {
    useEffect(() => {
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' })
        }, 0)
    }, [])

    return <>{props.children}</>
}

export default ScrollToTop
