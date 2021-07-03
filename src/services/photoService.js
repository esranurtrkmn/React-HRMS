import axios from "axios"

export default class PhotoService{

   
    getByResumeId(id){
        return axios.get("http://localhost:8080/api/photo/getByResumeId?id="+id)
    }
    
}