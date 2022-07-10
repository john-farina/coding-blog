import { useState } from 'react';
import { BHeader1 } from './bTextComponents';

function BlogCard({ title, info, blogContent, changeBodyScroll }) {
    const [pageStyle, setPageStyle] = useState({
        display: 'none',
    });
    const [pageOpen, setOpen] = useState(false);

    function openBlogPage() {
        if (pageOpen === true) {
            console.log('close');
            setOpen(false);
            changeBodyScroll();
            setPageStyle({ display: 'none' });
        } else if (pageOpen === false) {
            setOpen(true);
            changeBodyScroll();
            console.log('open');
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
                <button onClick={openBlogPage} className="bButton">
                    BACK
                </button>
                <BHeader1
                    className={'bTextUnderline bTextItalic'}
                    text={title}
                />
                <p className="bText"></p>
                <div className="bLine"></div>
                <div className="bText">{blogContent}</div>
            </div>
        </>
    );
}

export default BlogCard;
