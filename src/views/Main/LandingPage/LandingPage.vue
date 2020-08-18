<template>
  <div>
  <!-- Navigation -->
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">UFOTABLE CAFE</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav ml-auto">
          <router-link class="nav-item nav-link active" to="/home">Home <span class="sr-only">(current)</span></router-link>
          <a class="nav-item nav-link" href="#">About</a>
          <a class="nav-item nav-link" href="#">Contact</a>
          <a class="nav-item nav-link btn btn-primary" href="#">Reservation</a>
        </div>
      </div>
    </div>
  </nav>

  <!-- Header -->
  <header class="jumbotron jumbotron-fluid">
    <div class="container">
      <h1 class="display-4">Coffee Philosophy</h1>
      <p class="lead">Black as the <b>devil</b>, <br>
        hot as <b>hell</b>, <br>
        pure as an <b>angel</b>, <br>
        sweet as <b>love</b></p>
    </div>
  </header>

  <!-- Content -->
  <main class="container">
    <div class="row justify-content-center">
      <div class="col-8 services">
        <div class="row">
          <div class="col-lg">
            <img src="../../../assets/img/food.png" alt="food"> <br>
            <h4>Food & Drink</h4>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div class="col-lg">
            <img src="../../../assets/img/order.png" alt="food"> <br>
            <h4>Online Order</h4>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
          <div class="col-lg">
            <img src="../../../assets/img/delivery.png" alt="food"> <br>
            <h4>Delivery</h4>
            <p>Lorem ipsum dolor sit amet.</p>
          </div>
        </div>
      </div>
    </div>
  </main>

  <footer class="row">
    <div class="col text-center">
      <p>© 2020 Dewondo Friemorn Rights Reserved</p>
    </div>
  </footer>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/* Desktop */
.jumbotron {
    height: 450px;
    background-image: url(https://github.com/Friemorn/POS-App-Cafe/blob/master/assets/img/cafe.jpg?raw=true);
    background-size: cover;
    background-position: 0 -350px;
    background-repeat: no-repeat;
    color: white;
    padding-top: 50px;
    text-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5)
}
.nav-link {
    text-transform: uppercase;
}
.jumbotron .display-4 {
    font-size: 60px;
}
.jumbotron .lead {
    font-size: 30px;
}
.services {
    padding: 30px;
    margin-top: -150px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5)
}
.services img {
    height: 80px;
    margin: 10px;
}
.col-lg:hover {
    background-color: rgba(207, 207, 207, 0.6);
    border-radius: 20px;
}
.col {
    margin: 40px;
}

/* Tablet */
@media(max-width: 764px) {
    .jumbotron {
        height: 350px;
        background-position: 0 -150px;
        padding-top: 20px;
    }
    .jumbotron .display-4 {
        font-size: 40px;
    }
    .jumbotron .lead {
        font-size: 20px;
    }
    .services {
        padding: 20px;
        margin-top: -100px;
        background-color: white;
        border-radius: 20px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5)
    }
    .services img {
        height: 70px;
        margin: 10px;
    }
}

/* Handphone */
@media (max-width: 576px) {
    .jumbotron {
        height: 350px;
        background-position: 0 0px;
        padding-top: 20px;
    }
    .jumbotron .display-4 {
        font-size: 40px;
    }
    .jumbotron .lead {
        font-size: 20px;
    }
    .services {
        padding: 20px 80px;
        margin-top: -150px;
        background-color: white;
        border-radius: 20px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5)
    }
    .services h4 {
        font-size: 20px;
    }
    .services p {
        font-size: 15px;
    }
    .services img {
        height: 70px;
        margin: 10px;
    }
}
</style>
