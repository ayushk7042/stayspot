import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Seo from '../components/Seo.jsx';
import PostList from '../components/PostList.jsx';
import { Loader, ErrorState } from '../components/Loader.jsx';
import { getArticle, getRelated } from '../api/client.js';

const Article = () => {
  const { slug } = useParams();
  const [state, setState] = useState({ loading: true, error: null, data: null });
  const [related, setRelated] = useState([]);

  useEffect(() => {
    setState({ loading: true, error: null, data: null });
    getArticle(slug)
      .then(({ data }) => {
        setState({ loading: false, error: null, data });
        return getRelated(slug);
      })
      .then(({ data }) => setRelated(data))
      .catch((e) => setState({ loading: false, error: e.message, data: null }));
  }, [slug]);

  if (state.loading) return <Loader />;
  if (state.error) return <ErrorState msg={state.error} />;

  const { title, excerpt, cover, content, author, category, publishedAt, tags = [] } = state.data;

  return (
    <>
      <Seo title={title} description={excerpt} image={cover} tags={tags} />
      <article className="container article">
        <header className="article-head">
          <Link className="pill" to={`/category/${category?.slug}`}>{category?.name}</Link>
          <h1>{title}</h1>
          <div className="byline">
            <span>{author?.name}</span>
            <span>•</span>
            <time dateTime={publishedAt}>{new Date(publishedAt).toLocaleDateString()}</time>
          </div>
        </header>
        {cover && <img className="article-cover" src={cover} alt={title} />}
        <div className="article-body" dangerouslySetInnerHTML={{ __html: content }} />
      </article>
      <section className="container">
        <h3>Related</h3>
        <PostList posts={related} />
      </section>
    </>
  );
};

export default Article;
