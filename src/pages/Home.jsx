import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Fetch the posts.json manifest from the public folder
        fetch('/posts.json')
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
        <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            {posts.length === 0 ? (
                <p>No posts published yet.</p>
            ) : (
                posts.map((post) => (
                    <article key={post.slug} className="card">
                        <h2 className="card-title">{post.title}</h2>
                        <div className="card-date">{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</div>
                        <p className="card-excerpt">{post.excerpt}</p>
                        <Link to={`/post/${post.slug}`} className="btn">Read Article</Link>
                    </article>
                ))
            )}
        </div>
    );
}
