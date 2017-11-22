import { forEach, map } from "lodash";
import mobx, { action, computed, observable, runInAction } from "mobx";
import moment from "moment";

import Store from "lib/models/Store";

import SurveyFilter from "./commands/SurveyFilter";
import Survey from "./models/Survey";
import SurveyService from "./services/SurveyService";

export default class SurveyStore extends Store {
  @observable filter = new SurveyFilter({
    // category: '',
    // keyword: '',
  });
    
  @observable pageSize = 20;
  @observable searchResult = {
    page: 1,
    total: 0,
    totalPages: 1,
    count: {},
    filter: new SurveyFilter(),
  };

  @observable selectedId;

  service;

  constructor() {
    super();
    this.service = new SurveyService();
  }

  @computed
  get page() {
    return this.searchResult.page;
  }

  @computed
  get totalPages() {
    return this.searchResult.totalPages;
  }

  @computed
  get surveys() {
    return map(this.searchResult.ids, x => this.entities[x]);
  }

  @computed
  get survey() {
    return this.selectedId ? this.entities[this.selectedId] : undefined;
  }

  @computed
  get surveyCount() {
    return this.searchResult.count;
  }

  @action.bound
  search() {
    return this.service.getSurveys(this.filter, 1, this.pageSize)
      // .then(res =>
      //   runInAction(() => {
      //     console.log(res);
      //     this.searchResult = res.result;
      //     this.update(res.sources);
      //   })
      // );
  }

  @action.bound
  changePage(page) {
    return this.service.getSurveys(this.filter, page, this.pageSize)
      .then(res =>
        runInAction(() => {
          console.log(res);
          this.searchResult = res.result;
          this.update(res.sources);
        })
      );
  }

  @action.bound
  load(id) {
    this.service.getSurvey(id).then(res => {
      runInAction(() => {
        this.update([res]);
      });
    });
  }

  update(sources) {
    forEach(sources, x => {
      if (typeof this.entities[x.id] === "undefined") {
        this.entities[x.id] = new Survey(x.id, x);
      } else {
        this.entities[x.id].update(x);
      }
    });
  }
}
