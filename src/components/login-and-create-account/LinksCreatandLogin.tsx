interface LinkProps {
  href: string;
  text: string;
}

function Links({ href, text }: LinkProps) {
  return <a href={`/${href}`}>{text}</a>;
}

export default Links;
