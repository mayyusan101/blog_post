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
                  @click="logout()"
                  >Logout</a
                >
                <a
                  class="nav-item nav-link active mx-1 bg-danger text-white"
                  id="nav-home-tab"
                  data-toggle="tab"
                  href="#"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                  >Contact</a
                >
              </div>
            </nav>
            <!--End Nav Button  -->
          </div>
        </div>
      </div>
    </div>
   <div class="container mt-4 ">
    <div class="col-8 offset-2">
      <div
      class="form-contact contact_form p-5 shadow-sm"
      id="contactForm"
      novalidate="novalidate"
    >
    <div v-show="sendStatus" class="col-8 offset-4">
      <div class="alert alert-warning alert-dismissible fade show" role="alert">
        <strong>Thank you for your advice!We'll contact you later..
        </strong>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
      </div>
    </div>
      <form action="#">
        <div class="row">
        <div class="col-12">
          <div class="form-group">
            <textarea
              required
              class="form-control w-100 error"
              name="message"
              id="message"
              cols="30"
              rows="9"
              onfocus="this.placeholder = ''"
              onblur="this.placeholder = 'Enter Message'"
              placeholder="Enter Message"
              v-model="form.message"
            ></textarea>
            <small v-show="error.includes('message')" class="text-danger">Message is required</small>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="form-group">
            <input
              required 
              class="form-control error"
              name="name"
              id="name"
              type="text"
              onfocus="this.placeholder = ''"
              onblur="this.placeholder = 'Enter your name'"
              placeholder="Enter your name"
              v-model="form.name"
            />
            <small v-show="error.includes('name')" class="text-danger">Name needs to fill</small>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="form-group">
            <input
              required
              class="form-control error"
              name="email"
              id="email"
              type="email"
              onfocus="this.placeholder = ''"
              onblur="this.placeholder = 'Enter email address'"
              placeholder="Email"
              v-model="form.email"
            />
            <small v-show="error.includes('email')" class="text-danger">Email is required</small>
          </div>
        </div>
        <div class="col-12">
          <div class="form-group">
            <input
              required
              class="form-control error"
              name="subject"
              id="subject"
              type="text"
              onfocus="this.placeholder = ''"
              onblur="this.placeholder = 'Enter Subject'"
              placeholder="Enter Subject"
              v-model="form.subject"
            />
            <small v-show="error.includes('subject')" class="text-danger">Title needs to fill</small>
          </div>
        </div>
      </div>
      </form>
      <div class="form-group mt-3">
        <button
          type="submit"
          @click="send()"
          class="button button-contactForm boxed-btn">
          Send
        </button>
      </div>
    </div>
    </div>
   </div>
  </div>
</template>

<script src="./js/ContactPage.js"></script>

