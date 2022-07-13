import './App.css';
import Header from './components/Header';
import BlogContents from './components/BlogContents';
import { useState } from 'react';

function App() {
    const [blogs] = useState([
        {
            id: 1,
            title: 'New React Blog!',
            contents:
                '   this will be my first post on my blog wow, i am creating it still and its pretty tricky with react. im hoping once i get better it will start to get easy  ',
            date: new Date(),
        },
        {
            id: 2,
            title: 'Another Brand New Blog!',
            contents:
                'this is some more text for my fancy dancy blog thank you',
            date: new Date(),
        },
    ]);
    const [appScroll, setScroll] = useState({
        overflowY: 'visible',
    });
    const [pageStyle, setPageStyle] = useState({
        display: 'none',
    });
    const [pageOpen, setOpen] = useState(false);

    function changeScroll() {
        if (appScroll.overflowY === 'visible') {
            setScroll({ overflowY: 'hidden' });
            window.scroll({
                top: 0,
                left: 0,
                behavior: 'smooth',
            });
        } else if (appScroll.overflowY === 'hidden') {
            setScroll({ overflowY: 'visible' });
        } else {
            console.log('ERROR IN SCROLL CHANGE');
        }
    }
    function openBlogPage() {
        if (pageOpen === true) {
            console.log('close');
            setOpen(false);
            changeScroll();
            setPageStyle({ display: 'none' });
        } else if (pageOpen === false) {
            setOpen(true);
            changeScroll();
            console.log('open');
            setPageStyle({ display: 'flex' });
        }
    }

    return (
        <div className="App">
            <Header openBlogPage={openBlogPage} />
            <BlogContents
                style={appScroll}
                changeScroll={changeScroll}
                openBlogPage={openBlogPage}
                blog={blogs}
            />
        </div>
    );
}

export default App;
