import axios from "axios"

export default class EducationService{

    getEducations(){
        return axios.get("http://localhost:8080/api/education/getall")
    }

    getByResumeId(id){
        return axios.get("http://localhost:8080/api/education/getByResumeId?id="+id)
    }

    update(education) {
        return axios.put("http://localhost:8080/api/education/update", education)
    }
}