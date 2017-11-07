import { forEach, map } from "lodash";
import mobx, { action, computed, observable, runInAction } from "mobx";
import moment from "moment";

// import Store from "lib/models/Store";

// import AccountFilter, { TimePeriod } from "./commands/AccountFilter";
import Account from "./models/Account";
import AccountService, { AccountSearchResult } from "./services/AccountService";

export default class AccountStore {
  // @observable
  // public filter: AccountFilter = new AccountFilter({
  //   timePeriod: TimePeriod.Day,
  //   targetDay: moment().format("YYYY-MM-DD"),
  //   statuses: AllAccountStatuses
  // });

  // @observable public pageSize: number = 50;

  // @observable
  // private searchResult: AccountSearchResult = {
  //   page: 1,
  //   ids: [],
  //   total: 0,
  //   totalPages: 1,
  //   count: {},
  //   filter: new AccountFilter()
  // };

  // private orderService: AccountService;

  // constructor(orderService: AccountService) {
  //   super();
  //   this.orderService = orderService;
  // }

  // @computed
  // public get page() {
  //   return this.searchResult.page;
  // }

  // @computed
  // public get totalPages() {
  //   return this.searchResult.totalPages;
  // }

  // @computed
  // public get orders() {
  //   return map(this.searchResult.ids, x => this.entities[x]);
  // }

  // @computed
  // public get orderCount() {
  //   return this.searchResult.count;
  // }

  // @action.bound
  // public search() {
  //   this.orderService.findAccounts(this.filter, 1, this.pageSize).then(res =>
  //     runInAction(() => {
  //       this.searchResult = res.result;
  //       this.update(res.sources);
  //     })
  //   );
  // }

  // @action.bound
  // public changePage(page: number) {
  //   this.orderService
  //     .findAccounts(this.searchResult.filter, page, this.pageSize)
  //     .then(res =>
  //       runInAction(() => {
  //         this.searchResult = res.result;
  //         this.update(res.sources);
  //       })
  //     );
  // }

  // @action.bound
  // public load(id: number) {
  //   this.orderService.getAccount(id).then(res => {
  //     runInAction(() => {
  //       this.update([res]);
  //     });
  //   });
  // }

  // protected update(sources: AccountDto[]) {
  //   forEach(sources, x => {
  //     if (typeof this.entities[x.id] === "undefined") {
  //       this.entities[x.id] = new Account(x.id, x);
  //     } else {
  //       this.entities[x.id].update(x);
  //     }
  //   });
  // }
}
