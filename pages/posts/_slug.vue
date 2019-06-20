<template>

    <div class="container mx-auto px-4 bg-gray-100 sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 m-10">
      <div class="flex flex-wrap ">
        <div class="w-full bg-blue-lightest border-b border-blue text-blue-dark px-4 " role="alert">
          <div class="flex flex-wrap">
            <svg class="fill-current  inline-block h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z"/>
            </svg>
            <div class="px-2">{{ formatDate(post.sys.createdAt) }}</div>
            <svg class="fill-current text-teal-500 inline-block h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M14.66 15.66A8 8 0 1 1 17 10h-2a6 6 0 1 0-1.76 4.24l1.42 1.42zM12 10h8l-4 4-4-4z"/>
            </svg>
            <div class="px-2">{{ formatDate(post.sys.updatedAt) }}</div>
          </div>
          <p class="font-bold">{{ post.fields.title }}</p>
        </div>
      </div>
      <div class="flex flex-wrap m-5">
        <div class="w-full text-base break-words" v-html="$md.render(post.fields.content)"></div>
      </div>
    </div>
</template>

<script>
import client from '~/plugins/contentful'

export default {
  asyncData({ params, error, payload }) {
    if (payload) return { post: payload }
    return client
      .getEntries({
        content_type: 'post',
        'fields.slug': params.slug,
      })
      .then(entries => {
        return { post: entries.items[0] }
      })
      .catch(e => console.log(e))
  },
  head() {
    return {
      title: this.post.fields.title,
    }
  },
  mounted() {
    console.log(this.post);
    Prism.highlightAll();
  },
  methods: {
    formatDate(iso) {
      const date = new Date(iso)
      const yyyy = new String(date.getFullYear())
      const mm = new String(date.getMonth() + 1).padStart(2, "0")
      const dd = new String(date.getDate()).padStart(2, "0")
      return `${yyyy}.${mm}.${dd}`
    }
  }
}
</script>

<style lang="scss">
</style>