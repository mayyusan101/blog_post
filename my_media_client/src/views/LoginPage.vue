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
        <div class="shadow-sm p-4">
          <div v-if="errorStatus" class="alert alert-danger col-6 offset-6 mb-5 text-center">
            The Critinal do not match.Please try again.
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
                v-model="userData.email"
              />
            <small v-show="error.includes('email')" class="text-danger">Email is required</small>
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
                v-model="userData.password"
              />
            <small v-show="error.includes('password')" class="text-danger">Password is required</small>
            </div>
          </div>
          <div class="form-group col-3 offset-6 mt-5 text-end">
            <button type="button" 
            class="button button-contactForm boxed-btn"
            @click.prevent="login()"
            >
              Send
            </button>
          </div>
          <div
            class="d-flex justify-content-end mt-3"
          ><span>Don't have an account? </span>
            <a
              href="#"
              @click="registerPage()"
              class="text-end text-primary text-decoration-underline"
              >register here</a
            >
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script src="./js/LoginPage.js"></script>

<style scoped></style>
