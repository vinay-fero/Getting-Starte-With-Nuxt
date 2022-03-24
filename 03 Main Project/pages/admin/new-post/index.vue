<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <AdminPostForm @submit="onSubmitted"/>
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
  methods: {
    async onSubmitted(formData) {
      try {
        const resp = await axios.post('https://vue-project-bb658-default-rtdb.firebaseio.com/posts.json', formData);
        console.log('resp', resp);
      } catch (e) {
        console.log('error while posting admin post form data', e);
      }
    }
  },
  layout: 'admin',
}
</script>

<style scoped>
.new-post-form {
  width: 90%;
  margin: 20px auto;
}

@media (min-width: 768px) {
  .new-post-form {
    width: 500px;
  }
}
</style>
