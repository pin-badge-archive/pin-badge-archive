import moment from "moment";

import factory from "./factory";

export default function date(format, customMessage) {
  const defaultMessage = `날짜 입력형식이 잘못되었습니다 (올바른 예: ${moment().format(
    format
  )})`;
  const rule = (x) =>
    Promise.resolve(moment(x, format, true).isValid());
  return factory(defaultMessage, customMessage, rule);
}
