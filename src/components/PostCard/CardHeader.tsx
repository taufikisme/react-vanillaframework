interface Props {
  title: string;
}

const CardHeader = ({ title }: Props) => {
  return (
    <header className="p-card__header">
      <h5 className="p-muted-heading">{title}</h5>
      <hr className="u-no-margin--bottom is-muted" />
    </header>
  );
};

export default CardHeader;
