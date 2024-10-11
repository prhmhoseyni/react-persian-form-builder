import * as yup from "yup";

declare module "yup" {
    interface StringSchema {
        cellPhoneNumber(): this;
    }
}

yup.addMethod<yup.StringSchema>(yup.string, "cellPhoneNumber", function () {
    return this.matches(/^09\d{9}$/g, "شماره تلفن همراه وارد شده معتبر نمی‌باشد.");
});
