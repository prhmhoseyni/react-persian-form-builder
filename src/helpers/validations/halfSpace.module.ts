import * as yup from "yup";

declare module "yup" {
    interface StringSchema {
        halfSpace(count?: number): this;
    }
}

yup.addMethod<yup.StringSchema>(yup.string, "halfSpace", function (count?: number) {
    count = count ?? 1;
    const regExp = new RegExp(`^((?!\\u200C{${count}}).)*$`);
    return this.matches(regExp, count === 1 ? "وارد کردن نیم اسپیس مجاز نمی‌باشد." : "از قراردادن نیم اسپیس پشت هم خودداری کنید.");
});
