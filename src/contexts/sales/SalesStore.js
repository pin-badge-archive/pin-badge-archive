import { forEach, map } from "lodash";
import mobx, { action, computed, observable, runInAction } from "mobx";
import moment from "moment";

// import Store from "lib/models/Store";

// import SalesFilter, { TimePeriod } from "./commands/SalesFilter";
import Sales from "./models/Sales";
import SalesService, { SalesSearchResult } from "./services/SalesService";

export default class SalesStore {
  // @observable
  // public filter: SalesFilter = new SalesFilter({
  //   timePeriod: TimePeriod.Day,
  //   targetDay: moment().format("YYYY-MM-DD"),
  //   statuses: AllSalesStatuses
  // });

  // @observable public pageSize: number = 50;

  // @observable
  // private searchResult: SalesSearchResult = {
  //   page: 1,
  //   ids: [],
  //   total: 0,
  //   totalPages: 1,
  //   count: {},
  //   filter: new SalesFilter()
  // };

  // private orderService: SalesService;

  // constructor(orderService: SalesService) {
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
  //   this.orderService.findSaless(this.filter, 1, this.pageSize).then(res =>
  //     runInAction(() => {
  //       this.searchResult = res.result;
  //       this.update(res.sources);
  //     })
  //   );
  // }

  // @action.bound
  // public changePage(page: number) {
  //   this.orderService
  //     .findSaless(this.searchResult.filter, page, this.pageSize)
  //     .then(res =>
  //       runInAction(() => {
  //         this.searchResult = res.result;
  //         this.update(res.sources);
  //       })
  //     );
  // }

  // @action.bound
  // public load(id: number) {
  //   this.orderService.getSales(id).then(res => {
  //     runInAction(() => {
  //       this.update([res]);
  //     });
  //   });
  // }

  // protected update(sources: SalesDto[]) {
  //   forEach(sources, x => {
  //     if (typeof this.entities[x.id] === "undefined") {
  //       this.entities[x.id] = new Sales(x.id, x);
  //     } else {
  //       this.entities[x.id].update(x);
  //     }
  //   });
  // }
}
