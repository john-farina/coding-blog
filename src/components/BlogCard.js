import { useState } from 'react';

function BlogCard() {
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
                <h2 className="blogTitle">Hello Blog World</h2>
                <div className="blogInfo">
                    <h4 className="infoText">11/11/22-</h4>
                    <h4 className="infoText">9:17PM</h4>
                </div>
            </div>
            <div style={pageStyle} className="blogPage">
                <p>hello this is some text blah blah blah</p>
            </div>
        </>
    );
}

export default BlogCard;
