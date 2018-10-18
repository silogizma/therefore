import Premise from "../Premise";

export default ({ major, minor, ...props }) => {
  return <Premise selectable conclusionOf={[major, minor]} {...props} />;
};
