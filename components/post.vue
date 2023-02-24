<template>
  <div class="overflow-hidden bg-white shadow sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-lg font-medium leading-6 text-gray-900">{{ title }}</h3>
      <p class="mt-1 max-w-2xl text-sm text-gray-500">Post`s details</p>
    </div>
    <div class="border-t border-gray-200">
      <dl>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Description</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{{ description }}</dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Date created</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{{ dateCreated }}</dd>
        </div>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Likes</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{{ likes }}</dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Full text</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{{ fullText }}</dd>
        </div>
        <div class="bg-gray-50 px-4 py-5 sm:px-6 flex justify-center">
          <img class="h-96 w-full" src="https://nicolasmelis.com/wp-content/themes/panama/assets/img/empty/600x600.png" alt="empty_post_photo">
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">Author</dt>
          <dd class="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">{{ postedBy }}</dd>
        </div>
      </dl>
    </div>
  </div>
</template>

<script setup>
// TODO add image
// TODO Add adapter for postedBy
defineProps({
  id: {
    type: String,
    default: "-"
  },
  title: {
    type: String,
    default: "-"
  },
  fullText: {
    type: String,
    default: "-"
  },
  description: {
    type: String,
    default: "-"
  },
  dateCreated: {
    type: String,
    default: "-"
  },
  image: {
    type: String,
    default: "-"
  },
  postedBy: {
    type: String,
    default: "-"
  },
  likes: {
    type: Number,
    default: 0
  }
});
</script>
