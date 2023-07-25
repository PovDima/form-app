import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = {
  contractStart: yup.date().required(),
  firstDate: yup.date().optional(),
  firstName: yup.string().min(4).required(),
  lastName: yup.string().min(4).required(),
  birthName: yup.string().min(4).optional(),
  socialId: yup.string().optional(),
  city: yup.string().min(4).required(),
  country: yup.string().min(4).required(),
  birthDate: yup.date().required(),
  nationality: yup.string().required(),
  addressCountry: yup.string().min(4).required(),
  addressStreet: yup.string().min(4).required(),
  addressHouse: yup.string().max(3).required(),
  addressSupplement: yup.string().optional(),
  addressCity: yup.string().min(4).required(),
  addressPostCode: yup.string().min(3).max(10).required(),
};

interface FormInput {
  contractStart: Date;
  firstDate: Date | undefined;
  firstName: string;
  lastName: string;
  birthName: string;
  socialId: string;
  city: string;
  country: string;
  birthDate: Date;
  nationality: string;
  addressCountry: string;
  addressStreet: string;
  addressHouse: string;
  addressSupplement: string;
  addressCity: string;
  addressPostCode: string;
}

export default function Form() {
  const router = useRouter();
  const [isDiffer, setIsDiffer] = useState(false);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    resolver: yupResolver(
      yup
        .object()
        .shape(
          isDiffer ? { ...schema, firstDate: yup.date().required() } : schema
        )
    ),
  });

  const onSubmit = () => router.push("/success");

  const renderCompanyData = () => {
    return (
      <div className="flex flex-col rounded-lg bg-white shadow-xl p-6 mb-6 w-128">
        <p className="text-2xl mb-4">Company data</p>
        <label>
          Contact start <span className="text-red-600">*</span>
        </label>
        <input
          className="rounded-lg bg-slate-100 border p-2 border-black"
          type="date"
          {...register("contractStart")}
        />
        <p className="text-red-600">{errors.contractStart?.message}</p>

        <div className="flex items-center my-3">
          <label className="switch mr-4">
            <input
              checked={isDiffer}
              type="checkbox"
              onChange={(e) => setIsDiffer(e.target.checked)}
            />
            <span className="slider round"></span>
          </label>
          <p>Contract start and first day of work differ</p>
        </div>

        {isDiffer ? (
          <>
            <label>
              First day of work <span className="text-red-600">*</span>
            </label>
            <input
              className="rounded-lg bg-slate-100 border p-2 border-black"
              type="date"
              {...register("firstDate")}
            />

            <p className="text-red-600">{errors.firstDate?.message}</p>
          </>
        ) : null}
      </div>
    );
  };

  const renderEmployeeData = () => {
    return (
      <div className="flex flex-col rounded-lg bg-white shadow-xl p-6 mb-6 w-128">
        <p className="text-2xl mb-4">Employee data</p>
        <div className="flex justify-between mb-4">
          <div className="flex flex-col w-64">
            <label>
              First name <span className="text-red-600">*</span>
            </label>
            <input
              className="rounded-lg bg-slate-100 border p-2 border-black"
              {...register("firstName")}
            />
            <p className="text-red-600">{errors.firstName?.message}</p>
          </div>
          <div className="flex flex-col w-64">
            <label>
              Last name <span className="text-red-600">*</span>
            </label>
            <input
              className="rounded-lg bg-slate-100 border p-2 border-black"
              {...register("lastName")}
            />
            <p className="text-red-600">{errors.lastName?.message}</p>
          </div>
        </div>
        <div className="flex flex-col mb-4">
          <label>Given birth name</label>
          <input
            className="rounded-lg bg-slate-100 border p-2 border-black"
            {...register("birthName")}
          />
          <p className="text-red-600">{errors.birthName?.message}</p>
        </div>
        <div className="flex flex-col mb-4">
          <label>Social ID</label>
          <input
            className="rounded-lg bg-slate-100 border p-2 border-black"
            {...register("socialId")}
          />
          <p className="text-red-600">{errors.socialId?.message}</p>
        </div>

        <div className="flex justify-between mb-4">
          <div className="flex flex-col w-64">
            <label>
              City of birth <span className="text-red-600">*</span>
            </label>
            <select
              className="rounded-lg bg-slate-100 border p-2 border-black"
              {...register("city")}
            >
              <option value="Kyiv">Kyiv</option>
              <option value="Berlin">Berlin</option>
              <option value="London">London</option>
            </select>
            <p className="text-red-600">{errors.city?.message}</p>
          </div>
          <div className="flex flex-col w-64">
            <label>
              Country of birth <span className="text-red-600">*</span>
            </label>
            <select
              className="rounded-lg bg-slate-100 border p-2 border-black"
              {...register("country")}
            >
              <option value="Ukraine">Ukraine</option>
              <option value="Germany">Germany</option>
              <option value="England">England</option>
            </select>
            <p className="text-red-600">{errors.country?.message}</p>
          </div>
        </div>

        <label>
          Birthdate <span className="text-red-600">*</span>
        </label>
        <input
          className="rounded-lg bg-slate-100 border mb-4 p-2 border-black"
          type="date"
          {...register("birthDate")}
        />
        <p className="text-red-600">{errors.birthDate?.message}</p>

        <label>
          Nationality <span className="text-red-600">*</span>
        </label>
        <select
          className="rounded-lg bg-slate-100 border p-2 border-black"
          {...register("nationality")}
        >
          <option value="Ukrainian">Ukrainian</option>
          <option value="German">German</option>
          <option value="English">English</option>
        </select>
        <p className="text-red-600">{errors.nationality?.message}</p>
      </div>
    );
  };

  const renderAddressData = () => {
    return (
      <div className="flex flex-col rounded-lg bg-white shadow-xl p-6 mb-6 w-128">
        <p className="text-2xl mb-4">Address details</p>

        <label>
          Country <span className="text-red-600">*</span>
        </label>
        <select
          className="rounded-lg bg-slate-100 border p-2 mb-4 border-black"
          {...register("addressCountry")}
        >
          <option value="Ukraine">Ukraine</option>
          <option value="Germany">Germany</option>
          <option value="England">England</option>
        </select>
        <p className="text-red-600">{errors.addressCountry?.message}</p>
        <div className="flex justify-between mb-4">
          <div className="flex flex-col w-64">
            <label>
              Street <span className="text-red-600">*</span>
            </label>
            <select
              className="rounded-lg bg-slate-100 border p-2 border-black"
              {...register("addressStreet")}
            >
              <option value="Ukrainian street">Ukrainian street</option>
              <option value="Germany street">Germany street</option>
              <option value="English street">English street</option>
            </select>
            <p className="text-red-600">{errors.addressStreet?.message}</p>
          </div>

          <div className="flex flex-col w-64">
            <label>
              House number <span className="text-red-600">*</span>
            </label>
            <input
              className="rounded-lg bg-slate-100 border p-2 border-black"
              {...register("addressHouse")}
            />
            <p className="text-red-600">{errors.addressHouse?.message}</p>
          </div>
        </div>

        <label>Address supplement</label>
        <select
          className="rounded-lg bg-slate-100 border p-2 mb-4 border-black"
          {...register("addressSupplement")}
        >
          <option value="Ukrainian supplement">Ukrainian supplement</option>
          <option value="Germany supplement">Germany supplement</option>
          <option value="English supplement">English supplement</option>
        </select>
        <p className="text-red-600">{errors.addressSupplement?.message}</p>

        <div className="flex justify-between mb-4">
          <div className="flex flex-col w-64">
            <label>
              City <span className="text-red-600">*</span>
            </label>
            <select
              className="rounded-lg bg-slate-100 border p-2 border-black"
              {...register("addressCity")}
            >
              <option value="Kyiv">Kyiv</option>
              <option value="Berlin">Berlin</option>
              <option value="London">London</option>
            </select>
            <p className="text-red-600">{errors.addressCity?.message}</p>
          </div>
          <div className="flex flex-col w-64">
            <label>
              Post code <span className="text-red-600">*</span>
            </label>
            <input
              className="rounded-lg bg-slate-100 border p-2 border-black"
              {...register("addressPostCode")}
            />
            <p className="text-red-600">{errors.addressPostCode?.message}</p>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="flex w-6/12">
      <form
        className={"w-full flex flex-col"}
        onSubmit={handleSubmit(onSubmit)}
      >
        {renderCompanyData()}
        {renderEmployeeData()}
        {renderAddressData()}
        <input
          className="bg-blue-700 my-2 text-white p-3"
          type="submit"
          value="Submit"
        />
      </form>
    </div>
  );
}
