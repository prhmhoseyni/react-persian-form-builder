import * as yup from "yup";

declare module "yup" {
    interface StringSchema {
        checkNationalId(): this;
    }
}

function checkNationalId(nationalId: string): boolean {
    if (nationalId && nationalId.length === 10) {
        if (
            nationalId === "0000000000" ||
            nationalId === "1111111111" ||
            nationalId === "2222222222" ||
            nationalId === "3333333333" ||
            nationalId === "4444444444" ||
            nationalId === "5555555555" ||
            nationalId === "6666666666" ||
            nationalId === "7777777777" ||
            nationalId === "8888888888" ||
            nationalId === "9999999999"
        ) {
            return false;
        }
    } else {
        return false;
    }

    const controllerNumber = nationalId.slice(-1);
    const checksumOfNationalId = nationalId
        .slice(0, -1)
        .split("")
        .map(Number)
        .reduce((acc, cur, index) => acc + cur * (10 - index), 0);

    const nationalIdValidationResult = checksumOfNationalId - Math.floor(checksumOfNationalId / 11) * 11;

    return (
        (nationalIdValidationResult === 0 && Number(controllerNumber) === nationalIdValidationResult) ||
        (nationalIdValidationResult === 1 && Number(controllerNumber) === 1) ||
        (nationalIdValidationResult > 1 && Number(controllerNumber) === 11 - nationalIdValidationResult)
    );
}

yup.addMethod<yup.StringSchema>(yup.string, "checkNationalId", function () {
    return this.test({
        test: value => checkNationalId(value ?? ""),
        message: "کد ملی وارد شده معتبر نمی‌باشد.",
    });
});
