let blogOpen = false;

function createBlogPost(title, time, blogPost) {
    const blogContainer = document.querySelector('#blogContainer');

    const blogButton = document.createElement('div');
    blogButton.classList.add('blogButton');
    const blogTitle = document.createElement('h2');
    blogTitle.classList.add('blogButtonTitle');
    blogTitle.innerHTML = title;
    const blogTime = document.createElement('p');
    blogTime.classList.add('blogButtonTime');
    blogTime.innerHTML = time;

    blogButton.appendChild(blogTitle);
    blogButton.appendChild(blogTime);

    const blogPage = document.createElement('div');
    blogPage.classList.add('blogPage');
    blogPage.style.display = 'none';

    const pageTitle = document.createElement('h2');
    pageTitle.classList.add('pageTitle');
    pageTitle.innerHTML = title;
    const pageDate = document.createElement('p');
    pageDate.classList.add('pageDate');
    pageDate.innerHTML = '-' + time;

    const pageContent = document.createElement('div');
    pageContent.classList.add('pageContent');
    const content = document.createElement('p');
    content.innerHTML = blogPost;
    pageContent.appendChild(content);

    const pageButton = document.createElement('button');
    pageButton.classList.add('pageButton');
    pageButton.innerHTML = 'BACK';

    pageButton.addEventListener('click', () => {
        blogPage.style.display = 'none';
        blogContainer.style.overflowY = 'scroll';
        blogOpen = false;
    });
    pageContent.appendChild(pageButton);

    blogPage.appendChild(pageTitle);
    blogPage.appendChild(pageDate);
    blogPage.appendChild(pageContent);

    blogContainer.appendChild(blogPage);

    blogButton.addEventListener('click', () => {
        if (blogOpen === true) {
            blogOpen = false;
            console.log(blogOpen);
            blogPage.style.display = 'none';
            blogContainer.style.overflowY = 'scroll';
        } else {
            blogOpen = true;
            blogPage.style.display = 'flex';
            blogContainer.style.overflowY = 'hidden';
            blogContainer.scrollTo(0, 0);
            console.log(blogOpen);
        }
    });

    blogContainer.appendChild(blogButton);
}

createBlogPost(
    'Blog City',
    '7/3/2022',
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra finibus ligula ac
pellentesque. Phasellus ultrices velit non urna
commodo, sed suscipit nunc posuere. Nam suscipit
tortor non felis vehicula, vitae pellentesque ipsum
porta. Nullam vestibulum eu lectus ut sollicitudin.
Mauris et hendrerit est, eu lobortis mi. Integer
malesuada arcu rutrum, ornare magna ut, maximus
quam. Morbi eget mattis lorem. Aliquam mattis luctus
dolor, in rhoncus neque consectetur eu. Pellentesque
sed facilisis leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris pharetra finibus ligula ac
pellentesque. Phasellus ultrices velit non urna
commodo, sed suscipit nunc posuere. Nam suscipit
tortor non felis vehicula, vitae pellentesque ipsum
porta. Nullam vestibulum eu lectus ut sollicitudin.
Mauris et hendrerit est, eu lobortis mi. Integer
malesuada arcu rutrum, ornare magna ut, maximus
quam. Morbi eget mattis lorem. Aliquam mattis luctus
dolor, in rhoncus neque consectetur eu. Pellentesque
sed facilisis leo.`
);
createBlogPost(
    'another blog?',
    '8/8/2022',
    'the joke is because its another blog'
);
createBlogPost(
    'wow so easy',
    '10/10/2040',
    'this project was kind of easy just a fun thing i want to make'
);
createBlogPost(
    'be pro by',
    '8/8/2090',
    `maybe one day ill be pro maybe one day`
);
createBlogPost('Blog1', '7/3/2022', 'i added this one so u can scroll wow');
