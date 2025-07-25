import { useEffect, useState } from "react";
import axios from "axios";
import Container from "../../components/shared/Container";
import { Card, Pagination } from 'antd';

const Home = () => {
    const [postsData, setPostsData] = useState({ results: [], pagination: null });
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [pageSize, setPageSize] = useState(1);

    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:8000/api/blogs/', {
            params: { page, page_size: pageSize }
        })
            .then((res) => {
                setPostsData({
                    results: res.data.results || [],
                    pagination: res.data.pagination || null
                });
            })
            .catch((err) => {
                console.error('Error fetching blogs:', err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [page]);

    const { results, pagination } = postsData;

    return (
        <div>
            <Container>
                <h1 className="text-2xl font-bold mb-4">Blog Posts</h1>

                {loading ? (
                    <p className="text-center text-gray-500">Loading blogs...</p>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {results.length > 0 ? (
                            results.map((post) => (
                                <Card key={post.id} className="p-2 shadow-md"
                                    cover={<img alt={post.title} src={post.blog_img} />}>
                                    <h2 className="text-xl font-semibold">{post.title}</h2>
                                    <p className="mt-2">{post.content}</p>
                                    <p className="mt-2 text-gray-500">Author: {post.author.full_name}</p>
                                </Card>
                            ))
                        ) : (
                            <p className="text-center col-span-full text-gray-500">No blog posts available.</p>
                        )}
                    </div>
                )}
            </Container>

            <Container>
                {pagination && (
                    <div className="flex justify-center mt-6">
                        <Pagination
                            current={pagination.current_page}
                            total={pagination.count}
                            pageSize={pageSize}
                            showSizeChanger={true}
                            onShowSizeChange={(current, size) => {
                                setPage(1); // reset to first page
                                setPageSize(size);
                            }}
                            onChange={(newPage) => setPage(newPage)}
                        />
                    </div>
                )}
            </Container>
        </div>
    );
};

export default Home;
