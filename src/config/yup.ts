import * as yup from "yup";

/**
 * ---------------------------------------------------------------------------------------------------------------------
 * :::: custom validation methods ::::
 */
import "~/helpers/validations/amount.module.ts";
import "~/helpers/validations/cellPhoneNumber.module";
import "~/helpers/validations/checkNationalId.module";
import "~/helpers/validations/halfSpace.module";
import "~/helpers/validations/onlyPersianCharacters.module";
import "~/helpers/validations/onlyPersianCharactersAndDigits.module";
import "~/helpers/validations/postalCode.module";
import "~/helpers/validations/space.module";

/**
 * ---------------------------------------------------------------------------------------------------------------------
 * :::: custom yup config ::::
 */
yup.setLocale({
    mixed: {
        required: "تکمیل این فیلد اجباری است.",
        notType: "فرمت مقدار وارد شده نامعتبر است.",
    },
    string: {
        email: "آدرس ایمیل وارد شده معتبر نمی‌باشد.",
        min: ({ min }) => "حداقل کارکتر ورودی باید " + min + " باشد.",
        max: ({ max }) => "حداکثر کارکتر ورودی می‌تواند " + max + " باشد.",
        length: ({ length }) => "طول کارکتر ورودی باید " + length + " باشد.",
    },
    number: {
        min: ({ min }) => "حداقل مقدار ورودی باید " + min + " باشد.",
        max: ({ max }) => "حداکثر مقدار ورودی می‌تواند " + max + " باشد.",
        integer: "فقط استفاده از اعداد صحیح (بدون اعشار) معتبر می‌باشد.",
    },
    array: {
        min: ({ min }) => "حداقل باید " + min + " گزینه را انتخاب کنید.",
        max: ({ max }) => "حداکثر می‌توانید " + max + " گزینه را انتخاب کنید.",
    },
});

export default yup;
