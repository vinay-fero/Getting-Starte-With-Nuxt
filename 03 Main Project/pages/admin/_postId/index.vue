<template>
  <div class="admin-post-page">
    <section class="update-form">
      <AdminPostForm :post="loadedPost" @submit="onSubmitted"/>
    </section>
  </div>
</template>

<script>
import axios from 'axios';
import AdminPostForm from "~/components/Admin/AdminPostForm";

export default {
  name: "index",
  components: {
    AdminPostForm
  },
  layout: 'admin',
  data() {
    return {
      loadedPost: {
        author: 'Max',
        title: 'Demon Slayer',
        thumbnailLink: 'https://m.media-amazon.com/images/M/MV5BOGZmYjkxMDItNmQ3ZC00YzdlLThjMDktYWJkOGZiOWU1NmY0XkEyXkFqcGdeQXVyMTA3MzQ4MTcw._V1_.jpg',
        content: 'A youth begins a quest to fight demons and save his sister after finding his family slaughtered and his sister turned into a demon.'
      }
    }
  },
  methods: {
    async onSubmitted(formData) {
      const resp = await axios.put(
        'https://vue-project-bb658-default-rtdb.firebaseio.com/posts/' + this.$route.params.postId + '.json',
        formData
      );

      console.log('_postId/index resp', resp.data);
    }
  }
}
</script>

<style scoped>
.update-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .update-form {
    width: 500px;
  }
}
</style>
