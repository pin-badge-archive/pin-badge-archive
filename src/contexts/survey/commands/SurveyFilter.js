import { Form, field, required } from "lib/validation";

export const SearchField = {
  Category: "카테고리",
  Keyword: "판매자",
}

export default class OrderFilter extends Form {
  @field("카테고리")
  @required()
  timePeriod;

  @field("검색어")
  keywords;
}
