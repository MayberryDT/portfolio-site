import React from 'react';
import * as contentful from 'contentful';
import BlogItem from './blog/BlogItem';
import PageHeader from './components/PageHeader';
import PageContent from './components/PageContent';

class Blog extends React.Component {

  state = {
    posts: []
  }

  client = contentful.createClient({
    space: '7ugbsg2gijgd',
    accessToken: '199fc2d70ec8a4fd705f5bf63d93e338ff2f92220bb837019ab8447cea3ed7f8'
  })

  componentDidMount() {
    this.fetchPosts().then(this.setPosts);
  }

  fetchPosts = () => this.client.getEntries();

  setPosts = response => {
    this.setState({
      posts: response.items
    })
  }

  render() {
    return (
      <div>
        <PageHeader color="is-info" title="Code Blog">
            Here's where I blog on whatever aspect of my life seems
            appealing to blog about at the moment. This could range
            anywhere from living abroad to the new project I'm 
            working on.
        </PageHeader>
        <br />
        <PageContent>
          {this.state.posts.map(({fields}, i) =>
            <BlogItem key={i} {...fields} />
          )}
        </PageContent>
      </div>
    )
  }
  
}

export default Blog;