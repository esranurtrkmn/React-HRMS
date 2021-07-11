import axios from "axios"

export default class DigitalSkillService{

    getSkills(){
        return axios.get("http://localhost:8080/api/digitalskill/getall")
    };

    getByResumeId(id){
        return axios.get("http://localhost:8080/api/digitalskill/getByResumeId?id="+id)
    }

    update(digitalSkill) {
        return axios.put("http://localhost:8080/api/digitalskill/update", digitalSkill)
    }
}