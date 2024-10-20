export default function Button({ text, onClick, width, fontSize, px, typeButton }) {

  return (
      <button
        onClick={onClick}
        className={`${width} ${fontSize} ${px} ${typeButton == 'primary'
          ? 'bg-[#FA7807] text-white font-bold rounded-xl border-2 px-4 py-2 border-[#FA7807] hover:bg-[#FDAD0B] hover:border-[#FDAD0B] active:bg-transparent active:border-[#FA7807] active:text-[#FA7807]'
          : 'bg-transparent border-[#fa7807] border-2 text-[#FA7807] rounded-[10px] px-4 py-2 hover:bg-[#FDAD0B] hover:border-[#FDAD0B] hover:text-white active:bg-transparent active:text-[#FDAD0B]'}`}
      >
        {text}
      </button>
  );
}
