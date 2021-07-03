import axios from "axios";


export default class ResumeService {

    getResumes() {
        return axios.get("http://localhost:8080/api/resume/getall")
    }

    getResumeById(id) {

        return axios.get("http://localhost:8080/api/resume/getbyid?id="+id)
    }

    getByCandidateId(id){
        return axios.get("http://localhost:8080/api/resume/getByCandidateId?id="+id)
    }    

    update(resume) {
        return axios.put("http://localhost:8080/api/resume/update", resume)
    }
}
