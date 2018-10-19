import md5 from "../../../lib/md5.js";
import styles from "./styles.css";

const colorify = term => `#${md5(term).substring(0, 6)}`;

const categoricalProposition = ({
  subject,
  predicate,
  universal,
  affirmative
}) =>
  [
    universal ? "all" : "some",
    subject,
    affirmative ? "are" : "are not",
    predicate
  ].join(" ");

export default ({ syllogism, square = 500, propositions = 3 }) => {
  const strokeSize = 10;
  const size = square;

  const center = size / 2;
  const slice = size / propositions;
  const area = size / propositions - strokeSize * 2;

  const { major, minor, conclusion } = syllogism;

  const terms = new Set([
    major.subject,
    major.predicate,
    minor.subject,
    minor.subject,
    conclusion.subject,
    conclusion.subject
  ]);

  const [alpha, beta, gamma] = terms;

  const queries = {
    cats: {
      universal: true,
      affirmative: false
    },
    dogs: {
      universal: true,
      affirmative: false
    },
    happy: {
      universal: true,
      affirmative: false
    }
  };

  const existences = [
    ["allCatsAreHappy", [slice, slice + slice / 2.5], () => {}]

    // ['someHappyThings', [
    //   slice + (slice / 2),
    //   slice * 2 + (slice / 8) ],
    //   () => (
    //     false
    //   )
    // ],

    // ['someCats', [
    //   slice,
    //   slice + slice / 2],
    //   () => (

    //   )
    // ],

    // ['someDogs', [
    //   slice + slice,
    //   slice + slice / 2],
    //   () => (
    //     'HEYS'
    //   )
    // ],
  ];

  return (
    <div>
      <svg className={styles.Press} width={square} height={square}>
        {existences.map(([region, [x, y], exists]) => (
          <text
            textAnchor={"start"}
            x={x}
            y={y}
            fill={"black"}
            textAnchor={"middle"}
            alignmentBaseline={"central"}
          >
            {exists() ? "YES" : "NO"}
          </text>
        ))}
      </svg>
      <svg className={styles.Overlay} width={size} height={size} />
      <svg className={styles.Canvas} width={size} height={size}>
        <circle
          cx={size / 2}
          cy={slice}
          r={area}
          fill={colorify(beta)}
          strokeWidth={strokeSize}
        />
        <circle
          cx={slice}
          cy={slice * 2}
          r={area}
          fill={colorify(alpha)}
          strokeWidth={strokeSize}
        />
        <circle
          cx={slice * 2}
          cy={slice * 2}
          r={area}
          fill={colorify(gamma)}
          strokeWidth={strokeSize}
        />
      </svg>
    </div>
  );
};
