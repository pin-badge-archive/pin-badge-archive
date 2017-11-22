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
      case 'ASSIGNED':
        return SurveyStatus.Assigned;
      case 'COMPLETED':
        return SurveyStatus.Completed;
      case 'CANCELED':
        return SurveyStatus.Cancelled;
      default:
        return null;
    }
  }

  @computed
  get startAt() {
    return moment(this.source.startAt).format('YYYY-MM-DD');
  }

  @computed
  get endAt() {
    return moment(this.source.endAt).format('YYYY-MM-DD');
  }

  @computed
  get createdAt() {
    return moment(this.source.createdAt).format('YYYY-MM-DD');
  }

  @computed
  get itemId() {
    return this.source.itemId;
  }

  @computed
  get itemName() {
    return this.source.itemName;
  }

  @computed
  get itemImages() {
    return this.source.itemImages || [];
  }

  @computed
  get itemPrice() {
    return this.source.itemPrice.toLocaleString() || '-';
  }

  @computed
  get itemSpec() {
    return this.source.itemSpec || '-';
  }

  @computed
  get itemThumbnail() {
    return this.source.itemThumbnail;
  }

  @computed
  get options() {
    return this.source.options || [];
  }

  @computed
  get sellerId() {
    return this.source.sellerId;
  }

  @computed
  get sellerName() {
    return this.source.sellerName;
  }

}
