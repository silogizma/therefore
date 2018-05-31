export function underline(word) {
  return (
    <span style={{
      borderBottom: '5px dotted currentColor',
    }}>
      { word }
    </span>
  );
}
