import { computed } from "mobx";
import moment from "moment";

// import { CargoInfoDto, SurveyDto } from "@meshkorea/mesh-one-api";

export const SurveyStatus = {
  Awaiting: "대기",
  Submitted: "접수",
  Assigned: "배정",
  PickedUp: "픽업",
  Delivered: "완료",
  Cancelled: "취소",
}

export const AllSurveyStatuses = [
  SurveyStatus.Awaiting,
  SurveyStatus.Submitted,
  SurveyStatus.Assigned,
  SurveyStatus.PickedUp,
  SurveyStatus.Delivered,
  SurveyStatus.Cancelled,
];

export default class Survey {
  @computed
  get totalCharge(){
    return (
      this.source.baseCharge.amount +
      this.source.salesMarginFee.amount +
      this.source.extraCharge.amount +
      this.source.expenseFee.amount
    );
  }

  @computed
  get status() {
    switch (this.source.status) {
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

  @computed
  get assignedTime() {
    return this.formatTime(this.source.assignedAt);
  }

  @computed
  get originDong() {
    return this.source.origin &&
      this.source.origin.address &&
      this.source.origin.address.eupMyunDong
      ? this.source.origin.address.eupMyunDong
      : "-";
  }
}
