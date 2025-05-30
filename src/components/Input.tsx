import { useState } from "react";
import Button from "./Button";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

type Props = {
  setValidations: React.Dispatch<
    React.SetStateAction<
      {
        text: string;
        validate: boolean;
      }[]
    >
  >;
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  setCorrectPassword: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function Input({
  setCorrectPassword,
  setValidations,
  value,
  setValue,
}: Props) {
  const [view, setView] = useState<boolean>(true);

  const validateValue = (password: string) => {
    const hasUppercase = /[A-Z]/;
    const hasLowercase = /[a-z]/;
    const hasTwoDigits = /(?:\D*\d){2,}/;
    const hasSymbol = /[^a-zA-Z0-9]/; // ^ == Not

    setValue(password);
    setValidations([
      { text: "Have 8 or more characters", validate: password.length >= 8 },
      {
        text: "Include at least 1 uppercase letter",
        validate: hasUppercase.test(password),
      },
      {
        text: "Include at least 1 lowercase letter",
        validate: hasLowercase.test(password),
      },
      {
        text: "Include at least 2 numbers",
        validate: hasTwoDigits.test(password),
      },
      {
        text: "Include at least 1 symbol \n(e.g., *+_/$#)",
        validate: hasSymbol.test(password),
      },
    ]);
  };

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(e) => {
        setCorrectPassword(true);
        e.preventDefault();
      }}
    >
      <div className="flex w-full items-center gap-2 rounded-2xl border-1 border-gray-800 px-4 py-2">
        <input
          type={view ? "text" : "password"}
          className={`${!value && "mb-1"} w-full text-xl text-white outline-none`}
          autoFocus
          maxLength={16}
          placeholder="Your password..."
          onChange={(e) => validateValue(e.target.value)}
        />
        <div onClick={() => setView(!view)} className="cursor-pointer">
          {view ? (
            <FaRegEye color="white" size={"1.5em"} />
          ) : (
            <FaRegEyeSlash color="white" size={"1.5em"} />
          )}
        </div>
      </div>
      <Button value={value} />
    </form>
  );
}
