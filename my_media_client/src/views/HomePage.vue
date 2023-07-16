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
                <button
                  class="nav-item nav-link active bg-danger text-white"
                  id="nav-home-tab"
                  data-toggle="tab"
                  href="#"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                  @click="homePage()"
                >
                  Home
                </button>
                <button
                  class="nav-item nav-link active mx-1 bg-danger text-white"
                  id="nav-home-tab"
                  data-toggle="tab"
                  href="#"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                  @click="loginPage()"
                >
                  Login
                </button>
                <button
                  class="nav-item nav-link active mx-1 bg-danger text-white"
                  id="nav-home-tab"
                  data-toggle="tab"
                  href="#"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                  @click="logout()"
                >
                  Logout
                </button>
                <button
                  class="nav-item nav-link active mx-1 bg-danger text-white"
                  id="nav-home-tab"
                  data-toggle="tab"
                  href="#"
                  role="tab"
                  aria-controls="nav-home"
                  aria-selected="true"
                  @click="contactPage()"
                >
                  Contact
                </button>
              </div>
            </nav>
            <!--End Nav Button  -->
          </div>
        </div>
      </div>
    </div>
    <main>
      <!-- Whats New Start -->
      <section class="whats-news-area pt-50 pb-20">
        <div class="container">
          <div v-show="statusToken" class="row">
            <div class="col-lg-12">
              <div class="row d-flex justify-content-between">
                <div class="col-lg-9 col-md-9">
                  <div class="properties__button">
                    <!--Nav Button  -->
                    <nav>
                      <div class="nav nav-tabs" id="nav-tab" role="tablist">
                        <a
                          class="nav-item nav-link"
                          @click="searchCategory('', 'all')"
                          :class="{ active: activeItem === 'all' }"
                          id="nav-home-tab"
                          data-toggle="tab"
                          href="#"
                          role="tab"
                          aria-controls="nav-home"
                          aria-selected="true"
                          >All</a
                        >
                        <a
                          v-for="(category, index) in categoryList"
                          :key="index"
                          @click="
                            searchCategory(category.category_id, category.title)
                          "
                          class="nav-item nav-link"
                          :class="{ active: activeItem === category.title }"
                          id="nav-home-tab"
                          data-toggle="tab"
                          href="#"
                          role="tab"
                          aria-controls="nav-home"
                          aria-selected="true"
                          >{{ category.title }}</a
                        >
                      </div>
                    </nav>
                    <!--End Nav Button  -->
                  </div>
                </div>
                <div class="col-xl-2 col-lg-2 col-md-4 ms-5">
                  <div class="header-right-btn f-right d-none d-lg-block">
                    <div class="search-box d-flex align-items-center">
                      <input
                        type="text"
                        v-on:keyup.enter="searchPost()"
                        v-model="searchPostList"
                        placeholder="Search"
                        class="d-inline px-3 py-2"
                      />
                      <i
                        class="fas fa-search special-tag ms-1 fs-4"
                        @click="searchPost()"
                        style="cursor: pointer"
                      ></i>
                    </div>
                  </div>
                </div>
              </div>
              <div class="row" v-if="postList.data">
                <div class="col-12">
                  <!-- Nav Card -->
                  <div class="tab-content" id="nav-tabContent">
                    <!-- card one -->
                    <div
                      class="tab-pane fade show active"
                      id="nav-home"
                      role="tabpanel"
                      aria-labelledby="nav-home-tab"
                    >
                      <div class="whats-news-caption">
                        <div class="row">
                          <div
                            class="col-lg-6 col-md-6"
                            v-for="(post, index) in postList.data.posts.data"
                            :key="index"
                          >
                            <div
                              class="single-what-news mb-100"
                              @click="newDetail(post.post_id)"
                            >
                              <div class="what-img">
                                <img
                                  v-if="post.image != null"
                                  :src="`http://localhost:8000/images/${post.image}`"
                                  alt=""
                                />
                                <img
                                  v-else
                                  :src="`http://localhost:8000/default/default.png`"
                                  alt=""
                                />
                              </div>
                              <div class="what-cap">
                                <span class="color1">{{ post.title }}</span>
                                <h4>
                                  <router-link
                                    :to="/newDetails/ + post.post_id"
                                    >{{ post.description }}</router-link
                                  >
                                </h4>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <!-- End Nav Card -->
                </div>
              </div>
            </div>
            <div
              v-show="noPost"
              class="row bg-danger text-center col-8 offset-2 p-3 my-5 rounded-2"
            >
              <h1 class="text-white">There is no data</h1>
            </div>
          </div>
          <div
            v-if="!statusToken"
            class="row bg-danger text-center col-8 offset-2 p-3 my-5 rounded-2"
          >
            <h2 class="text-white">You don't have permission to access</h2>
            <a
              href="#"
              @click="loginPage()"
              class="text-end text-primary text-decoration-underline"
              >Please login</a
            >
          </div>
        </div>
      </section>
      <!-- Whats New End -->

      <!--Start pagination -->
      <div class="pagination-area pb-45 text-center">
        <div class="container">
          <div class="row">
            <div class="col-xl-12">
              <div class="single-wrap d-flex justify-content-center">
                <nav
                  aria-label="Page navigation example"
                  style="cursor: pointer"
                >
                  <ul
                    v-show="paginationStatus"
                    class="pagination justify-content-start"
                  >
                    <li class="page-item">
                      <paginate
                        :page-count="pageCount"
                        :data="postList.posts"
                        :click-handler="getPost"
                        :prev-text="'Prev'"
                        :next-text="'Next'"
                      >
                      </paginate>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End pagination  -->
    </main>
  </div>
</template>

<script src="../views/js/HomePage.js"></script>
