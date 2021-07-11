import axios from "axios"

export default class LanguageService{

    getLanguages(){
        return axios.get("http://localhost:8080/api/language/getall")
    }

    getByResumeId(id){
        return axios.get("http://localhost:8080/api/language/getByResumeId?id="+id)
    }

    update(language) {
        return axios.put("http://localhost:8080/api/language/update", language)
    }
}