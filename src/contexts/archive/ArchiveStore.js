import mobx, { action, computed, observable, runInAction } from "mobx";
import { forEach, map } from "lodash";
import moment from "moment";

// import Store from "lib/models/Store";

// import ArchiveFilter, { TimePeriod } from "./commands/ArchiveFilter";
import Archive from "./models/Archive";
import ArchiveService, { ArchiveSearchResult } from "./services/ArchiveService";

export default class ArchiveStore {
  // @observable
  // public filter: ArchiveFilter = new ArchiveFilter({
  //   timePeriod: TimePeriod.Day,
  //   targetDay: moment().format("YYYY-MM-DD"),
  //   statuses: AllArchiveStatuses
  // });

  // @observable public pageSize: number = 50;

  // @observable
  // private searchResult: ArchiveSearchResult = {
  //   page: 1,
  //   ids: [],
  //   total: 0,
  //   totalPages: 1,
  //   count: {},
  //   filter: new ArchiveFilter()
  // };

  // private orderService: ArchiveService;

  // constructor(orderService: ArchiveService) {
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
  //   this.orderService.findArchives(this.filter, 1, this.pageSize).then(res =>
  //     runInAction(() => {
  //       this.searchResult = res.result;
  //       this.update(res.sources);
  //     })
  //   );
  // }

  // @action.bound
  // public changePage(page: number) {
  //   this.orderService
  //     .findArchives(this.searchResult.filter, page, this.pageSize)
  //     .then(res =>
  //       runInAction(() => {
  //         this.searchResult = res.result;
  //         this.update(res.sources);
  //       })
  //     );
  // }

  // @action.bound
  // public load(id: number) {
  //   this.orderService.getArchive(id).then(res => {
  //     runInAction(() => {
  //       this.update([res]);
  //     });
  //   });
  // }

  // protected update(sources: ArchiveDto[]) {
  //   forEach(sources, x => {
  //     if (typeof this.entities[x.id] === "undefined") {
  //       this.entities[x.id] = new Archive(x.id, x);
  //     } else {
  //       this.entities[x.id].update(x);
  //     }
  //   });
  // }
}
