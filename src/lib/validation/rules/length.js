import factory from "./factory";

export default function length(
  minLength,
  maxLength,
  customMessage
) {
  const defaultMessage = `${minLength}글자이상 ${
    maxLength
  }글자 이하로 입력해주세요`;
  const rule = (x) =>
    Promise.resolve(x.length >= minLength && x.length <= maxLength);
  return factory(defaultMessage, customMessage, rule);
}
