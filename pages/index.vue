<template>
  <div class="container mx-auto px-4">
    <div class="flex flex-wrap mt-4 mb-10">
      <div class="w-full bg-blue-lightest border-t border-b border-blue text-blue-dark px-4 py-3" role="alert">
        <p class="font-bold">記事一覧</p>
      </div>
    </div>
    <div class="flex flex-wrap m-4" >
      <div class="w-ful sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/3 m-2 max-w-sm rounded overflow-hidden shadow-lg  hover:shadow-2xl" v-for="(post, index) in posts" :key="index">
        <nuxt-link :to="'posts/'+post.fields.slug" class="">
          <div class="relative img-wrap h-64">
            <img class="w-full h-full shadow-lg" :src="post.fields.image.fields.file.url" alt="">
            <div class="absolute right-0 top-0 py-2 px-2 ">
              <object>
                <nuxt-link :to="'posts/'+post.fields.slug" class="inline-block bg-orange-400 rounded-full px-2 py-1 text-xs  font-semibold hover:text-white hover:bg-orange-600 shadow-2xl">{{ post.fields.kubun }} </nuxt-link>
              </object>
            </div>
          </div>
          <div class="px-6 py-2">
            <div class="font-bold text-xl mb-2 h-16 overflow-hidden">{{ post.fields.title }}</div>
            <div class="text-gray-600 text-base h-32 overflow-hidden">{{ post.fields.content }}</div>
          </div>
          </nuxt-link>
          <div class="flex flex-wrap px-3 py-1">
            <svg class="fill-current text-teal-500 inline-block h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M1 4c0-1.1.9-2 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4zm2 2v12h14V6H3zm2-6h2v2H5V0zm8 0h2v2h-2V0zM5 9h2v2H5V9zm0 4h2v2H5v-2zm4-4h2v2H9V9zm0 4h2v2H9v-2zm4-4h2v2h-2V9zm0 4h2v2h-2v-2z"/>
            </svg>
            <div class="px-2">{{ formatDate(post.sys.createdAt) }}</div>
            <svg class="fill-current text-teal-500 inline-block h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M14.66 15.66A8 8 0 1 1 17 10h-2a6 6 0 1 0-1.76 4.24l1.42 1.42zM12 10h8l-4 4-4-4z"/>
            </svg>
            <div class="px-2">{{ formatDate(post.sys.updatedAt) }}</div>
          </div>
          
          <div class="flex flex-wrap px-3 h-16 overflow-hidden">
            <div class="py-1" >
              <object>
              <svg class="fill-current text-teal-500 inline-block h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M0 10V2l2-2h8l10 10-10 10L0 10zm4.5-4a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
              </svg>
              <nuxt-link :to="'posts/'+post.fields.tags" class="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs text-grey-darker mr-3 hover:bg-gray-500 hover:text-gray-100" v-for="(tag, index2) in post.fields.tags" :key="index2">{{ tag }}</nuxt-link>
              </object>
            </div>
          </div>
        
      </div>
    </div>
  </div>
</template>

<script>
import client from '~/plugins/contentful'
export default {
  asyncData({ params }) {
    return client
      .getEntries({
        content_type: 'post',
        order: '-sys.createdAt',
      })
      .then(entries => {
        return { posts: entries.items }
      })
      .catch(e => console.log(e))
  },
  head: {
    title: '記事一覧',
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
<script>
import client from '~/plugins/contentful'
export default {
  asyncData({ params }) {
    return client
      .getEntries({
        content_type: 'post',
        order: '-sys.createdAt',
      })
      .then(entries => {
        return { posts: entries.items }
      })
      .catch(e => console.log(e))
  },
  head: {
    title: '記事一覧',
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
.img-wrap {
  background-color: #000000;
}
.img-wrap img {
  display: block;
  opacity: 0.9;
}
</style>