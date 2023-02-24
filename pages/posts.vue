<template>
  <NuxtLayout name="main">
    <div class="posts-content" v-if="posts.length">
      <post
          v-for="(item, index) in posts"
          :key="`${item.id}-${index}`"
          :title="item.title"
          :description="item.description"
          :postedBy="item.postedBy"
          :dateCreated="item.dateCreated"
          :likes="item.likes.length"
          :image="item.image"
          :fullText="item.fullText"
          class="post"
      />
    </div>
    <div v-else class="wrapper-loader">
      <loader />
    </div>
  </NuxtLayout>
</template>

<script setup>
import { useNuxtApp } from "nuxt/app";
import postAdapter from "@/adapters/postAdapter";
const { $getRequest } = useNuxtApp();

let { data: posts } = await $getRequest("posts");
posts = posts.map(post => new postAdapter(post));
</script>

<style lang="scss" scoped>
.posts-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  .post {
    width: 70%;
    margin: 0 0 20px 0;
    &:first-child{
      margin-top: 20px;
    }
  }
}

.wrapper-loader {
  height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
