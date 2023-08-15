interface Props {
  content: string;
}

const CardFooter = ({ content }: Props) => {
  return <p className="card-footer">{content}</p>;
};

export default CardFooter;
