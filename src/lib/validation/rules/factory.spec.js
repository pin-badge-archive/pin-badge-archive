import { useStrict } from "mobx";
import field from "../field";
import Form from "../Form";
import factory from "./factory";

useStrict(true);

describe("factory", () => {
  const loveFoo = (customMessage) => {
    const defaultMessage = "언제나 푸우";
    const rule = (x) => Promise.resolve(x === "foo");
    return factory(defaultMessage, customMessage, rule);
  };

  class FooForm extends Form {
    @field("이름")
    @loveFoo()
    name;

    @field("나이")
    @loveFoo()
    age;

    @field("주소")
    @loveFoo("특별한 메세지입니다")
    address;
  }

  it("add validation rules for a given field", () => {
    const foo = new FooForm();
    expect(foo.rules.name.length).toEqual(1);
    expect(foo.rules.age.length).toEqual(1);
    expect(foo.rules.address.length).toEqual(1);
  });

  it("shows default messages with proper field names and postposition if a custom message is not given", done => {
    const foo = new FooForm({
      name: "김기사",
      age: "14",
      address: "서울특별시"
    });
    foo.validate().then(() => {
      expect(foo.errors.name).toEqual("이름은 언제나 푸우");
      expect(foo.errors.age).toEqual("나이는 언제나 푸우");
      expect(foo.errors.address).not.toEqual("언제나 푸우");
      done();
    });
  });

  it("shows custom messages if given", done => {
    const foo = new FooForm({ address: "서울특별시" });
    foo.validate().then(() => {
      expect(foo.errors.address).toEqual("특별한 메세지입니다");
      done();
    });
  });
});
