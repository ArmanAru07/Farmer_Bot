import { useEffect } from "react"

const useTitle = (title) => {
    useEffect(() => {
        document.title = `${title} - Agrinama`
    }, [title]);
}

export default useTitle;


// And just use this code in evey file
// useTitle("Login");
