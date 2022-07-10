import { useState } from 'react';
import { BHeader1 } from './bTextComponents';

function BlogCard({ title, info, blogContent }) {
    const [pageStyle, setPageStyle] = useState({
        display: 'none',
    });
    const [pageOpen, setOpen] = useState(false);

    function openBlogPage() {
        if (pageOpen === true) {
            setOpen(false);
            setPageStyle({ display: 'none' });
        } else if (pageOpen === false) {
            setOpen(true);
            console.log('close');
            setPageStyle({ display: 'flex' });
        }
    }

    return (
        <>
            <div onClick={openBlogPage} className="blogCard">
                <h2 className="blogTitle">{title}</h2>
                <div className="blogInfo">
                    <h4 className="infoText">{info}</h4>
                    <h4 className="infoText"></h4>
                </div>
            </div>
            <div style={pageStyle} className="blogPage">
                <BHeader1
                    className={'bTextUnderline bTextItalic'}
                    text={title}
                />
                {blogContent}
            </div>
        </>
    );
}

export default BlogCard;
