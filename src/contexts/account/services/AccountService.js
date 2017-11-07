
// import {
//   CargoInfoDto,
//   LiveControllerApi,
//   ManagerFindAccountsReq,
//   AccountCountDto,
//   AccountDto
// } from "@meshkorea/mesh-one-api";
import { map } from "lodash";

// import AccountFilter from "../commands/AccountFilter";
import Account, { AccountCount, AccountStatus, PaymentTime, Volume } from "../models/Account";

export default class AccountService {
  // liveControllerApi;

  // constructor(liveControllerApi) {
  //   this.liveControllerApi = liveControllerApi;
  // }

  findAccounts(
    filter,
    page,
    pageSize,
  ) {
    // return this.liveControllerApi
    //   .findAccountsUsingPOST({
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
    //       count: toAccountCount(res.orderCount),
    //       filter
    //     },
    //     sources: res.orders
    //   }));
  }

  getAccount(id) {
    // return this.liveControllerApi
    //   .getAccountDetailUsingPOST(id)
    //   .then(res => res.order);
  }
}

function toAccountCount(orderCountDto) {
  return {
    [AccountStatus.Awaiting]: orderCountDto.awaitingAccountsCount || 0,
    [AccountStatus.Assigned]: orderCountDto.assignedAccountsCount || 0,
    [AccountStatus.Cancelled]: orderCountDto.canceledAccountsCount || 0,
    [AccountStatus.Delivered]: orderCountDto.deliveredAccountsCount || 0,
    [AccountStatus.PickedUp]: orderCountDto.pickedUpAccountsCount || 0,
    [AccountStatus.Submitted]: orderCountDto.submittedAccountsCount || 0
  };
}

function toAccountStatus(status) {
  switch (status) {
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
