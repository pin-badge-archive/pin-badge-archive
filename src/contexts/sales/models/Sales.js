import { computed } from "mobx";
import moment from "moment";

// import { CargoInfoDto, SalesDto } from "@meshkorea/mesh-one-api";

export const SalesStatus = {
  Awaiting: "대기",
  Submitted: "접수",
  Assigned: "배정",
  PickedUp: "픽업",
  Delivered: "완료",
  Cancelled: "취소",
}

export const AllSalesStatuses = [
  SalesStatus.Awaiting,
  SalesStatus.Submitted,
  SalesStatus.Assigned,
  SalesStatus.PickedUp,
  SalesStatus.Delivered,
  SalesStatus.Cancelled,
];

export default class Sales {
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
      // case SalesDto.StatusEnum.AWAITING:
      //   return SalesStatus.Awaiting;
      // case SalesDto.StatusEnum.SUBMITTED:
      //   return SalesStatus.Submitted;
      // case SalesDto.StatusEnum.ASSIGNED:
      //   return SalesStatus.Assigned;
      // case SalesDto.StatusEnum.PICKEDUP:
      //   return SalesStatus.PickedUp;
      // case SalesDto.StatusEnum.DELIVERED:
      //   return SalesStatus.Delivered;
      // case SalesDto.StatusEnum.CANCELED:
      //   return SalesStatus.Cancelled;
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
