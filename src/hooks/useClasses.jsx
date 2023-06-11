import { useQuery } from '@tanstack/react-query'
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const useClasses =()=>{
    const { user } = useContext(AuthContext);

    const { refetch, data: selectedClasses = [] } = useQuery({
        queryKey: ['classes', user?.email],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/classes?email=${user?.email}`)
            return res.json();
        },
    })
    return [selectedClasses, refetch]

}

export default useClasses;