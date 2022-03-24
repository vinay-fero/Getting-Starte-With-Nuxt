import Vuex from 'vuex';

export default () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      }
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        if (!process.client) {
          console.log('context req', context.req);
        }
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            vuexContext.commit('setPosts', [
              {
                id: '1',
                title: 'First Post',
                previewText: 'Preview Text',
                thumbnail: "'https://static.fandomspot.com/images/07/7935/00-featured-hange-zoe-attack-on-titan-scientist-character-anime.jpg'",
                author: 'Max',
                updatedDate: new Date(),
                content: 'Some dummy text'
              }
            ]);
            resolve()
          }, 1000);
        })
      },
      setPosts(context, posts) {
        context.commit('setPosts', posts);
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    }
  });
}
