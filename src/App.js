import './App.css';
import Header from './components/Header';
import BlogContents from './components/BlogContents';
import { useState } from 'react';

function App() {
    const [blogs, setBlogs] = useState([
        {
            id: 1,
            title: 'New Blog!',
            contents:
                'this is some content for my new blog wow i am a pro at react just kidding',
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

    return (
        <div className="App">
            <Header />
            <BlogContents />
        </div>
    );
}

export default App;
