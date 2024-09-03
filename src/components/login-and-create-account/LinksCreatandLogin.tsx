interface LinkProps {
  href: string;
  text: string;
}

function Links({ href, text }: LinkProps) {
  return <a href={`http://localhost:5173/${href}`}>{text}</a>;
}

export default Links;
