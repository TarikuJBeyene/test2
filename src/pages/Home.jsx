import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch the posts.json manifest from the public folder
        fetch(`${import.meta.env.BASE_URL}posts.json`)
            .then((res) => res.json())
            .then((data) => {
                setPosts(data);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error fetching posts index:', err);
                setLoading(false);
            });
    }, []);

    if (loading) {
        return <div className="loading-spinner"></div>;
    }

    return (
        <div>
            <section className="hero">
                <div className="hero-content">
                    <h1>Dr. Tariku J. Beyene</h1>
                    <p style={{ marginTop: '1rem', lineHeight: '1.8' }}>
                        Epidemiology | Public Health | Data Analysis | Modeling
                        <br />
                        <span style={{ opacity: 0.8, fontSize: '1rem' }}>Kansas State University</span>
                    </p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="article-list">
                        {posts.length === 0 ? (
                            <p>No posts published yet.</p>
                        ) : (
                            posts.map((post) => (
                                <article key={post.slug} className="article-item">
                                    <h2 className="article-title">
                                        <Link to={`/post/${post.slug}`}>{post.title}</Link>
                                    </h2>
                                    <div className="article-meta">
                                        {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                                    </div>
                                    <p className="article-excerpt">{post.excerpt}</p>
                                    <Link to={`/post/${post.slug}`} className="btn-outline btn" style={{ marginTop: '0.5rem' }}>Read Article</Link>
                                </article>
                            ))
                        )}
                    </div>
                </div>
            </section>
        </div>
    );
}
