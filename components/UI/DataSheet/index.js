import _DataSheet from 'react-datasheet';

export default function DataSheet({
  data,
  ...props,
}) {
  return (
    <_DataSheet
      data={data}
      valueRenderer={(cell) => cell.value}
      { ...props }
    />
  );
}
