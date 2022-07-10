import { useState } from 'react';
import BlogCard from './BlogCard';

function BlogContents() {
    return (
        <div className="BlogContents">
            <BlogCard />
            <BlogCard />
            <BlogCard />
        </div>
    );
}

export default BlogContents;
