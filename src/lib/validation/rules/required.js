import factory from "./factory";

export default function required(customMessage) {
  const defaultMessage = "필수 입력값입니다";
  const rule = () => Promise.resolve(true);
  return factory(defaultMessage, customMessage, rule, true);
}
