import axios from "axios"

export default class DigitalSkillService{

    getSkills(){
        return axios.get("http://localhost:8080/api/digitalskill/getall")
    };
}