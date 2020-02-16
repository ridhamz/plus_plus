<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Laravel</title>
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
  integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">

  <style>


    .b_frame {
        -webkit-box-shadow: 0px 19px 147px -41px rgba(0,0,0,0.75);
        -moz-box-shadow: 0px 19px 147px -41px rgba(0,0,0,0.75);
        box-shadow: 0px 19px 147px -41px rgba(0,0,0,0.75);


        float: left;
        width: 400px;
        height: 530px;


        margin-right: 80;

        border-radius: 40px;
    }
    .ChatText{

    margin-right: 300px;
  }


</style>

<script type="text/javascript">


</script>




  <link rel="stylesheet" href="css/app.css">
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <nav class="navbar navbar-expand-md navbar-white bg-white shadow-sm">
            <div class="container">
                <a class="navbar-brand" href="{{ url('/') }}">
                  <img src="logo2.png" width="70px", height="70px" alt=""/>
                </a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="{{ __('Toggle navigation') }}">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <!-- Left Side Of Navbar -->
                    <ul class="navbar-nav mr-auto">

                    </ul>

                    <!-- Right Side Of Navbar -->
                    <ul class="navbar-nav ml-auto">
                        <!-- Authentication Links -->
                        @guest
                            <li class="nav-item">
                                <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>
                            </li>
                            @if (Route::has('register'))
                                <li class="nav-item">
                                    <a class="nav-link" href="{{ route('register') }}">{{ __('Register') }}</a>
                                </li>
                            @endif
                        @else
                                      <li class="nav-item mx-2">
                                    <a class="nav-link btn btn-success btn-sm"  href="/home" >Dashboard</a>
                                </li>

                                    <a class="btn btn-danger btn-sm" href="{{ route('logout') }}"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        {{ __('Logout') }}
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                                        @csrf
                                    </form>

                            </li>
                        @endguest
                    </ul>
                </div>
            </div>
        </nav>

  <!--================ Header Menu Area start =================-->

  <!--================Header Menu Area =================-->


  <!--================Hero Banner Area Start =================-->
  <section class="hero-banner" >
    <div class="container text-center">

      <p></p>
      <h1 style="color:#eee">welcome to <strong style="color:#010123">"labes aalik ?" </strong></h1>

    </div>
  </section>
  <!--================Hero Banner Area End =================-->


  <!--================ Innovation section Start =================-->
  <section class="section-padding--small sponsor-bg">

  <div id="main" class="container" >


    <div class="row">
        <div class=" col-md-6">
            <h3>if you need any help you can ask our chat bot anything you want </h3>
            <img src="img/home/ChatBot.png" alt="" style="width: 180%; margin-right: 1600px;">

          </div>

        <div class="col-md-6">

        <iframe id="frame" class="b_frame"  src="https://console.dialogflow.com/api-client/demo/embedded/8e2663d0-1d18-4d8f-8dfa-1ce0febc3050">
        </iframe>

        </div>
    </div>

</div>



<div>

</div>
  </section>

  <!--================ Innovation section End =================-->


  <!--================ Join section Start =================-->
  <section class="section-margin">
    <div class="container">
      <div class="section-intro text-center pb-98px">
        <p class="section-intro__title"></p>
        <h2 class="primary-text">OUR SERVICES</h2>
        <!--<img src="img/home/section-style.png" alt="">-->
      </div>


      <div class="d-lg-flex justify-content-between">
        <div class="card-feature mb-5 mb-lg-0">

          <h3>eyeshight test </h3>
          <p> a 5 minutes test that let's you know if you have an eyeseight problem</p>
        </div>

        <div class="card-feature mb-5 mb-lg-0">

          <h3>hearing test</h3>
          <p>a 5 minutes test that let's you know if you have a hearing problem  </p>
        </div>

        <div class="card-feature mb-5 mb-lg-0">

          <h3>psychological appointements</h3>
          <p>using our platform you can make a video chat with a Psychiatrist  </p>
        </div>
      </div>
      <div class="row mt-5">
        <div class="col-12 text-center">
          <a class="button mr-3 mb-2" href="#">Sign up now</a>

        </div>
      </div>
    </div>
  </section>
  <!--================ Join section End =================-->


  <!--================ Restaurants section Start =================-->
  <section class="speaker-bg section-padding">
    <div class="container">
      <div class="section-intro section-intro-white text-center pb-98px">
        <!--<p class="section-intro__title">Join the event</p>-->
        <h2 class="primary-text ekhdem" id="contr"><strong>Psychiatrists that are partenered with us</strong> </h2>
        <!--<img src="img/home/section-style.png" alt="">-->
      </div>

      <div class="row">
        <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
          <div class="card-speaker">
            <img class="card-img rounded-0" src="img/home/bazza.jpg" alt="">
            <div class="speaker-footer">
              <h4>ahmed bazza</h4>

            </div>
            <div class="speaker-overlay">
              <ul class="speaker-social">
                <!--<li><a href="#"><i class="ti-facebook"></i></a></li>
                <li><a href="#"><i class="ti-twitter-alt"></i></a></li>
                <li><a href="#"><i class="ti-instagram"></i></a></li>
                <li><a href="#"><i class="ti-skype"></i></a></li>-->
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0 RightRes">
          <div class="card-speaker">
            <img class="card-img rounded-0" src="img/home/ayoub.jpg" alt="">
            <div class="speaker-footer">
              <h4>ayoub Ammar</h4>

            </div>
            <div class="speaker-overlay">
              <ul class="speaker-social">
                 <!--<li><a href="#"><i class="ti-facebook"></i></a></li>
                <li><a href="#"><i class="ti-twitter-alt"></i></a></li>
                <li><a href="#"><i class="ti-instagram"></i></a></li>
                <li><a href="#"><i class="ti-skype"></i></a></li>-->
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
          <div class="card-speaker">
            <img class="card-img rounded-0" src="img/home/peaky.jpg" alt="">
            <div class="speaker-footer">
              <h4>ridha mezrigui</h4>

            </div>
            <div class="speaker-overlay">
              <ul class="speaker-social">
                 <!--<li><a href="#"><i class="ti-facebook"></i></a></li>
                <li><a href="#"><i class="ti-twitter-alt"></i></a></li>
                <li><a href="#"><i class="ti-instagram"></i></a></li>
                <li><a href="#"><i class="ti-skype"></i></a></li>-->
              </ul>
            </div>
          </div>
        </div>

        <!--<div class="w-100 mb-50px d-none d-lg-block"></div>

        <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
          <div class="card-speaker">
            <img class="card-img rounded-0" src="img/home/speaker-1.png" alt="">
            <div class="speaker-footer">
              <h4>Donald Markin</h4>
              <p>UX/UI Designer Microsoft</p>
            </div>
            <div class="speaker-overlay">
              <ul class="speaker-social">
                <li><a href="#"><i class="ti-facebook"></i></a></li>
                <li><a href="#"><i class="ti-twitter-alt"></i></a></li>
                <li><a href="#"><i class="ti-instagram"></i></a></li>
                <li><a href="#"><i class="ti-skype"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
          <div class="card-speaker">
            <img class="card-img rounded-0" src="img/home/speaker-2.png" alt="">
            <div class="speaker-footer">
              <h4>Donald Markin</h4>
              <p>UX/UI Designer Microsoft</p>
            </div>
            <div class="speaker-overlay">
              <ul class="speaker-social">
                <li><a href="#"><i class="ti-facebook"></i></a></li>
                <li><a href="#"><i class="ti-twitter-alt"></i></a></li>
                <li><a href="#"><i class="ti-instagram"></i></a></li>
                <li><a href="#"><i class="ti-skype"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="col-lg-4 col-sm-6 mb-4 mb-lg-0">
          <div class="card-speaker">
            <img class="card-img rounded-0" src="img/home/speaker-3.png" alt="">
            <div class="speaker-footer">
              <h4>Jhon Leonar</h4>
              <p>UX/UI Designer Microsoft</p>
            </div>
            <div class="speaker-overlay">
              <ul class="speaker-social">
                <li><a href="#"><i class="ti-facebook"></i></a></li>
                <li><a href="#"><i class="ti-twitter-alt"></i></a></li>
                <li><a href="#"><i class="ti-instagram"></i></a></li>
                <li><a href="#"><i class="ti-skype"></i></a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>-->
  </section>
  <!--================ Speaker section End =================-->


  <!--================ Schedule section Start =================-->

  <!--================ Schedule section End =================-->


  <!--================ PriceTable section Start =================-->

  <!--================ PriceTable section End =================-->


  <!--================ Sponsor section Start =================-->

  <!--================ Sponsor section End =================-->

  <!--================ Gallery section Start =================-->

  <!--================ Gallery section End =================-->


  <!--================ Blog section Start =================-->

  <!--================ Blog section End =================-->


  <!-- ================ start footer Area ================= -->
  <footer class="footer-area">
    <!--<div class="container">
      <div class="row">
        <div class="col-lg-3  col-md-6 col-sm-6">
          <div class="single-footer-widget">
            <h6>About Umeet</h6>
            <p>
              The world has become so fast paced that people don’t want to stand by reading a page of information to be  they would much rather look at a presentation and understand the message. It has come to a point where images and videos are used more to
            </p>
          </div>
        </div>
        <div class="col-lg-3 col-md-6 col-sm-6">
          <div class="single-footer-widget">
            <h6>Navigation Links</h6>
            <div class="row">
              <div class="col">
                <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Feature</a></li>
                  <li><a href="#">Services</a></li>
                  <li><a href="#">Portfolio</a></li>
                </ul>
              </div>
              <div class="col">
                <ul>
                  <li><a href="#">Team</a></li>
                  <li><a href="#">Pricing</a></li>
                  <li><a href="#">Blog</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-3  col-md-6 col-sm-6">
          <div class="single-footer-widget">
            <h6>Newsletter</h6>-->

          <center>
             <p>
             <b style="color: antiquewhite; margin-bottom: 20%;">Made by : Ahmed Bazza , Mohamed Ayoub Ammar, Ridha Mezrigui</b>
             </p>
          </center>


            <!--<div id="mc_embed_signup">
              <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01" method="get" class="subscription relative">
                <div class="input-group d-flex flex-row">
                  <input name="EMAIL" placeholder="Email Address" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Email Address '" required="" type="email">
                  <button class="btn bb-btn"><span class="lnr lnr-location"></span></button>
                </div>
                <div class="mt-10 info"></div>
              </form>
            </div>
          </div>
        </div>
        <div class="col-lg-3  col-md-6 col-sm-6">
          <div class="single-footer-widget mail-chimp">
            <h6 class="mb-20">InstaFeed</h6>
            <ul class="instafeed d-flex flex-wrap">
              <li><img src="img/instagram/i1.jpg" alt=""></li>
              <li><img src="img/instagram/i2.jpg" alt=""></li>
              <li><img src="img/instagram/i3.jpg" alt=""></li>
              <li><img src="img/instagram/i4.jpg" alt=""></li>
              <li><img src="img/instagram/i5.jpg" alt=""></li>
              <li><img src="img/instagram/i6.jpg" alt=""></li>
              <li><img src="img/instagram/i7.jpg" alt=""></li>
              <li><img src="img/instagram/i8.jpg" alt=""></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="container">
        <div class="row align-items-center">
          <p class="col-lg-8 col-sm-12 footer-text m-0 text-center text-lg-left">--><!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. -->
<!--Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i class="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>-->
<!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --></p>
          <!--<div class="col-lg-4 col-sm-12 footer-social text-center text-lg-right">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-dribbble"></i></a>
            <a href="#"><i class="fab fa-behance"></i></a>
          </div>
        </div>
      </div>
    </div>
  </footer>-->
  <!-- ================ End footer Area ================= -->




  <script src="vendors/jquery/jquery-3.2.1.min.js"></script>
  <script src="vendors/bootstrap/bootstrap.bundle.min.js"></script>
  <script src="vendors/owl-carousel/owl.carousel.min.js"></script>
  <script src="vendors/Magnific-Popup/jquery.magnific-popup.min.js"></script>
  <script src="js/jquery.ajaxchimp.min.js"></script>
  <script src="js/mail-script.js"></script>
  <script src="js/countdown.js"></script>
  <script src="js/jquery.magnific-popup.min.js"></script>
  <script src="js/main.js"></script>



</body>
</html>
