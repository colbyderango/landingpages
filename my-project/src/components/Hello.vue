<template>
  <div class="hello">
   
     
   

    <ul id="slide-out" class="side-nav">
      <li>
        <div class="userView">
          <div class="background">

          </div>
          <img class="circle" src="../assets/headshot.png">
          <span class="white-text name">Colby DeRango</span>
          <span class="white-text email">colbyderango@gmail.com</span>
        </div>
      </li>
      <li @click="openModal"><a href="#modal1"><i class="fa fa-envelope-o fa-2x" aria-hidden="true"></i>Email Me</a></li>
      <li><a href="https://standardresume.co/colbyderango"><i class="fa fa-file fa-2x" aria-hidden="true"></i>Resume</a></li>
      <li><a href="https://github.com/colbyderango/"><i class="fa fa-github fa-2x" aria-hidden="true"></i>GitHub</a></li>
      <li><a href="https://www.linkedin.com/in/colby-derango-90a13910b/"><i class="fa fa-linkedin-square fa-2x" aria-hidden="true"></i>LinkedIn</a></li>
      <li><a href="https://twitter.com/DerangoColby"><i class="fa fa-twitter fa-2x" aria-hidden="true"></i>Twitter</a></li>
      




    </ul>





    <div id="modal1" class="modal">
      <div class="modal-content">
        <form method="POST" action="http://formspree.io/colbyderango@gmail.com">
          <input type="email" name="email" placeholder="Your email">
          <textarea name="message" placeholder="Your message"></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>



     <div class="parallax-container">

        <a href="#" data-activates="slide-out" class="button-collapse waves-effect waves-teal btn-flat button"><i class="fa fa-phone fa-x2"></i> Contact</a>
      <div class="parallax"><img src="../assets/tetonbackgrounds.jpg">
      

      </div>
        <div class="row text-center">
      <div class="col s6 offset-s3">
        <div class="card-panel text-center">
          <h4 class="white-text">Colby DeRango</h4>
          <h5 class="white-text">Software Developer</h5>
          <h5 class="white-text">Boise, Id</h5>
          <span class="white-text">A dynamic programmer and passionate learner who is extremely detail-oriented. Eager to learn cutting-edge technologies, alongside building long lasting applications.
          </span>
        </div>
      </div>
    </div>
      </div>
      
   


    <div class="section ">
      <div class="row container">
        
        <div class="skills">
          <p>JavaScript, VueJs</p>
          <div class="progress">
            <div class="determinate" style="width: 45%">
            </div>
          </div>
          <p>NodeJs, MongoDb</p>
          <div class="progress">
            <div class="determinate" style="width: 45%">
            </div>
          </div>
          <p>C# & .NET</p>
          <div class="progress">
            <div class="determinate" style="width: 25%">
            </div>
          </div>

          <p>HTML</p>
          <div class="progress">
            <div class="determinate" style="width: 70%">
            </div>
          </div>
          <p>CSS</p>
          <div class="progress">
            <div class="determinate" style="width: 75%">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="parallax-container">
      <div class="parallax"><img src="../assets/birds.jpg"></div>
    </div>
    <div class="section ">
      <div class="row container">
        <h3 class="header center">Past Projects</h3>
        <p class="grey-text text-darken-3 lighten-3"></p>
      </div>
    </div>
    
    <div class="carousel carousel-slider" data-indicators="true">
      <a class="carousel-item"><img src="http://lorempixel.com/800/400/food/1"></a>
      <a class="carousel-item" ><img src="http://lorempixel.com/800/400/food/2"></a>
      <a class="carousel-item" ><img src="http://lorempixel.com/800/400/food/3"></a>
      <a class="carousel-item"><img src="http://lorempixel.com/800/400/food/4"></a>
    </div>


  </div>
</template>

<script>
  export default {

    name: 'hello',
    methods: {
      openModal() {
        $('.modal').modal();
        $('#loginModal').modal('open');

      },

      data() {
        return {
          msg: 'Welcome to Your Vue.js App'
        }
      }
    }


  }
  $(document).ready(function () {
    $('.parallax').parallax();
    $('.button-collapse').sideNav()
    $('.carousel.carousel-slider').carousel({fullWidth: true});
  });

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .progress{
    background-color: black;
  }
  
  .button{
    position: fixed;
  }
  .section{
    
    background-color: rgba(79, 79, 79, 1)
  }
  .transparent{
    background-color: rgba(79, 79, 79, .1)
  }

  .card-panel{
    margin-top: 30%;
    background-color: rgba(79, 79, 79, .5);
    position: relative;
  }
  
  .flex-container {
    display: flex;
  }
  
  @media only screen and (min-width: 993px) {
    nav a.button-collapse {
      display: block;
    }
  }
  
  .background {
    background-color: grey;
  }
  
  .button-collapse {
    z-index: 1;
  }
  
  #jumbo {
    padding: 1px;
  }
  
  .circle {
    height: vh;
    border-radius: 50%;
  }
  
  .parallax-container {
    max-width: 100%;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-position: center center;

  }
</style>