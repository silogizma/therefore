export default function(req) {
  const { headers } = req;
  const [language] = headers.host.split(".");
  return language;
}
