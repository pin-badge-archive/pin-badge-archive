import { computed } from "mobx";
import moment from "moment";

// import { CargoInfoDto, ArchiveDto } from "@meshkorea/mesh-one-api";

export const ArchiveStatus = {
  Awaiting: "대기",
  Submitted: "접수",
  Assigned: "배정",
  PickedUp: "픽업",
  Delivered: "완료",
  Cancelled: "취소",
}

export const AllArchiveStatuses = [
  ArchiveStatus.Awaiting,
  ArchiveStatus.Submitted,
  ArchiveStatus.Assigned,
  ArchiveStatus.PickedUp,
  ArchiveStatus.Delivered,
  ArchiveStatus.Cancelled,
];

export default class Archive {
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
      // case ArchiveDto.StatusEnum.AWAITING:
      //   return ArchiveStatus.Awaiting;
      // case ArchiveDto.StatusEnum.SUBMITTED:
      //   return ArchiveStatus.Submitted;
      // case ArchiveDto.StatusEnum.ASSIGNED:
      //   return ArchiveStatus.Assigned;
      // case ArchiveDto.StatusEnum.PICKEDUP:
      //   return ArchiveStatus.PickedUp;
      // case ArchiveDto.StatusEnum.DELIVERED:
      //   return ArchiveStatus.Delivered;
      // case ArchiveDto.StatusEnum.CANCELED:
      //   return ArchiveStatus.Cancelled;
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
