"use client";
import { CheckCircledIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";

export default function Success() {
  const router = useRouter();

  return (
    <div className="flex flex-col text-center items-center rounded-lg bg-white shadow-xl mx-auto my-80 p-6 mb-6 w-1/2">
      <CheckCircledIcon className="w-8 h-8 text-green-600" />
      <p className="text-2xl mb-4">Data is submitted</p>
      <p className="text-slate-600 text-sm">
        Your data is successfully submitted to the employer.
      </p>
      <p className="text-slate-600 text-sm mb-4">
        We will notify you about next steps
      </p>
      <input
        className="bg-blue-700 my-2 text-white p-3"
        type="submit"
        onClick={() => router.back()}
        value="Logout and back"
      />
    </div>
  );
}
