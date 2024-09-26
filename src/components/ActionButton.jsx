<<<<<<< HEAD:client/src/components/ActionButton.jsx
export default function ActionButton({ text, onClick, width }) {
  return (
    <button
      onClick={onClick}
      className={`bg-[#FA7807] w-${width} rounded- text-white font-bold rounded-xl border-2 border-[#FA7807] hover:bg-[#FDAD0B] hover:border-[#FDAD0B] active:bg-transparent active:border-[#FA7807] active:text-[#FA7807]`}>
      {text}
    </button>
  );
}
=======
export default function ActionButton({ text }) {
  return (
    <button
      className='bg-[#FA7807] text-white font-bold p-4 rounded-xl border-2 border-[#FA7807] hover:bg-[#FDAD0B] hover:border-[#FDAD0B] active:bg-transparent active:border-[#FA7807] active:text-[#FA7807]'>
        {text}
    </button>
  );
}
>>>>>>> b263b14ae1da7711954e2a2a40d9f173bbb186d1:src/components/ActionButton.jsx
