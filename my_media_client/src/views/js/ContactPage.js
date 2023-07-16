import axios from "axios";
export default {
    data () {
        return {
            form : {
                message : '',
                name : '',
                email : '',
                subject : '',
            },
            sendStatus : false,
            error : []
        }
    },
    methods: {
        homePage() {
            this.$router.push({
                name : 'HomePage'
            })
        },
        loginPage() {
            this.$router.push({
                name : 'LoginPage'
            })
        },
        logout() {
            localStorage.setItem("token",null);
            localStorage.setItem("userData",{});
            this.loginPage();
        },
        send () {
            this.error = [];
            if(this.form.message && this.form.name && this.form.email && this.form.subject){
                this.sendData();
                return true;
            }
            for(const item in this.form){
                if(this.form[item] === "" || this.form[item].length ===0){
                    this.error.push(item);
                }
            }
        },
        sendData() {
            axios.post("http://localhost:8000/api/user/contact",this.form)
            .then(() => {
                this.sendStatus = true;
                for (const item in this.form) {     //clear data after send
                    this.form[item] = '';
                }
            })
            .catch((error) => console.log(error));
        }
    },
}