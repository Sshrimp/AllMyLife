<template>
  <div class="movies-container">
    <div class="movie-list">
      <div v-for="movie in movies" :key="movie.id" class="movie-item">
        <p class="movie-title">{{ movie.name }}</p>
        <Raeing :haiRate="movie.haiminRate" :qianRate="movie.qianqianRate" />
        <img referrerpolicy="no-referrer" src="https://img3.doubanio.com/view/photo/s_ratio_poster/public/p1334120823.webp" alt="">
        <div class="movie-comments">
          <p>{{ movie.comments }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang="js" setup>
const movies = ref([]);
onBeforeMount( async() => {
  // await useFetch(`/api/doubanSearch`);
  console.log(`the component is now mounted.`)
  const supabase = useSupabaseClient();
  const {data, error} = await supabase.from('MOVIES').select();
  data.sort((a, b) => a.id - b.id);

  data.forEach(item => {
    if(item.img_url === null) {
      useFetch(`/api/doubanSearch?fileName=${encodeURIComponent(item.name)}`).then(res => {
      let placeholder = document.createElement('div');
      placeholder.innerHTML = res.data.value;
      console.log(placeholder, 'placeholder')
      const imgSrc =  placeholder.querySelector('.result-list .result img')?.src
      if(imgSrc) {
        supabase.from('MOVIES').insert({
          ...item,
          img_url: imgSrc
        });
      }
      console.log(imgSrc, item.name, 'imgSrc')
  })
    }
  })
  console.log(data)
  movies.value = [...data];
})

</script>

<style lang="scss">
.movies-container {
  width: 100%;
  
  .movie-list {
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    // justify-content: center;
    // align-items: center;
    // background-color: $background-color;
  }
   .movie-item {
      background-color: $secondary-color;
      margin: 10PX;
      // padding: 10PX;
   }
}

@media screen and (max-width: 768px) {

    .movie-item {
      width: 100%
    }

}
</style>