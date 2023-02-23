const data = [
  {
    title: 'My First Blog Post',
    date: '2021-01-01',
    image: 'https://images.unsplash.com/photo-1544717305-996b815c338c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80',
    content: 'Hello world!',
    slug: 'my-first-blog-post',
  },
  {
    title: 'My Second Blog Post',
    date: '2021-01-01',
    image: 'https://images.unsplash.com/photo-1544717305-996b815c338c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80',
    content: 'Hello Remix!',
    slug: 'my-second-blog-post',
  },
  {
    title: 'My Third Blog Post',
    date: '2021-01-01',
    image: 'https://images.unsplash.com/photo-1544717305-996b815c338c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80',
    content: 'Hello Remix!',
    slug: 'my-third-blog-post',
  },
  {
    title: 'My Fourth Blog Post',
    date: '2021-01-01',
    image: 'https://images.unsplash.com/photo-1544717305-996b815c338c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=334&amp;q=80',
    content: 'Hello Remix!',
    slug: 'my-fourth-blog-post',
  }
]

export function getPosts() {
  return data;
}