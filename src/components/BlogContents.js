import BlogCard from './BlogCard';
import { BHeader1 } from './bTextComponents';
import { useState } from 'react';

const stuff = (
    <>
        <BHeader1 text="swag swag" />
    </>
);

function BlogContents({ blog, changeScroll, style }) {
    return (
        <div style={style} className="BlogContents">
            {blog.map((item) => {
                return (
                    <BlogCard
                        changeBodyScroll={changeScroll}
                        key={item.id}
                        title={item.title}
                        info={item.date.toString()}
                        blogContent={item.contents}
                    />
                );
            })}

            <BlogCard
                title="Hello Blog"
                info="11/11/22 - 10:10pm"
                blogContent={stuff}
            />
        </div>
    );
}

export default BlogContents;
