import { useState } from "react";
import Button from "./Button";
import { MdOutlinePassword } from "react-icons/md";

export default function Input() {
  const [value, setValue] = useState<string>("");
  console.log(value);
  return (
    <form
      className="flex flex-col gap-4"
      action={() => alert("submit button is ok")}
    >
      <div className="flex w-full items-center gap-2 rounded-2xl border-1 border-gray-800 px-4 py-2">
        <input
          type="password"
          className={`${!value && "mb-1"} w-full text-xl text-white outline-none`}
          autoFocus
          placeholder="Your password..."
          onChange={(e) => setValue(e.target.value)}
        />
        <MdOutlinePassword color="white" size={"2em"} />
      </div>
      <Button />
    </form>
  );
}
