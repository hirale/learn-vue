Vue.component('blog-post', {
    props: ['post'],
    template: `
      <div class="blog-post">
        <h3>{{ post.title }} -- {{ post.id }}</h3>
        <button v-on:click="$emit('enlarge-text', 0.1)">Enlarge text</button>
        <div v-html="post.content"></div>
      </div>
    `
})

var blogPost = new Vue({
    el: '#blog-posts-events-demo',
    data: {
        posts: [{
                id: 1,
                title: 'Hilpert, Waters and Stanton',
                content: 'Esse nemo quibusdam exercitationem deserunt reprehenderit magnam. Ad nobis facilis ab velit eum. Nihil ea ut.'
            },
            {
                id: 2,
                title: 'Hilpert, Waters and Stanton',
                content: 'Esse nemo quibusdam exercitationem deserunt reprehenderit magnam. Ad nobis facilis ab velit eum. Nihil ea ut.'
            },
            {
                id: 3,
                title: 'Hilpert, Waters and Stanton',
                content: 'Esse nemo quibusdam exercitationem deserunt reprehenderit magnam. Ad nobis facilis ab velit eum. Nihil ea ut.'
            }
        ],
        postFontSize: 1
    },
    methods: {
        onEnlargeText: function (enlargeAmount) {
            console.log(enlargeAmount);
            this.postFontSize += enlargeAmount
        }
    }
});

Vue.component('custom-input', {
    props: ['value'],
    template: `
      <input
        v-bind:value="value"
        v-on:input="$emit('input', $event.target.value)"
      >
    `
  })

var customInput = new Vue({
    el: '#custom-input',
    data: {
        searchText: 'test input'
    }
})