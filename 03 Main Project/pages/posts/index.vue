<template>
  <div class="posts-page">
    <PostList :posts="loadedPosts"/>
  </div>
</template>

<script>
import PostList from "~/components/Posts/PostList";

export default {
  name: "index",
  components: {
    PostList
  },
  data() {
    return {
      loadedPosts: [
        {
          id: '1',
          title: 'First Post',
          previewText: 'Preview Text',
          thumbnail: "'https://static.fandomspot.com/images/07/7935/00-featured-hange-zoe-attack-on-titan-scientist-character-anime.jpg'"
        }
      ]
    }
  }
}
</script>

<style scoped>
.posts-page {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
