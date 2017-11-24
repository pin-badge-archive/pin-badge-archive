import { computed } from "mobx";
import moment from "moment";

import Entity from "lib/models/Entity";

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

export default class Survey extends Entity {

  // @computed
  // get status() {
  //   switch (this.source.status) {
  //     case 'AWAITING':
  //       return SurveyStatus.Awaiting;
  //     case 'ASSIGNED':
  //       return SurveyStatus.Assigned;
  //     case 'COMPLETED':
  //       return SurveyStatus.Completed;
  //     case 'CANCELED':
  //       return SurveyStatus.Cancelled;
  //     default:
  //       return null;
  //   }
  // }

  @computed
  get startAt() {
    return moment(this.source.start_at).format('YYYY-MM-DD');
  }

  @computed
  get endAt() {
    return moment(this.source.end_at).format('YYYY-MM-DD');
  }

  @computed
  get createdAt() {
    return moment(this.source.created_at).format('YYYY-MM-DD');
  }

  @computed
  get itemId() {
    return this.source.item_id;
  }

  @computed
  get itemName() {
    return this.source.item_name;
  }

  @computed
  get itemDescription() {
    return this.source.item_description;
  }

  @computed
  get itemImages() {
    return this.source.item_images || [];
  }

  @computed
  get itemLike() {
    return this.source.item_like;
  }

  @computed
  get itemPrice() {
    return this.source.item_price.toLocaleString() || '-';
  }

  @computed
  get itemSpec() {
    return this.source.item_spec || '-';
  }

  @computed
  get itemThumbnail() {
    return this.source.item_thumbnail;
  }

  @computed
  get options() {
    return this.source.options || [];
  }

  @computed
  get sellerId() {
    return this.source.seller_id;
  }

  @computed
  get sellerName() {
    return this.source.seller_name;
  }

}
