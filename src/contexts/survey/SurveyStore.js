import { forEach, map } from "lodash";
import mobx, { action, computed, observable, runInAction } from "mobx";
import moment from "moment";

// import Store from "lib/models/Store";

// import SurveyFilter, { TimePeriod } from "./commands/SurveyFilter";
import Survey from "./models/Survey";
import SurveyService, { SurveySearchResult } from "./services/SurveyService";

export default class SurveyStore {
  // @observable
  // public filter: SurveyFilter = new SurveyFilter({
  //   timePeriod: TimePeriod.Day,
  //   targetDay: moment().format("YYYY-MM-DD"),
  //   statuses: AllSurveyStatuses
  // });

  // @observable public pageSize: number = 50;

  // @observable
  // private searchResult: SurveySearchResult = {
  //   page: 1,
  //   ids: [],
  //   total: 0,
  //   totalPages: 1,
  //   count: {},
  //   filter: new SurveyFilter()
  // };

  // private orderService: SurveyService;

  // constructor(orderService: SurveyService) {
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
  //   this.orderService.findSurveys(this.filter, 1, this.pageSize).then(res =>
  //     runInAction(() => {
  //       this.searchResult = res.result;
  //       this.update(res.sources);
  //     })
  //   );
  // }

  // @action.bound
  // public changePage(page: number) {
  //   this.orderService
  //     .findSurveys(this.searchResult.filter, page, this.pageSize)
  //     .then(res =>
  //       runInAction(() => {
  //         this.searchResult = res.result;
  //         this.update(res.sources);
  //       })
  //     );
  // }

  // @action.bound
  // public load(id: number) {
  //   this.orderService.getSurvey(id).then(res => {
  //     runInAction(() => {
  //       this.update([res]);
  //     });
  //   });
  // }

  // protected update(sources: SurveyDto[]) {
  //   forEach(sources, x => {
  //     if (typeof this.entities[x.id] === "undefined") {
  //       this.entities[x.id] = new Survey(x.id, x);
  //     } else {
  //       this.entities[x.id].update(x);
  //     }
  //   });
  // }
}
