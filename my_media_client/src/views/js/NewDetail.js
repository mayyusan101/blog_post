import axios from "axios";
import { mapGetters } from "vuex";
export default {
  name: "NewDetails",
  props: ["newId"], //access route parameter as props
  computed: {
    ...mapGetters(["getUserData"]),
  },
  data() {
    return {
      post: {},
      viewCount: 0,
      likeStatus: null,
      likeCount: 0,
      disLikeCount: 0,
    };
  },
  methods: {
    back() {
      // history.back();
      this.$router.go(-1);
    },
    homePage() {
      this.$router.push({
        name: "HomePage",
      });
    },
    loginPage() {
      this.$router.push({
        name: "LoginPage",
      });
    },
    contactPage() {
      this.$router.push({
        name: "ContactPage",
      });
    },
    loadPost() {
      axios
        .post("http://localhost:8000/api/post/detail", {
          id: this.newId,
        })
        .then((response) => {
          this.post = response.data.post;
          console.log(response, "from detail");
        })
        .catch((error) => console.log(error));
    },
    loadView() {
      let data = {
        user_id: Number(this.getUserData),
        post_id: Number(this.newId),
      };
      axios
        .post("http://localhost:8000/api/action-log/view", data)
        .then((response) => {
          this.viewCount = response.data.view;
        })
        .catch((error) => console.log(error));
    },
    loadReaction() {
      axios
        .post("http://localhost:8000/api/post/reaction", {
          id: this.newId,
        })
        .then((response) => {
          this.likeCount = response.data.like_count;
          this.disLikeCount = response.data.dislike_count;
        })
        .catch((error) => console.log(error));
    },
    like() {
      this.likeStatus = true;
    },
    disLike() {
      this.likeStatus = false;
    },
    sendLike() {
      let postId = this.post.post_id;
      axios
        .post("http://localhost:8000/api/user/like", {
          post_id: postId,
        })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    },
    sendDisLike() {
      let postId = this.post.post_id;
      axios
        .post("http://localhost:8000/api/user/dis_like", {
          post_id: postId,
        })
        .then((response) => console.log(response))
        .catch((error) => console.log(error));
    },
  },
  mounted() {
    this.loadPost();
    this.loadView();
    this.loadReaction();
  },
  beforeUnmount() {
    console.log("befor unmount");
    if (this.likeStatus === true) {
      this.sendLike();
    }
    if (this.likeStatus === false) {
      this.sendDisLike();
    }
  },
};
