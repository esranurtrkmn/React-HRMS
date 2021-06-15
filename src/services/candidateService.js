import axios from "axios"

export default class CandidateService {

    add(candidate) {

        return axios.post("http://localhost:8080/api/candidate/add", candidate)
    }

    getCandidates() {
        return axios.get("http://localhost:8080/api/candidate/getall")
    }
}