import { useStrict } from "mobx";

import field from "./field";
import Form from "./Form";

useStrict(true);

describe("@field", () => {
  it("stores field names in an object", () => {
    class FooForm extends Form {
      @field("이름") name;

      @field("나이") age;
    }

    const foo = new FooForm();
    expect(foo.fields.name).toEqual("이름");
    expect(foo.fields.age).toEqual("나이");
  });
});
