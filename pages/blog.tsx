// TODO: 需要获取 `posts`（通过调用 API ）
//       在此页面被预渲染之前
interface PostsItem {
  title: string
  content: string
}
interface Posts {
  posts: PostsItem[]
}
function Blog(props: Posts) {
  return (
    <ul>
      {props.posts.map((post, index) => (
        <li key={index}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </li>
      ))}
    </ul>
  )
}

// 此函数在构建时被调用
export async function getStaticProps() {
  // 模拟调用
  const posts = await Promise.resolve([{ title: 'test', content: 'hello css' }, { title: 'dev', content: 'hello ts'}])
  // 通过返回 { props: { posts } } 对象，Blog 组件
  // 在构建时将接收到 `posts` 参数
  return {
    props: {
      posts
    }
  }  
}
export default Blog;
