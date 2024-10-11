import * as yup from "yup";

declare module "yup" {
  interface StringSchema {
    onlyPersianCharacters(): this;
  }
}

yup.addMethod<yup.StringSchema>(yup.string, "onlyPersianCharacters", function () {
  return this.matches(/^[\u0600-\u06FF\s\u200C./\-−]+$/g, "فقط استفاده از حروف فارسی مجاز می‌باشد.");
});
