export default function ActionButton({ text, onClick, width }) {
  return (
    <button
      onClick={onClick}
      className={`bg-[#FA7807] w-${width} rounded- text-white font-bold rounded-xl border-2 border-[#FA7807] hover:bg-[#FDAD0B] hover:border-[#FDAD0B] active:bg-transparent active:border-[#FA7807] active:text-[#FA7807]`}>
      {text}
    </button>
  );
}
