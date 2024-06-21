<template>
    <div>
        <nav class="navbar navbar-expand-lg nav bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href=""><img src="" class="nav-logo" alt=""></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon text-primary menu"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 justify-content-center  mb-lg-0">
          <li class="nav-item fs-5 fw-medium">
            <a class="nav-link text-light" href="">Home</a>
          </li>
          <li class="nav-item fs-5 fw-medium">
            <a class="nav-link text-light" href="#">About Us</a>
          </li>
        </ul>
        <div class="button-group d-flex gap-2">
              
                    <a href="" class="link-light link-offset-2 link-underline-opacity-0">
                        <button type="button" class="btn rounded-0 text-white login nav-btn">Logout</button>
                    </a>
            </div>
      </div>
    </div>
  </nav>
   
    </div>
</template>

<script>
    export default {
        name:"common-header"
    }
</script>

<style lang="scss" scoped>

</style>