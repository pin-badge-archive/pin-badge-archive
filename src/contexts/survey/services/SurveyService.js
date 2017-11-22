import { map } from "lodash";

import { FirebaseDb } from "app";

import SurveyFilter from "../commands/SurveyFilter";
import Survey from "../models/Survey";

class SurveyService {
  // constructor() {
  // }

  getSurveys(filter, page, pageSize) {
    return FirebaseDb.ref('surveys')
      .limitToLast(pageSize)
      .once('value').then(snapshot => {
        console.log(snapshot.val());
      })
      // .once('value', snapshot => {
      //   console.log(snapshot);
      //   // return {
      //   //   result: {
      //   //     page,

      //   //   },
      //   //   sources: res,
      //   // };
      // });
  }

  getSurvey(id) {
    return FirebaseDb.ref(`surveys/${id}`)
      .once('value')
      .then(snapshot => {
        console.log(snapshot);
      });
  }
}

function toSurveyStatus(status) {
  switch (status) {
    // case SurveyDto.StatusEnum.AWAITING:
    //   return SurveyStatus.Awaiting;
    // case SurveyDto.StatusEnum.SUBMITTED:
    //   return SurveyStatus.Submitted;
    // case SurveyDto.StatusEnum.ASSIGNED:
    //   return SurveyStatus.Assigned;
    // case SurveyDto.StatusEnum.PICKEDUP:
    //   return SurveyStatus.PickedUp;
    // case SurveyDto.StatusEnum.DELIVERED:
    //   return SurveyStatus.Delivered;
    // case SurveyDto.StatusEnum.CANCELED:
    //   return SurveyStatus.Cancelled;
    default:
      return null;
  }
}

export default SurveyService;
