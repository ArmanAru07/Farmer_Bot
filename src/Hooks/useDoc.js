import { useEffect, useState } from "react";

// const [isAdmin] = useAdmin(user?.email) 

const useDoc = (email) => {

    //alert(email)

    const [isDoc, setIsDoc] = useState(false);

    useEffect(() => {

        fetch(`http://localhost:4000/doctorsCollection/${email}`)
            .then((res) => res.json()).then((data) => {
                setIsDoc(data);
            }).catch((error) => {
                console.log(error.message);
            })

    }, [email])


    return [isDoc]
}

export default useDoc;