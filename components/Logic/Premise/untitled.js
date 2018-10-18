export function underline(word) {
  return (
    <span
      style={{
        borderBottom: "7px dotted currentColor"
      }}
    >
      {word}
    </span>
  );
}
