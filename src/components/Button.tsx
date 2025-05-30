type Props = {
  value: string;
};

export default function Button({ value }: Props) {
  return (
    <button
      disabled={value == ""}
      className={`w-full rounded-2xl border-2 py-2 text-white enabled:cursor-pointer enabled:hover:bg-white enabled:hover:font-bold enabled:hover:text-[#1F1F1F]`}
      type="submit"
    >
      Submit
    </button>
  );
}
