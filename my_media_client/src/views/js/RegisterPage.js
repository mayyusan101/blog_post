import axios from "axios";
export default {
  name: "RegisterPage",
  data() {
    return {
      user: {
        name: "",
        email: "",
        phone: "",
        password: "",
        comfirmPassword: "",
        gender: "",
        selected: "male",
      },
      errors: {}, //to store errors
      valid: true,
      accountStatus: false,
      tokenStatus: null,
    };
  },
  methods: {
    register() {
      this.validation(); // validate first
      if (this.valid === true) {
        this.sendData();
      } else {
        console.log("do not match");
      }
    },
    storeRegisterData(response) {
      this.$store.dispatch("setToken", response.data.token);
      this.$store.dispatch("setUserData", response.data.user);
    },
    validation() {
      this.errors = {}; // clear prev errors
      this.valid = true; // start from validate

      const validateName = this.validataName(this.user.name);
      this.errors.name = validateName.errorMessage;
      if (this.valid) {
        this.valid = validateName.valid;
      }

      const validateEmail = this.validateEmail(this.user.email);
      this.errors.email = validateEmail.errorMessage;
      if (this.valid) {
        this.valid = validateEmail.valid;
      }

      const validatePhone = this.validatePhone(this.user.phone);
      this.errors.phone = validatePhone.errorMessage;
      if (this.valid) {
        this.valid = validatePhone.valid;
      }

      const validataPassword = this.validatePassword(this.user.password);
      this.errors.password = validataPassword.errorMessage;
      if (this.valid) {
        this.valid = validataPassword.valid;
      }

      const validateComfirmPassword = this.validateComfirmPassword(
        this.user.comfirmPassword
      );
      this.errors.comfirmPassword = validateComfirmPassword.errorMessage;
      if (this.valid) {
        this.valid = validateComfirmPassword.valid;
      }
    },
    validataName(name) {
      if (!name) {
        return { valid: false, errorMessage: "name is required" };
      }
      return { valid: true, errorMessage: null };
    },
    validateEmail(email) {
      let validRegex =
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
      if (!email.length) {
        return { valid: false, errorMessage: "Email is required" };
      }
      if (!email.match(validRegex)) {
        return { valid: false, errorMessage: "Please, enter a valid email." };
      }
      return { valid: true, errorMessage: null };
    },
    validatePhone(phone) {
      let re = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
      if (!phone) {
        return { valid: false, errorMessage: "Phone is required." };
      }
      if (!Number(phone) || phone.length > 14 || !re.test(phone)) {
        return {
          valid: false,
          errorMessage: "Please, enter a valid  phone number.",
        };
      }
      return { valid: true, errorMessage: null };
    },
    validatePassword(password) {
      if (!password) {
        return { valid: false, errorMessage: "Password is required" };
      }
      if (password.length < 8) {
        return {
          valid: false,
          errorMessage: "Password should be at least 8 characters",
        };
      }
      return { valid: true, errorMessage: null };
    },
    validateComfirmPassword(comfirmPassword) {
      if (!comfirmPassword) {
        return { valid: false, errorMessage: "Comfirm Password is required" };
      }
      if (!(this.user.password === this.user.comfirmPassword)) {
        return {
          valid: false,
          errorMessage: "Password and Comfirm Password do not match",
        };
      }
      return { valid: true, errorMessage: null };
    },
    sendData() {
      const data = {
        name: this.user.name,
        email: this.user.email,
        phone: this.user.phone,
        password: this.user.password,
        gender: this.user.selected,
      };

      console.log(data, " send data");
      axios
        .post("http://localhost:8000/api/user/register", data)
        .then((response) => {
          if (response.data.message) {
            this.accountStatus = true; // this account(email) exist
          } else {
            this.accountStatus = false;
            this.tokenStatus = true; //get token
            this.storeRegisterData(response);
            this.homePage();
          }
        })
        .catch((error) => console.log(error));
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
  },
};
