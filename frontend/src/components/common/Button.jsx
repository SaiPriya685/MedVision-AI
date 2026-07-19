function Button({ text, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl transition"
    >
      {text}
    </button>
  );
}

export default Button;