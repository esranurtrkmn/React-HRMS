import axios from "axios"

export default class JobAdvertService{

    add(values){
        return axios.post("http://localhost:8080/api/jobadvert/add",values)
    }

    getJobAdverts(){
        return axios.get("http://localhost:8080/api/jobadvert/getByStatus")
    };

    getJobAdvertById(id){
        
        return axios.get("http://localhost:8080/api/jobadvert/getbyid?id="+id)
    }

    getActiveJobAdvertsByEmployerId(id){
        return axios.get("http://localhost:8080/api/jobadvert/getAllOpenJobAdvertByEmployer?id="+id)
    }

   
}

