"use client";

import { RadiobuttonIcon } from "@radix-ui/react-icons";
import Form from "./components/Form";

export default function App() {
  return (
    <div className="flex pt-10 px-20">
      <div className="flex justify-between rounded-lg bg-white items-center shadow-xl h-12 p-2 mr-6 w-64">
        Immediate registration <RadiobuttonIcon className="text-cyan-600" />
      </div>
      <Form />
    </div>
  );
}
