// ActionButton.js
export default function ActionButton({ size }) {
  return (
    <button
      className={`bg-[#FA7807] text-white font-bold p-4 rounded-xl ${size ? `w-[${size}]` : ''}`}>
      Experimente agora gratuitamente!
    </button>
  );
}
