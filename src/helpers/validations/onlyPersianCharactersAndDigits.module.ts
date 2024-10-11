import * as yup from "yup";

declare module "yup" {
    interface StringSchema {
        onlyPersianCharactersAndDigits(): this;
    }
}

yup.addMethod<yup.StringSchema>(yup.string, "onlyPersianCharactersAndDigits", function () {
    return this.matches(/^[\u0600-\u06FF\s\u200C\d./\-−،()]+$/g, "فقط استفاده از حروف فارسی و اعداد مجاز می‌باشد.");
});
