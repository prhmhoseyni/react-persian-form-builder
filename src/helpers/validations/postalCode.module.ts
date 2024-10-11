import * as yup from "yup";

declare module "yup" {
    interface StringSchema {
        postalCode(): this;
    }
}

yup.addMethod<yup.StringSchema>(yup.string, "postalCode", function () {
    return this.matches(/^\d{10}$/g, "کدپستی وارد شده معتبر نمی‌باشد.");
});
