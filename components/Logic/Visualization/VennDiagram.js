import styles from "./styles.css";

const Diagram = ({ universal, affirmative, subject, predicate }) => {
  const width = 700;
  const height = 200;
  const circle = 100;
  const venns = [1, 2, 3];

  return (
    <svg className={styles.Diagram} width={700} height={height * 4}>
      {venns.map(venn => (
        <circle
          r={circle}
          cx={circle + venn * 60}
          cy={venn !== 2 ? circle * 2 : circle}
          fill={"transparent"}
          strokeWidth={2}
          stroke={"black"}
        />
      ))}
    </svg>
  );
};

export default ({ syllogism }) => {
  const { major, minor, conclusion } = syllogism;

  return (
    <div>
      <Diagram {...major} />
      <Diagram {...minor} />
      <Diagram {...conclusion} />
    </div>
  );
};
