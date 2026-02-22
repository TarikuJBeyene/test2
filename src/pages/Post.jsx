import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

export default function Post() {
    const { slug } = useParams();
    const [postMarkdown, setPostMarkdown] = useState('');
    const [postMeta, setPostMeta] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // 1. Fetch metadata from posts.json to get the title and date
        fetch(`${import.meta.env.BASE_URL}posts.json`)
            .then((res) => res.json())
            .then((data) => {
                const meta = data.find((p) => p.slug === slug);
                setPostMeta(meta);
            })
            .catch((err) => console.error('Error fetching post metadata:', err));

        // 2. Fetch the actual markdown content
        fetch(`${import.meta.env.BASE_URL}posts/${slug}.md`)
            .then((res) => {
                if (!res.ok) throw new Error('Post not found');
                return res.text();
            })
            .then((text) => {
                setPostMarkdown(text);
                setLoading(false);
            })
            .catch((err) => {
                console.error('Error fetching markdown content:', err);
                setPostMarkdown('# Post not found\nThe article you are looking for does not exist.');
                setLoading(false);
            });
    }, [slug]);

    if (loading) {
        return <div className="loading-spinner"></div>;
    }

    return (
        <article className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <Link to="/" style={{ display: 'inline-block', marginBottom: '2rem', color: 'var(--text-muted)' }}>
                ← Back to all posts
            </Link>

            {postMeta && (
                <header className="post-header">
                    <h1 className="post-title">{postMeta.title}</h1>
                    <div className="post-meta">
                        Published on {new Date(postMeta.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </div>
                </header>
            )}

            <div className="post-content">
                <ReactMarkdown>{postMarkdown}</ReactMarkdown>
            </div>
        </article>
    );
}
