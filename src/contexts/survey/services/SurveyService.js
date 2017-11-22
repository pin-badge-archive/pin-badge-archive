
// import {
//   CargoInfoDto,
//   LiveControllerApi,
//   ManagerFindSurveysReq,
//   SurveyCountDto,
//   SurveyDto
// } from "@meshkorea/mesh-one-api";
import { map } from "lodash";

import { FirebaseDb } from "app";

import SurveyFilter from "../commands/SurveyFilter";
import Survey, { SurveyCount, SurveyStatus, PaymentTime, Volume } from "../models/Survey";

export default class SurveyService {
  // liveControllerApi;

  // constructor(liveControllerApi) {
  //   this.liveControllerApi = liveControllerApi;
  // }

  findSurveys(
    filter,
    page,
    pageSize,
  ) {
    // return this.liveControllerApi
    //   .findSurveysUsingPOST({
    //     startDate: filter.startDate,
    //     endDate: filter.endDate,
    //     page: page - 1,
    //     size: pageSize,
    //     statuses: map(filter.statuses, toStatusEnum)
    //   })
    //   .then(res => ({
    //     result: {
    //       page,
    //       ids: map(res.orders, x => x.id),
    //       total: res.totalItems,
    //       totalPages: res.totalPages,
    //       count: toSurveyCount(res.orderCount),
    //       filter
    //     },
    //     sources: res.orders
    //   }));
  }

  getSurvey(id) {
    return FirebaseDb.ref(`surveys/${id}`)
      .once('value')
      .then(snapshot => {
        console.log(snapshot);
      });
  }
}

function toSurveyCount(orderCountDto) {
  return {
    [SurveyStatus.Awaiting]: orderCountDto.awaitingSurveysCount || 0,
    [SurveyStatus.Assigned]: orderCountDto.assignedSurveysCount || 0,
    [SurveyStatus.Cancelled]: orderCountDto.canceledSurveysCount || 0,
    [SurveyStatus.Delivered]: orderCountDto.deliveredSurveysCount || 0,
    [SurveyStatus.PickedUp]: orderCountDto.pickedUpSurveysCount || 0,
    [SurveyStatus.Submitted]: orderCountDto.submittedSurveysCount || 0
  };
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
