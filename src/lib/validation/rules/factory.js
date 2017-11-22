const withPostposition = (x) => {
  const code = x.charCodeAt(x.length - 1);

  if (0xac00 <= code && code <= 0xd7a3) {
    if ((code - 0xac00) % 28 > 0) {
      return `${x}은`;
    }
    return `${x}는`;
  }
  return x;
};

export default function factory(
  defaultMessage,
  customMessage,
  rule,
  isRequired = false
) {
  return (target, key) => {
    if (target.rules === undefined) {
      target.rules = {};
    }

    if (target.rules[key] === undefined) {
      target.rules[key] = [];
    }

    target.rules[key].push((x) => {
      const ruleCheck =
        x === undefined || x === null || x === ""
          ? Promise.resolve(!isRequired)
          : rule(x);

      return ruleCheck.then(res => {
        if (res) {
          return undefined;
        }

        if (customMessage) {
          return customMessage;
        } else if (target.fields && target.fields[key]) {
          return `${withPostposition(target.fields[key])} ${defaultMessage}`;
        }
        return defaultMessage;
      });
    });
  };
}
