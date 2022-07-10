import './App.css';
import Header from './components/Header';
import BlogContents from './components/BlogContents';
import { useState } from 'react';

function App() {
    const [blogs] = useState([
        {
            id: 1,
            title: 'New Blog!',
            contents:
                'this is some content for my new blog wow i am a pro at react',
            test: (
                <>
                    <h1 className="bHeader2">nice</h1>
                    <p className="bText">this is JSX </p>
                </>
            ),
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
            <BlogContents blog={blogs} />
        </div>
    );
}

export default App;
