import BlogCard from './BlogCard';
import { BHeader1 } from './bTextComponents';

const stuff = (
    <>
        <BHeader1 text="swag swag" />
    </>
);

function BlogContents({ blog }) {
    return (
        <div className="BlogContents">
            {blog.map((item) => {
                return (
                    <BlogCard
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
