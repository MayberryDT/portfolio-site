import * as contentful from 'contentful';
import * as actions from './blog/actions';

const client = contentful.createClient({
  space: '7ugbsg2gijgd',
  accessToken: '199fc2d70ec8a4fd705f5bf63d93e338ff2f92220bb837019ab8447cea3ed7f8'
})

const error = err => console.log(err);

export function loadBlog() {
  return dispatch =>
    client.getEntries()
      .then(({items}) => {
        dispatch(actions.loadBlogSuccess(items))
      })
      .catch(error)
}