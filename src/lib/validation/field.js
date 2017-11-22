export default function field(name) {
  return (target, key) => {
    if (target.fields === undefined) {
      target.fields = {};
    }
    target.fields[key] = name;
  };
}
