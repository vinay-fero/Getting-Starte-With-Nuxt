<template>
  <section class="post-list">
    <PostPreview
      id="1"
      :isAdmin="isAdmin"
      title="Post Title"
      pre-view-text="Preview Text"
      thumbnail="'https://static.fandomspot.com/images/07/7935/00-featured-hange-zoe-attack-on-titan-scientist-character-anime.jpg'"
    />
  </section>
</template>

<script>
import PostPreview from "~/components/Posts/PostPreview";

export default {
  name: "PostList",
  components: {
    PostPreview
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.post-list{
  display: flex;
  padding: 20px;
  box-sizing: border-box;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}
</style>
