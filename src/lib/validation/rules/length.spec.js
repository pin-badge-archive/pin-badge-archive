import { useStrict } from "mobx";
import field from "../field";
import Form from "../Form";
import length from "./length";

useStrict(true);

describe("@length", () => {
  class FooForm extends Form {
    @field("이름")
    @length(5, 10)
    name;

    @field("주소")
    @length(10, 20, "주소가 잘못되었습니다")
    address;
  }

  it("gives validation errors if given string is too short", done => {
    const foo = new FooForm();
    foo.update({ name: "김메쉬", address: "서울" });
    foo.validate().then(() => {
      expect(foo.errors.name).toEqual(
        "이름은 5글자이상 10글자 이하로 입력해주세요"
      );
      expect(foo.errors.address).toEqual("주소가 잘못되었습니다");
      done();
    });
  });

  it("gives validation errors if given string is too long", () => {
    const foo = new FooForm();
    foo.update({
      address: "서울특별시 강남구 삼성동 서울특별시 강남구 삼성동 서울 특별시",
      name: "김메쉬코리아물류스타트업"
    });
    foo.validate().then(() => {
      expect(foo.errors.name).toEqual(
        "이름은 5글자이상 10글자 이하로 입력해주세요"
      );
      expect(foo.errors.address).toEqual("주소가 잘못되었습니다");
    });
  });

  it("gives no validation errors if given string is in the right length", () => {
    const foo = new FooForm();
    foo.update({
      address: "서울특별시 강남구 삼성동",
      name: "김메쉬코리아"
    });
    foo.validate().then(() => {
      expect(foo.errors.name).toEqual(undefined);
      expect(foo.errors.address).toEqual(undefined);
    });
  });
});
