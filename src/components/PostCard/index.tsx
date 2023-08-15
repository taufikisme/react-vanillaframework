import { Col, Link } from '@canonical/react-components';
import { format } from 'date-fns';
import {
  WP_REST_API_Post,
  WP_REST_API_Terms,
  WP_REST_API_Users,
} from 'wp-types';
import CardHeader from './CardHeader';
import CardFooter from './CardFooter';
import Author from './Author';

interface Props {
  post: WP_REST_API_Post;
}

const PostCard = ({ post }: Props) => {
  return (
    <Col
      element="article"
      className="p-card--highlighted hlight-card"
      size={4}
      medium={2}
    >
      {(post._embedded?.['wp:term'] as any[])[2][0] && (
        <CardHeader
          title={
            ((post._embedded?.['wp:term'] as any[])[2] as WP_REST_API_Terms)[0]
              .name
          }
        />
      )}
      <div className="p-card__content">
        {post.featured_media && (
          <Link href={post.link} target="_blank">
            <img
              className="p-card__image"
              src={post.featured_media as unknown as string}
              alt="Test"
            />
          </Link>
        )}
        <h4 style={{ fontWeight: 400 }}>
          <Link href={post.link} target="_blank">
            {post.title.rendered}
          </Link>
        </h4>
        <p>
          <em>
            <span>By </span>
            {post._embedded?.author && (
              <Author
                author={(post._embedded?.author as WP_REST_API_Users)[0]}
              />
            )}
            <span> on {format(new Date(post.date), 'dd MMMM yyyy')}</span>
          </em>
        </p>
      </div>
      {(post._embedded?.['wp:term'] as any[])[0][0] && (
        <CardFooter
          content={
            ((post._embedded?.['wp:term'] as any[])[0] as WP_REST_API_Terms)[0]
              .name
          }
        />
      )}
    </Col>
  );
};

export default PostCard;
