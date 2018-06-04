export function underline(word) {
  return (
    <span style={{
      borderBottom: '0.4em solid currentColor',
      mixBlendMode: 'exclusion',
      // background: '#0c002d',
      // textShadow: '1px 1px #ffffffb3',
      // position: 'relative',
      // display: 'inline-block',
      // borderTop: '0.05em solid #1f0505',
    }}>
      «
        <i style={{
          // 
          // GHOST WORD
          // 
          // color: 'darkgoldenrod',
          // mixBlendMode: 'difference',
          fontStyle: 'normal',
          // display: 'block',
          // position: 'absolute',
          opacity: 0.8,
          color: 'currentColor',
          display: 'inline-block',
          padding: '0 3px',
        }}>
          { word }
        </i>
      »
    </span>
  );
}
