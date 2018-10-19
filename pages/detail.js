export default ({ url }) => {
  const propositions = [];

  const path = [
    "syllogism",
    "?",
    [
      "lang=türkçe",
      "dialect=karabük",
      "observer=fatih",
      `propositions=${propositions}`
    ].join("&")
  ];

  return (
    <div>
      <iframe
        style={{
          position: "fixed"
        }}
        width={"100%"}
        height={"100%"}
        frameBorder={0}
        src={path.join("")}
      />
    </div>
  );
};
