import { forEach, map } from "lodash";
import mobx, { action, computed, observable, runInAction } from "mobx";
import moment from "moment";

import Store from "lib/models/Store";

import SurveyFilter from "./commands/SurveyFilter";
import Survey from "./models/Survey";
import SurveyService, { SurveySearchResult } from "./services/SurveyService";

export default class SurveyStore {
  @observable filter = new SurveyFilter({
    category: '',
    keyword: '',
  });

  @observable pageSize = 20;
  @observable searchResult = {
    page: 1,
    total: 0,
    totalPages: 1,
    count: {},
  };

  constructor() {
    // super();
    this.service = SurveyService;
  }

  @computed
  get page() {
    return this.searchResult.page;
  }

  @computed
  get totalPages() {
    return this.searchResult.totalPages;
  }

  // @computed
  // public get surveys() {
  //   return map(this.searchResult.ids, x => this.entities[x]);
  // }

  // @computed
  // public get surveyCount() {
  //   return this.searchResult.count;
  // }

  // @action.bound
  // public search() {
  //   this.surveyService.findSurveys(this.filter, 1, this.pageSize).then(res =>
  //     runInAction(() => {
  //       this.searchResult = res.result;
  //       this.update(res.sources);
  //     })
  //   );
  // }

  @action.bound
  changePage(page) {
    // this.surveyService
    //   .findSurveys(this.searchResult.filter, page, this.pageSize)
    //   .then(res =>
    //     runInAction(() => {
    //       this.searchResult = res.result;
    //       this.update(res.sources);
    //     })
    //   );
  }

  // @action.bound
  // public load(id: number) {
  //   this.surveyService.getSurvey(id).then(res => {
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
