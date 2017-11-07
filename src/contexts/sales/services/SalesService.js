
// import {
//   CargoInfoDto,
//   LiveControllerApi,
//   ManagerFindSalessReq,
//   SalesCountDto,
//   SalesDto
// } from "@meshkorea/mesh-one-api";
import { map } from "lodash";

// import SalesFilter from "../commands/SalesFilter";
import Sales, { SalesCount, SalesStatus, PaymentTime, Volume } from "../models/Sales";

export default class SalesService {
  // liveControllerApi;

  // constructor(liveControllerApi) {
  //   this.liveControllerApi = liveControllerApi;
  // }

  findSaless(
    filter,
    page,
    pageSize,
  ) {
    // return this.liveControllerApi
    //   .findSalessUsingPOST({
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
    //       count: toSalesCount(res.orderCount),
    //       filter
    //     },
    //     sources: res.orders
    //   }));
  }

  getSales(id) {
    // return this.liveControllerApi
    //   .getSalesDetailUsingPOST(id)
    //   .then(res => res.order);
  }
}

function toSalesCount(orderCountDto) {
  return {
    [SalesStatus.Awaiting]: orderCountDto.awaitingSalessCount || 0,
    [SalesStatus.Assigned]: orderCountDto.assignedSalessCount || 0,
    [SalesStatus.Cancelled]: orderCountDto.canceledSalessCount || 0,
    [SalesStatus.Delivered]: orderCountDto.deliveredSalessCount || 0,
    [SalesStatus.PickedUp]: orderCountDto.pickedUpSalessCount || 0,
    [SalesStatus.Submitted]: orderCountDto.submittedSalessCount || 0
  };
}

function toSalesStatus(status) {
  switch (status) {
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
