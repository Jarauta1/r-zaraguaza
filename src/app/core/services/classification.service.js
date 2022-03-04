import { environment } from "../../../environments/environments";
import { CONSTANTS } from "../utils/constants";

class ClassificationService {

  getTeams() {
    return fetch(environment.baseUrl + CONSTANTS.GET_TEAMS, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json()).then((data) => {
      return data;
    })
  }

  
}

export default new ClassificationService();