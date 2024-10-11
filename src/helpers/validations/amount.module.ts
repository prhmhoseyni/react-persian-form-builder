import * as yup from "yup";

declare module "yup" {
    interface NumberSchema {
        amount(): this;
    }
}

yup.addMethod<yup.NumberSchema>(yup.number, "amount", function () {
    return this
        .min(10000, `حداقل مقدار می‌تواند ${Intl.NumberFormat().format(10000)} ریال باشد`)
        .max(999999999999999, "حداکثر مقدار نمیتواند از ۱۵ رقم بیشتر باشد.");
});
