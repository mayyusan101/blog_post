import axios from "axios";
import Paginate from "vuejs-paginate-next";
export default {
    name : 'HomePage',
    components: {
        paginate: Paginate,
      },
    data () {
        return {
            postList : {},
            categoryList : [],
            activeItem : '',
            searchPostList : '',
            statusToken : '',
            pageCount : 0,   //for number of pages
            paginationStatus : false,
            noPost : false
        }
    },
    methods: {
        getPost (page=1) {
            axios.get(`http://localhost:8000/api/allPost?page=${page}`).then((response) => {
            this.getPagination(response);
        });
        },
        getCategory () {
            axios.get('http://localhost:8000/api/allCategory').then((response) => {
            this.categoryList = response.data.category;
            })
        },
        searchPost () {
            axios.post("http://localhost:8000/api/post/search",{
                key : this.searchPostList
            }).then((response) => {
                this.getPagination(response);
            });
        },
        searchCategory (category,navItem,page = 1) {
            this.searchPostList = '';   //clear data in search box if have any
            this.activeItem = navItem;
            if(navItem === 'all'){
                this.getPost(page= 1);
                return;
            }
            axios.post(`http://localhost:8000/api/category/search?page=${page}`,{
                key : category
            }).then((response) => {
                this.getPagination(response);
            }).catch((error) => console.log(error));    
        },
        getPagination(response) {
            this.postList  = response;  //for paganation  
            if(this.postList.data.posts.total == 0){
                this.noPost = true;
            }else{
                this.noPost = false;
            }
            this.pageCount = response.data.posts.last_page; //for number of pages
            if(this.pageCount>1){   //show if data is more than one page
                this.paginationStatus = true;
            }else{
                this.paginationStatus = false;
            }
        },
        homePage () {
            this.$router.push({
                name : 'HomePage'
            })
        },
        loginPage () {
            this.$router.push({
                name : 'LoginPage'
            })
        },
        logout() {
            localStorage.setItem("token",null);
            localStorage.setItem("userData",{});
            this.loginPage();
        },
        contactPage () {
            this.$router.push({
                name : 'ContactPage'
            })
        },
        newDetail (id) {
            this.$router.push({
                name : 'NewDetails',
                params : {
                    newId  : id,
                }
            });
        },
        checkToken () {
            let token =localStorage.getItem("token");
            if(token != "null"){
                this.statusToken = true;
                this.getPost();
                this.getCategory();
            }else{
                this.statusToken = false;
            }
        },
    },
    mounted() {
        this.checkToken();
    }
}