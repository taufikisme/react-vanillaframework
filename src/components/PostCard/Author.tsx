import { Link } from '@canonical/react-components';
import { WP_REST_API_User } from 'wp-types';

interface Props {
  author: WP_REST_API_User;
}

const Author = ({ author }: Props) => {
  return (
    <Link href={author.link} target="_blank">
      {author.name}
    </Link>
  );
};

export default Author;
