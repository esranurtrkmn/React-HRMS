import axios from "axios"

export default class EducationService{

    getEducations(){
        return axios.get("http://localhost:8080/api/education/getall")
    };
}