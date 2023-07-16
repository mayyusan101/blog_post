<template>
    <div>
      <div class="container">
        <div class="row align-items-center">
          <div class="col-xl-10 col-lg-10 col-md-12 header-flex">
            <!-- Main-menu -->
            <div class="main-menu d-md-block">
              <!--Nav Button  -->
              <nav>
                <div
                  class="nav nav-tabs d-flex justify-content-center"
                  id="nav-tab"
                  role="tablist"
                >
                  <a
                    class="nav-item nav-link active bg-danger text-white"
                    id="nav-home-tab"
                    data-toggle="tab"
                    href="#"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                    @click="homePage()"
                    >Home</a
                  >
                  <a
                    class="nav-item nav-link active mx-1 bg-danger text-white"
                    id="nav-home-tab"
                    data-toggle="tab"
                    href="#"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                    @click="loginPage()"
                    >Login</a
                  >
                  <a
                    class="nav-item nav-link active mx-1 bg-danger text-white"
                    id="nav-home-tab"
                    data-toggle="tab"
                    href="#"
                    role="tab"
                    aria-controls="nav-home"
                    aria-selected="true"
                    @click="contactPage()"
                    >Contact</a
                  >
                </div>
              </nav>
              <!--End Nav Button  -->
            </div>
          </div>
        </div>
      </div>
      <main>
        <div class="col-8 offset-2 my-5">
          <div v-show="accountStatus" class="col-8 offset-4">
            <div class="alert alert-warning alert-dismissible fade show" role="alert">
              <strong>This account is already exist. Please try with another email
              </strong>
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          </div>
          <div v-show="tokenStatus" class="col-5 offset-7">
            <div class="alert alert-success alert-dismissible fade show" role="alert">
              <strong>Register success
              </strong>
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>
          </div>
          <div class="shadow-sm p-4">
            <div class="mb-3 row">
              <label for="name" class="col-sm-2 col-form-label"
                >Name</label
              >
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control w-75"
                  id="name"
                  placeholder="Enter name...."
                  v-model="user.name"
                />
                <small class="text-danger">{{ errors.name }}</small>
              </div>
            </div>
            <div class="mb-3 row">
              <label for="email" class="col-sm-2 col-form-label"
                >Email</label
              >
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control w-75"
                  id="email"
                  placeholder="Enter email...."
                  v-model="user.email"
                />
                <small class="text-danger">{{ errors.email }}</small>
              </div>
            </div>
            <div class="mb-3 row">
              <label for="phone" class="col-sm-2 col-form-label"
                >Phone</label
              >
              <div class="col-sm-10">
                <input
                  type="text"
                  class="form-control w-75"
                  id="phone"
                  placeholder="Enter phone...."
                  v-model="user.phone"
                />
                <small class="text-danger">{{ errors.phone }}</small>
              </div>
            </div>
            <div class="mb-3 mt-4 row">
              <label for="inputPassword" class="col-sm-2 col-form-label"
                >Password</label
              >
              <div class="col-sm-10">
                <input
                  type="password"
                  class="form-control w-75"
                  id="inputPassword"
                  placeholder="Enter password...."
                  v-model="user.password"
                />
                <small class="text-danger">{{ errors.password }}</small>
              </div>
            </div>
            <div class="mb-3 mt-4 row">
              <label for="comfirmPassword" class="col-sm-2 col-form-label"
                >Confirm Password</label
              >
              <div class="col-sm-10">
                <input
                  type="password"
                  class="form-control w-75"
                  id="comfirmPassword"
                  placeholder="Enter comfirm password...."
                  v-model="user.comfirmPassword"
                />
                <small class="text-danger">{{ errors.comfirmPassword }}</small>
              </div>
            </div>
            <div class="mb-3 mt-4 row">
              <label for="gender" class="col-sm-2 col-form-label"
                >Gender</label
              >
              <div class="col-sm-10">
                <select name="gender"  v-model="user.selected" id="gender" class="form-control w-75">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                </select>
              </div>
            </div>
            <div class="form-group col-3 offset-6 mt-5 text-end">
              <button type="button" 
              class="button button-contactForm boxed-btn"
              @click="register()"
              >
                Send
              </button>
            </div>
            <div
              class="d-flex justify-content-end mt-3"
            ><span>Alreay have an account? </span>
              <a
                href="#"
                @click="loginPage()"
                class="text-end text-primary text-decoration-underline"
                >login here</a
              >
            </div>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script src="./js/RegisterPage.js"></script>
  
  <style scoped></style>
  