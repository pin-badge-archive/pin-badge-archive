import { useStrict } from "mobx";
import field from "../field";
import Form from "../Form";
import required from "./required";

useStrict(true);

describe("@required", () => {
  class FooForm extends Form {
    @field("이름")
    @required()
    name;

    @field("나이")
    @required("나이는 꼭 입력해주세요")
    age;
  }

  it("gives validation errors for not initialized values", done => {
    const foo = new FooForm();
    foo.validate().then(() => {
      expect(foo.errors.name).toEqual("이름은 필수 입력값입니다");
      expect(foo.errors.age).toEqual("나이는 꼭 입력해주세요");
      done();
    });
  });

  it("gives no errors for non-empty values", done => {
    const foo = new FooForm();
    foo.update({ age: 15, name: "ClareKang" });
    foo.validate().then(() => {
      expect(foo.errors.name).toEqual(undefined);
      expect(foo.errors.age).toEqual(undefined);
      done();
    });
  });
});
