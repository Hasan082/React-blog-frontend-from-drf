import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Container from "../../components/shared/Container";

const AuthorProfile = () => {
  const { slug } = useParams();
  const [author, setAuthor] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAuthorAndPosts = async () => {
      try {
        const [authorRes, postsRes] = await Promise.all([
          axios.get(`http://localhost:8000/api/authors/${slug}/`),
          axios.get(`http://localhost:8000/api/blogs/?author=${slug}`)
        ]);
        setAuthor(authorRes.data);
        setPosts(postsRes.data.results || []); // If paginated
      } catch (error) {
        console.error("Error loading author or posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAuthorAndPosts();
  }, [slug]);

  if (loading) return <p className="text-center mt-10">Loading author profile...</p>;
  if (!author) return <p className="text-center mt-10 text-red-500">Author not found.</p>;

  return (
    <Container>
      <div className="max-w-3xl mx-auto text-center mt-10 bg-white shadow rounded-xl p-6">
        <img
          src={author.profile_picture}
          alt={author.full_name}
          className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-blue-100 shadow-md"
        />
        <h1 className="text-3xl font-bold mt-4">{author.full_name}</h1>
        <p className="mt-2 text-gray-600">{author.bio}</p>

        {/* Author's Posts */}
        <div className="mt-10 text-left">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2">Posts by {author.full_name}</h2>
          {posts.length > 0 ? (
            <ul className="space-y-2">
              {posts.map(post => (
                <li key={post.id}>
                  <Link
                    to={`/blogs/${post.slug}`}
                    className="text-blue-600 hover:underline font-medium"
                  >
                    {post.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500">This author hasn’t published any posts yet.</p>
          )}
        </div>
      </div>
    </Container>
  );
};

export default AuthorProfile;
