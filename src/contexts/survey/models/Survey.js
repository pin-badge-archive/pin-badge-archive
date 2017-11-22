import { computed } from "mobx";
import moment from "moment";

export const SurveyStatus = {
  Awaiting: "대기",
  Assigned: "진행",
  Completed: "완료",
  Cancelled: "취소",
}

export const AllSurveyStatuses = [
  SurveyStatus.Awaiting,
  SurveyStatus.Assigned,
  SurveyStatus.Completed,
  SurveyStatus.Cancelled,
];

export default class Survey {

  @computed
  get status() {
    switch (this.source.status) {
      case 'AWAITING':
        return SurveyStatus.Awaiting;
      case 'SUBMITTED':
        return SurveyStatus.Submitted;
      case 'ASSIGNED':
        return SurveyStatus.Assigned;
      case 'PICKEDUP':
        return SurveyStatus.PickedUp;
      case 'DELIVERED':
        return SurveyStatus.Delivered;
      case 'CANCELED':
        return SurveyStatus.Cancelled;
      default:
        return null;
    }
  }

  @computed
  get startAt() {
    return moment(this.startAt).format('YYYY-MM-DD');
  }
}
