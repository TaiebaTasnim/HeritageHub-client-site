import axios from 'axios';
import { useContext } from 'react';
import { useEffect } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useNavigate } from 'react-router-dom';


const axiosInstance=axios.create({
      baseURL:"http://localhost:4000",
      withCredentials:true
})

const useAxiosSecure = () => {
      const {signout}=useContext(AuthContext)
      const navigate=useNavigate()

      useEffect(()=>{
            axiosInstance.interceptors.response.use(response=>{
                  return response
            },(error)=>{
                  if(error.status===401 || error.status===403)
                  {

                        signout()
                        .then((result) => navigate('/login'))
                        .catch(error => error.message)

                  }
                  return Promise.reject(error)
            })

      },[])
      return axiosInstance;
};

export default useAxiosSecure;