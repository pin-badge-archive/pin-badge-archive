import { computed } from "mobx";
import moment from "moment";

// import { CargoInfoDto, AccountDto } from "@meshkorea/mesh-one-api";

export const AccountStatus = {
  Awaiting: "대기",
  Submitted: "접수",
  Assigned: "배정",
  PickedUp: "픽업",
  Delivered: "완료",
  Cancelled: "취소",
}

export const AllAccountStatuses = [
  AccountStatus.Awaiting,
  AccountStatus.Submitted,
  AccountStatus.Assigned,
  AccountStatus.PickedUp,
  AccountStatus.Delivered,
  AccountStatus.Cancelled,
];

export default class Account {
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
      // case AccountDto.StatusEnum.AWAITING:
      //   return AccountStatus.Awaiting;
      // case AccountDto.StatusEnum.SUBMITTED:
      //   return AccountStatus.Submitted;
      // case AccountDto.StatusEnum.ASSIGNED:
      //   return AccountStatus.Assigned;
      // case AccountDto.StatusEnum.PICKEDUP:
      //   return AccountStatus.PickedUp;
      // case AccountDto.StatusEnum.DELIVERED:
      //   return AccountStatus.Delivered;
      // case AccountDto.StatusEnum.CANCELED:
      //   return AccountStatus.Cancelled;
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
