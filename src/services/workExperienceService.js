import axios from "axios"

export default class WorkExperienceService{

    getWorkExperiences(){
        return axios.get("http://localhost:8080/api/workexperience/getall")
    }

    getByResumeId(id){
        return axios.get("http://localhost:8080/api/workexperience/getByResumeId?id="+id)
    }

    update(workExperience) {
        return axios.put("http://localhost:8080/api/workexperience/update", workExperience)
    }
}