import { useQuery } from '@tanstack/react-query'
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import useAxiosSecure from './useAxiosSecure';

const useClasses =()=>{
    const { user,loading } = useContext(AuthContext);
    const token = localStorage.getItem('access-token');
    const [axiosSecure] = useAxiosSecure();

    const { refetch, data: selectedClasses = [] } = useQuery({
        queryKey: ['classes', user?.email],
        enabled: !loading,
        // queryFn: async () => {
        //     const res = await fetch(`http://localhost:5000/classes?email=${user?.email}`,{headers:{
        //         authorization: `bearer ${token}`
        //     }})
        //     return res.json();
        // },
        queryFn: async () => {
            const res = await axiosSecure(`/classes?email=${user?.email}`)
            console.log('res from axios', res)
            return res.data;
        },
    })
    return [selectedClasses, refetch]

}

export default useClasses;