import { observe, useStrict } from "mobx";
import field from "./field";
import Form from "./Form";
import required from "./rules/required";

useStrict(true);

describe("Form", () => {
  class FooForm extends Form {
    @field("이름")
    @required()
    name;

    @field("주소")
    @required()
    address;
  }

  it("gives observable fields", () => {
    const foo = new FooForm();
    let observed = "";
    observe(foo, "name", change => {
      observed = change.newValue;
    });

    foo.update({ name: "ClareKang" });
    expect(observed).toEqual("ClareKang");
  });

  it("gives observable errors", done => {
    const foo = new FooForm();
    let observed = "";
    observe(foo.errors, "name", change => {
      observed = change.newValue;
    });

    foo.update({ name: "" });

    foo.validate().then(() => {
      expect(observed).toEqual("이름은 필수 입력값입니다");
      done();
    });
  });

  it("gives observable touched", () => {
    const foo = new FooForm();
    expect(foo.touched.name).toEqual(false);
    foo.update({ name: "ClareKang" });
    expect(foo.touched.name).toEqual(true);
  });

  it("validates asynchronous and touches all fields after that", done => {
    const foo = new FooForm();
    foo.update({ name: "ClareKang" });
    foo.validate().then(res => {
      expect(res).toEqual(false);
      expect(foo.errors.name).toEqual(undefined);
      expect(foo.errors.address).toEqual("주소는 필수 입력값입니다");
      expect(foo.touched.name).toEqual(true);
      expect(foo.touched.address).toEqual(true);
      done();
    });
  });

  it("throws an exception when updating an invalid field", () => {
    const foo = new FooForm();
    expect(() => {
      foo.update({ email: "hello@gmail.com" });
    }).toThrow();
  });

  it("can be initialized with default values", done => {
    const foo = new FooForm({ name: "ClareKang" });
    expect(foo.name).toEqual("ClareKang");
    expect(foo.touched.name).toEqual(false);
    expect(foo.touched.address).toEqual(false);

    foo.validate().then(res => {
      expect(res).toEqual(false);
      expect(foo.errors.name).toEqual(undefined);
      expect(foo.errors.address).toEqual("주소는 필수 입력값입니다");
      done();
    });
  });
});
