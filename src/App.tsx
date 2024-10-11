import { yupResolver } from "@hookform/resolvers/yup";
import { FormProvider, useForm } from "react-hook-form";
import FormFieldAmount from "~/components/FormField/Amount/FormField.Amount.tsx";
import FormFieldBankCard from "~/components/FormField/BankCard/FormField.BankCard.tsx";
import FormFieldCellphone from "~/components/FormField/Cellphone/FormField.Cellphone.tsx";
import FormFieldNumber from "~/components/FormField/Number/FormField.Number.tsx";
import FormFieldPhone from "~/components/FormField/Phone/FormField.Phone.tsx";
import FormFieldSheba from "~/components/FormField/Sheba/FormField.Sheba.tsx";
import FormFieldText from "~/components/FormField/Text/FormField.Text.tsx";
import yup from "~/config/yup.ts";

function App() {

    const formMethods = useForm({
        resolver: yupResolver(
            yup.object({
                // [`${FormField.TEXT}/firstName`]: yup.string().trim().required().space(2).halfSpace(2).onlyPersianCharacters().max(50),
                // firstName: yup.string().trim().required().space(2).halfSpace(2).onlyPersianCharacters().max(50),
                // lastName: yup.string().trim().required().space(2).halfSpace(2).onlyPersianCharacters().max(50),
                // nationalId: yup.string().required().checkNationalId(),
                // cellphone: yup.string().required(),
                // fatherName: yup.string().trim().required().space(2).halfSpace(2).onlyPersianCharacters().max(50),
                // // address: yup.string().trim().required().space(2).halfSpace(2).onlyPersianCharactersAndDigits().max(300),
                // shebaInfo: yup.object({ sheba: yup.string().required() }),
            })
        ),
    })

    // console.log("HERE", yup.object({
    //     [`${FormField.TEXT}/firstName`]: yup.string().trim().required().space(2).halfSpace(2).onlyPersianCharacters().max(50),
    //     lastName: yup.string().trim().required().space(2).halfSpace(2).onlyPersianCharacters().max(50),
    //     nationalId: yup.string().required().checkNationalId(),
    //     cellphone: yup.string().required().cellPhoneNumber(),
    //     fatherName: yup.string().trim().required().space(2).halfSpace(2).onlyPersianCharacters().max(50),
    //     address: yup.string().trim().required().space(2).halfSpace(2).onlyPersianCharactersAndDigits().max(300),
    //     shebaInfo: yup.object({ sheba: yup.string().required() }),
    // }).fields)

    const onSubmit = formMethods.handleSubmit((values) => {
        // console.log("SUBMIT", a);
        console.log("SUBMIT", values);
        // console.log("SUBMIT", formatValues(values));
    })

    console.log(">>>>>", formMethods.formState.errors)

    return (
        <FormProvider {...formMethods}>
            <form dir="rtl" onSubmit={onSubmit} className="grid md:grid-cols-2 gap-2 p-4">
                {/*<FormFieldText*/}
                {/*    name={`firstName`}*/}
                {/*    label="نام"*/}
                {/*    onlyFaCharacters*/}
                {/*/>*/}

                {/*<FormFieldText*/}
                {/*    name={`lastName`}*/}
                {/*    label="نام خانوادگی"*/}
                {/*    onlyFaCharacters*/}
                {/*/>*/}

                {/*<FormFieldText*/}
                {/*    name={`nationalId`}*/}
                {/*    label="کدملی"*/}
                {/*    onlyDigitCharacters*/}
                {/*/>*/}

                {/*<FormFieldCellphone*/}
                {/*    name={`cellphone`}*/}
                {/*    label="تلفن همراه"*/}
                {/*/>*/}

                {/*<FormFieldText*/}
                {/*    name={`fatherName`}*/}
                {/*    label="نام پدر"*/}
                {/*    onlyFaCharacters*/}
                {/*/>*/}

                {/*<FormFieldSheba*/}
                {/*    name={`shebaInfo.sheba`}*/}
                {/*    label="شماره شبا"*/}
                {/*/>*/}

                {/*<button type="button" onClick={() => formMethods.setValue("cellphone", "09224114868")}>text</button>*/}

                <FormFieldText name="title" label="عنوان"/>
                <FormFieldText name="fa_name" label="نام" onlyFaCharacters required/>
                <FormFieldText name="en_name" label="نام به انگلیسی" onlyEnCharacters/>
                <FormFieldText name="national_id" label="کدملی" onlyDigitCharacters/>

                <FormFieldSheba name="sheba" label="شبا"/>

                <FormFieldPhone name="phone" label="تلفن منزل"/>

                <FormFieldNumber name="number" label="عدد"/>
                <FormFieldNumber name="number_float" label="عدد اعشاری" allowFloatCharacters/>
                <FormFieldNumber name="number_negative" label="عدد منفی" allowNegativeCharacters/>

                <FormFieldCellphone name="cellphone" label="شماره تلفن"/>

                <FormFieldBankCard name="bank_card" label="شماره کارت"/>

                <FormFieldAmount name="amount" label="مبلغ" unit="تومان"/>

                <button type="submit">ثبت</button>
            </form>
        </FormProvider>
    )
}

export default App
