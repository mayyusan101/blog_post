import axios from "axios";
export default{
    name : 'LoginPage',
    data () {
        return {
            userData: {
                email : '',
                password : ''
            },
            errorStatus : null,
            error : []
        }
    },
    methods: {
        login () {
            this.validateData();
            if(this.userData.email && this.userData.password){
                this.sendData();
                return true;
            }
        },
        validateData() {
            this.error = [];
            for(const item in this.userData){
                if(this.userData[item] === "" || this.userData[item].length ===0){
                    this.error.push(item);
                }
            }
        },
        sendData () {
            axios.post("http://localhost:8000/api/user/login",this.userData)
            .then((response) => {
                if(response.data.token == null){
                    this.errorStatus = true;
                    setTimeout(() => this.errorStatus=false,5000);
                }else{
                    this.storeLoginData(response);
                    this.homePage();
                }
            })
            .catch((error) => {
                console.log(error);
            })
        },
        storeLoginData (response) {
            this.$store.dispatch("setToken",response.data.token);
            this.$store.dispatch("setUserData",response.data.user);
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
        contactPage () {
            this.$router.push({
                name : 'ContactPage'
            })
        },
        registerPage () {
            this.$router.push({
                name : 'RegisterPage'
            })
        }
    },

}