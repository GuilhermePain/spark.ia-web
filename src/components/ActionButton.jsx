export default function ActionButton({ text }) {
  return (
    <button
      className='bg-[#FA7807] text-white font-bold p-4 rounded-xl border-2 border-[#FA7807] hover:bg-[#FDAD0B] hover:border-[#FDAD0B] active:bg-transparent active:border-[#FA7807] active:text-[#FA7807]'>
        {text}
    </button>
  );
}
