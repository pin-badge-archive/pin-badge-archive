import { map } from "lodash";
import { FirebaseDb } from "app";

class SurveyService {

  api = FirebaseDb.ref('surveys');

  getSurveys(filter, page, pageSize) {
    return this.api
      .limitToLast(pageSize)
      .once('value')
      .then(snapshot => {
        
        return {
          result: {
            page,
            ids: Object.keys(snapshot.val()),
            filter,
          },
          sources: Object.values(snapshot.val()),
        };
      });
  }

  getSurvey(id) {
    return this.api.child(id)
      .once('value')
      .then(snapshot => {
        console.log(snapshot);
      });
  }
}

export default SurveyService;
