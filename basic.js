var app1 = new Vue({
  el: "#app1",
  data: {
    isButtonDisabled: true,
    seen: true
  }
});

var vm = new Vue({
  el: "#example",
  data: {
    message: "Hello",
    isActive: true,
    hasError: false
  },
  computed: {
    // 计算属性的 getter
    reversedMessage: function() {
      // `this` 指向 vm 实例
      return this.message
        .split("")
        .reverse()
        .join("");
    },

    now: function() {
      return Date.now();
    }
  }
});

var computed_demo = new Vue({
  el: "#computed-demo",
  data: {
    firstName: "Foo",
    lastName: "Bar"
    // fullName: 'Foo Bar'
  },
  //   计算属性
  computed: {
    fullName: {
      // getter
      get: function() {
        return this.firstName + " " + this.lastName;
      },
      // setter
      set: function(newValue) {
        var names = newValue.split(" ");
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      }
    }
  }
  //  侦听属性
  //   watch: {
  //     firstName: function (val) {
  //       this.fullName = val + ' ' + this.lastName
  //     },
  //     lastName: function (val) {
  //       this.fullName = this.firstName + ' ' + val
  //     }
  //   }
});

var watchExampleVM = new Vue({
  el: "#watch-demo",
  data: {
    question: "",
    answer: "I cannot give you an answer until you ask a question!"
  },
  watch: {
    // 如果 `question` 发生改变，这个函数就会运行
    question: function(newQuestion, oldQuestion) {
      this.answer = "Waiting for you to stop typing...";
      this.debouncedGetAnswer();
    }
  },
  created: function() {
    // `_.debounce` 是一个通过 Lodash 限制操作频率的函数。
    // 在这个例子中，我们希望限制访问 yesno.wtf/api 的频率
    // AJAX 请求直到用户输入完毕才会发出。想要了解更多关于
    // `_.debounce` 函数 (及其近亲 `_.throttle`) 的知识，
    // 请参考：https://lodash.com/docs#debounce
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
  },
  methods: {
    getAnswer: function() {
      if (this.question.indexOf("?") === -1) {
        this.answer = "Questions usually contain a question mark. ;-)";
        return;
      }
      this.answer = "Thinking...";
      var vm = this;
      axios
        .get("https://yesno.wtf/api")
        .then(function(response) {
          vm.answer = _.capitalize(response.data.answer);
        })
        .catch(function(error) {
          vm.answer = "Error! Could not reach the API. " + error;
        });
    }
  }
});
