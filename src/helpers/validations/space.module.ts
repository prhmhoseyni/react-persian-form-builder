import * as yup from "yup";

declare module "yup" {
    interface StringSchema {
        space(count?: number): this;
    }
}

yup.addMethod<yup.StringSchema>(yup.string, "space", function (count?: number) {
    count = count ?? 1;
    const regExp = new RegExp(`^((?!\\s{${count}}).)*$`);
    return this.matches(regExp, count === 1 ? "وارد کردن اسپیس مجاز نمی‌باشد." : "از قراردادن اسپیس پشت هم خودداری کنید.");
});
