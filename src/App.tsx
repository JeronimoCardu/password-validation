import Input from "./components/Input";

export default function App() {
  return (
    <section className="flex h-fit w-[90%] flex-col gap-6 rounded-2xl bg-[#1f1f1f] p-8 shadow-[0px_0px_12px_rgba(255,255,255,.02)] transition-all duration-300 ease-in sm:w-fit">
      <div className="flex flex-col gap-1 text-white">
        <h1 className="text-3xl">Validate password</h1>
        <p className="text-xl text-gray-300">Your password must...</p>
        <ul>
          <li className="ml-6 list-disc text-gray-300">
            Have 8 or more characters
          </li>
          <li className="ml-6 list-disc text-gray-300">
            Include at least 1 uppercase letter
          </li>
          <li className="ml-6 list-disc text-gray-300">
            Include at least 2 numbers
          </li>
          <li className="ml-6 list-disc text-gray-300">
            Include at least 1 symbol <br />
            <span className="italic">(e.g., *+_/$#)</span>
          </li>
        </ul>
      </div>
      <Input />
    </section>
  );
}
