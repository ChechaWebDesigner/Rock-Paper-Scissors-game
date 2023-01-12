export default async function getIcon(props) {
  const { url } = props;

  const res = await fetch(url),
    icon = await res.text();

  return icon;
}
