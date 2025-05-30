import { useState } from "react";
import Input from "./components/Input";
import { TbLockPassword } from "react-icons/tb";

export default function App() {
  const [correctPassword, setCorrectPassword] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");
  const [validations, setValidations] = useState([
    { text: "Have 8 or more characters", validate: false },
    { text: "Include at least 1 uppercase letter", validate: false },
    { text: "Include at least 1 lowercase letter", validate: false },
    { text: "Include at least 2 numbers", validate: false },
    { text: "Include at least 1 symbol \n(e.g., *+_/$#)", validate: false },
  ]);
  return (
    <section className="flex h-fit w-[90%] flex-col gap-6 rounded-2xl bg-[#1f1f1f] p-8 shadow-[0px_0px_12px_rgba(255,255,255,.02)] transition-all duration-300 ease-in sm:w-fit">
      {correctPassword ? (
        <>
          <TbLockPassword className="mx-auto" color="white" size="13em" />
          <h1 className="text-center text-4xl text-white">
            Your password is allowed.
          </h1>
          <p className="text-center text-gray-300">
            Please reload the page to validate another password.
          </p>
        </>
      ) : (
        <>
          <div className="flex flex-col gap-1 text-white">
            <h1 className="text-3xl">Validate password</h1>
            <p className="text-xl text-gray-300">Your password must...</p>
            <ul>
              {validations.map((v, idx) => (
                <li
                  key={idx}
                  className={`${value != "" && !v.validate ? "text-red-400" : "text-gray-300"} ${v.validate && "text-green-300"} ml-2 list-disc`}
                >
                  {v.text}
                </li>
              ))}
            </ul>
          </div>
          <Input
            setCorrectPassword={setCorrectPassword}
            value={value}
            setValue={setValue}
            setValidations={setValidations}
          />
        </>
      )}
    </section>
  );
}
