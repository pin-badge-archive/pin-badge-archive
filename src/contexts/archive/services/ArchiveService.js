
// import {
//   CargoInfoDto,
//   LiveControllerApi,
//   ManagerFindArchivesReq,
//   ArchiveCountDto,
//   ArchiveDto
// } from "@meshkorea/mesh-one-api";
import { map } from "lodash";

// import ArchiveFilter from "../commands/ArchiveFilter";
import Archive, { ArchiveCount, ArchiveStatus, PaymentTime, Volume } from "../models/Archive";

export default class ArchiveService {
  // liveControllerApi;

  // constructor(liveControllerApi) {
  //   this.liveControllerApi = liveControllerApi;
  // }

  findArchives(
    filter,
    page,
    pageSize,
  ) {
    // return this.liveControllerApi
    //   .findArchivesUsingPOST({
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
    //       count: toArchiveCount(res.orderCount),
    //       filter
    //     },
    //     sources: res.orders
    //   }));
  }

  getArchive(id) {
    // return this.liveControllerApi
    //   .getArchiveDetailUsingPOST(id)
    //   .then(res => res.order);
  }
}

function toArchiveCount(orderCountDto) {
  return {
    [ArchiveStatus.Awaiting]: orderCountDto.awaitingArchivesCount || 0,
    [ArchiveStatus.Assigned]: orderCountDto.assignedArchivesCount || 0,
    [ArchiveStatus.Cancelled]: orderCountDto.canceledArchivesCount || 0,
    [ArchiveStatus.Delivered]: orderCountDto.deliveredArchivesCount || 0,
    [ArchiveStatus.PickedUp]: orderCountDto.pickedUpArchivesCount || 0,
    [ArchiveStatus.Submitted]: orderCountDto.submittedArchivesCount || 0
  };
}

function toArchiveStatus(status) {
  switch (status) {
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
