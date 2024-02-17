
import './App.css';
import image1 from '../src/components/images/logo.png'
import image2 from '../src/components/images/mac1.jpg'
import image3 from '../src/components/images/tech.jpg'
import image4 from './components/images/accss.webp'
import image5 from  './components/images/perf.jpg'
import image6 from  './components/images/hp.jpg'
import image7 from  './components/images/acer.png'
import image8 from './components/images/asus.jpg'
import image9 from './components/images/mac.jpg'
import image10 from './components/images/msi.png'
import image11 from './components/images/lenovo.webp'
import image12 from './components/images/intel.jpg'
import image13 from  "./components/images/offc.jpg"
import image14 from  './components/images/gaming1.jpg'
import image15 from './components/images/intel2.jpg'
import image16 from './components/images/ryzen1.png'
import image17 from './components/images/ryzen 2.jpg'
import image18 from './components/images/mac2.jpg'


function App() {
  return (
<>
<meta charSet="UTF-8" />
<meta httpEquiv="X-UA-Compatible" content="IE=edge" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>PRODUCTS RATING WEBSITE</title>
{/* font awesome cdn link  */}
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css"
/>
<link
  rel="stylesheet"
  href="https://unpkg.com/swiper@7/swiper-bundle.min.css"
/>
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/lightgallery-js/1.4.0/css/lightgallery.min.css"
/>
{/* custom css file link  */}
<link rel="stylesheet" href="../src/componets/feedback/" />
{/* header section starts  */}
<header className="header">
  <a href="#home" className="logo">
    {" "}
    <img src={image1} alt="logo" />{" "}
  </a>
  <form action="" className="search-form">
    <input
      type="search"
      name=""
      placeholder="search here..."
      id="search-box"
    />
    <label htmlFor="search-box" className="fas fa-search" />
  </form>
  <div className="icons">
    <div id="menu-btn" className="fas fa-bars" />
    <div id="search-btn" className="fas fa-search" />
    <a href="#" className="fas fa-heart" />
    <a href="#" className="fas fa-shopping-cart" />
  </div>
</header>
{/* navbar section  */}


{/* navbar section  */}
{/* header section ends */}
{/* home section starts  */}
<section className="home" id="home">
  <div className="slide active">
    <div className="content">
      <img src={image2} alt="mac1" />
      <span>new arrivals 2023</span>
      <h3>TECHNOLOGY</h3>
      <a href="#" className="btn">
        read more
      </a>
      <div className="controls">
        <div className="fas fa-angle-left" onclick="prev()" />
        <div className="fas fa-angle-right" onclick="next()" />
      </div>
    </div>
    <div className="image">
      <img src={image3} alt="" />
    </div>
  </div>
  <div className="slide">
    <div className="content">
      <img src="" alt="" />
      <span>new arrivals 2023</span>
      <h3>Accessories</h3>
      <a href="#" className="btn">
        read more
      </a>
      <div className="controls">
        <div className="fas fa-angle-left" onclick="prev()" />
        <div className="fas fa-angle-right" onclick="next()" />
      </div>
    </div>
    <div className="image">
      <img src= {image4} alt="" />
    </div>
  </div>
  <div className="slide">
    <div className="content">
      <img src={image5} alt="" />
      <span>new collections</span>
      <h3>Performance</h3>
      <a href="#" className="btn">
        read more
      </a>
      <div className="controls">
        <div className="fas fa-angle-left" onclick="prev()" />
        <div className="fas fa-angle-right" onclick="next()" />
      </div>
    </div>
    <div className="image">
      <img src={image5} alt="" />
    </div>
  </div>
</section>
{/* home section ends */}
{/* category section starts  */}
<section className="category">
  <a href="#" className="box">
    <img src={image6} alt="" />
    <p>HP</p>
  </a>
  <a href="#" className="box">
    <img src={image7} alt="" />
    <p>ACER</p>
  </a>
  <a href="#" className="box">
    <img src={image8} alt="" />
    <p>ASUS</p>
  </a>
  <a href="#" className="box">
    <img src={image9} alt="" />
    <p>MaC</p>
  </a>
  <a href="#" className="box">
    <img src={image10} alt="" />
    <p>MSI</p>
  </a>
  <a href="#" className="box">
    <img src={image11} alt="" />
    <p>LENOVO</p>
  </a>
</section>
{/* category section ends */}
{/* about section starts  */}
<section className="about" id="about">
  <div className="content">
    <span>why choose us?</span>
    <h3>Technology makes difference</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
      explicabo, quos voluptate incidunt illo, blanditiis, accusamus ut
      quisquam quia sapiente iure. Rerum earum corrupti neque, nobis ratione
      obcaecati voluptatem fuga.
    </p>
    <a href="#" className="btn">
      read more
    </a>
  </div>
</section>
{/* about section ends */}
{/* shop section starts  */}
<section className="shop" id="shop">
  <div className="heading">
    <h1>featured products</h1>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
      consequuntur officia beatae distinctio minus optio?
    </p>
  </div>
  <div className="swiper products-slider">
    <div className="swiper-wrapper">
      <div className="swiper-slide slide">
        <div className="image">
          <span className="discount">-25%</span>
          <img src={image12} alt="" />
          <div className="icons">
            <a href="#" className="fas fa-shopping-cart" />
            <a href="#" className="fas fa-heart" />
            <a href="#" className="fas fa-share" />
          </div>
        </div>
        <div className="content">
          <div className="stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
          <p>Intel products</p>
          <div className="price">
            $49.99 <span>$79.99</span>
          </div>
        </div>
      </div>
      <div className="swiper-slide slide">
        <div className="image">
          <span className="discount">-25%</span>
          <img src={image16} alt="" />
          <div className="icons">
            <a href="#" className="fas fa-shopping-cart" />
            <a href="#" className="fas fa-heart" />
            <a href="#" className="fas fa-share" />
          </div>
        </div>
        <div className="content">
          <div className="stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
          <p>Ryzen products</p>
          <div className="price">
            $49.99 <span>$79.99</span>
          </div>
        </div>
      </div>
      <div className="swiper-slide slide">
        <div className="image">
          <span className="discount">-25%</span>
          <img src={image13} alt="" />
          <div className="icons">
            <a href="#" className="fas fa-shopping-cart" />
            <a href="#" className="fas fa-heart" />
            <a href="#" className="fas fa-share" />
          </div>
        </div>
        <div className="content">
          <div className="stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
          <p>Official products</p>
          <div className="price">
            $49.99 <span>$79.99</span>
          </div>
        </div>
      </div>
      <div className="swiper-slide slide">
        <div className="image">
          <span className="discount">-25%</span>
          <img src={image14} alt="" />
          <div className="icons">
            <a href="#" className="fas fa-shopping-cart" />
            <a href="#" className="fas fa-heart" />
            <a href="#" className="fas fa-share" />
          </div>
        </div>
        <div className="content">
          <div className="stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
          <p>Gaming products</p>
          <div className="price">
            $49.99 <span>$79.99</span>
          </div>
        </div>
      </div>
      <div className="swiper-slide slide">
        <div className="image">
          <span className="discount">-25%</span>
          <img src={image14} alt="" />
          <div className="icons">
            <a href="#" className="fas fa-shopping-cart" />
            <a href="#" className="fas fa-heart" />
            <a href="#" className="fas fa-share" />
          </div>
        </div>
        <div className="content">
          <div className="stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
          <p>Intel products</p>
          <div className="price">
            $49.99 <span>$79.99</span>
          </div>
        </div>
      </div>
      <div className="swiper-slide slide">
        <div className="image">
          <span className="discount">-25%</span>
          <img src={image15} alt="" />
          <div className="icons">
            <a href="#" className="fas fa-shopping-cart" />
            <a href="#" className="fas fa-heart" />
            <a href="#" className="fas fa-share" />
          </div>
        </div>
        <div className="content">
          <div className="stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
          <p>Ryzen products</p>
          <div className="price">
            $49.99 <span>$79.99</span>
          </div>
        </div>
      </div>
      <div className="swiper-slide slide">
        <div className="image">
          <span className="discount">-25%</span>
          <img src={image17} alt="" />
          <div className="icons">
            <a href="#" className="fas fa-shopping-cart" />
            <a href="#" className="fas fa-heart" />
            <a href="#" className="fas fa-share" />
          </div>
        </div>
        <div className="content">
          <div className="stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
          <p>Official products</p>
          <div className="price">
            $49.99 <span>$79.99</span>
          </div>
        </div>
      </div>
      <div className="swiper-slide slide">
        <div className="image">
          <span className="discount">-25%</span>
          <img src={image18} alt="" />
          <div className="icons">
            <a href="#" className="fas fa-shopping-cart" />
            <a href="#" className="fas fa-heart" />
            <a href="#" className="fas fa-share" />
          </div>
        </div>
        <div className="content">
          <div className="stars">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
          </div>
          <p>Gaming products</p>
          <div className="price">
            $49.99 <span>$79.99</span>
          </div>
        </div>
      </div>
    </div>
    <div className="swiper-button-next" />
    <div className="swiper-button-prev" />
  </div>
</section>
{/* shop section ends */}
{/* gallery section starts  */}
<section className="gallery" id="gallery">
  <div className="heading">
    <h1>our gallery</h1>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
      consequuntur officia beatae distinctio minus optio?
    </p>
  </div>
  <div className="lightbox">
    <a href="../img/tech1.jpg">
      <img src="../img/tech1.jpg" alt="" />
    </a>
    <a href="../img/tech2.jpg">
      <img src="../img/tech2.jpg" alt="" />
    </a>
    <a href="../img/tech3.webp">
      <img src="../img/tech3.webp" alt="" />
    </a>
    <a href="../img/tech4.jpg">
      <img src="../img/tech4.jpg" alt="" />
    </a>
    <a href="../img/tech5.jpeg">
      <img src="../img/tech5.jpeg" alt="" />
    </a>
    <a href="../img/tech6.jpg">
      <img src="../img/tech6.jpg" alt="" />
    </a>
  </div>
</section>
{/* gallery section ends */}
{/* team section starts  */}
<section className="team" id="team">
  <div className="heading">
    <h1>our team</h1>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
      consequuntur officia beatae distinctio minus optio?
    </p>
  </div>
  <div className="box-container">
    <div className="box">
      <div className="image">
        <img src="../img/dev.png" alt="" />
        <div className="share">
          <a href="#" className="fab fa-facebook-f" />
          <a href="#" className="fab fa-twitter" />
          <a href="#" className="fab fa-instagram" />
          <a href="#" className="fab fa-linkedin" />
        </div>
      </div>
      <div className="content">
        <h3>Shubhdeep Paul</h3>
        <p>Developer</p>
      </div>
    </div>
    <div className="box">
      <div className="image">
        <img src="images/team-2.png" alt="" />
        <div className="share">
          <a href="#" className="fab fa-facebook-f" />
          <a href="#" className="fab fa-twitter" />
          <a href="#" className="fab fa-instagram" />
          <a href="#" className="fab fa-linkedin" />
        </div>
      </div>
      <div className="content">
        <h3>Abhilash</h3>
        <p>Editor</p>
      </div>
    </div>
    <div className="box">
      <div className="image">
        <img src="images/team-3.png" alt="" />
        <div className="share">
          <a href="#" className="fab fa-facebook-f" />
          <a href="#" className="fab fa-twitter" />
          <a href="#" className="fab fa-instagram" />
          <a href="#" className="fab fa-linkedin" />
        </div>
      </div>
      <div className="content">
        <h3>Harshit Rawat</h3>
        <p>Maintainer</p>
      </div>
    </div>
  </div>
</section>
{/* team section ends */}
{/* arrivals section starts  */}
<section className="arrivals" id="arrivals">
  <div className="heading">
    <h1>new arrivals</h1>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
      consequuntur officia beatae distinctio minus optio?
    </p>
  </div>
  <div className="swiper arrivals-slider">
    <div className="swiper-wrapper">
      <div className="swiper-slide slide">
        <div className="image">
          <img src="../img/intel2.jpg" alt="" />
        </div>
        <div className="content">
          <p>Intel products</p>
          <div className="price">
            $49.99 <span>$79.99</span>
          </div>
          <a href="#" className="btn">
            add to cart
          </a>
        </div>
      </div>
      <div className="swiper-slide slide">
        <div className="image">
          <img src="../img/ryzen 2.jpg" alt="" />
        </div>
        <div className="content">
          <p>Ryzen products</p>
          <div className="price">
            $49.99 <span>$79.99</span>
          </div>
          <a href="#" className="btn">
            add to cart
          </a>
        </div>
      </div>
      <div className="swiper-slide slide">
        <div className="image">
          <img src="../img/offc.jpg" alt="" />
        </div>
        <div className="content">
          <p>Official products</p>
          <div className="price">
            $49.99 <span>$79.99</span>
          </div>
          <a href="#" className="btn">
            add to cart
          </a>
        </div>
      </div>
      <div className="swiper-slide slide">
        <div className="image">
          <img src="../img/gaming 2.jpg" alt="" />
        </div>
        <div className="content">
          <p>Gaming products</p>
          <div className="price">
            $49.99 <span>$79.99</span>
          </div>
          <a href="#" className="btn">
            add to cart
          </a>
        </div>
      </div>
      <div className="swiper-slide slide">
        <div className="image">
          <img src="../img/tech.jpg" alt="" />
        </div>
        <div className="content">
          <p>Performance products</p>
          <div className="price">
            $49.99 <span>$79.99</span>
          </div>
          <a href="#" className="btn">
            add to cart
          </a>
        </div>
      </div>
      <div className="swiper-slide slide">
        <div className="image">
          <img src="../img/ryzen1.png" alt="" />
        </div>
        <div className="content">
          <p>Efficient products</p>
          <div className="price">
            $49.99 <span>$79.99</span>
          </div>
          <a href="#" className="btn">
            add to cart
          </a>
        </div>
      </div>
      <div className="swiper-slide slide">
        <div className="image">
          <img src="../img/mac.jpg" alt="" />
        </div>
        <div className="content">
          <p>Premium products</p>
          <div className="price">
            $49.99 <span>$79.99</span>
          </div>
          <a href="#" className="btn">
            add to cart
          </a>
        </div>
      </div>
      <div className="swiper-slide slide">
        <div className="image">
          <img src="../img/hp.jpg" alt="" />
        </div>
        <div className="content">
          <p>VFM products</p>
          <div className="price">
            $49.99 <span>$79.99</span>
          </div>
          <a href="#" className="btn">
            add to cart
          </a>
        </div>
      </div>
    </div>
    <div className="swiper-button-next" />
    <div className="swiper-button-prev" />
  </div>
</section>
{/* arrivals section ends */}
{/* reviews section starts  */}
<section className="reviews">
  <div className="swiper reviews-slider">
    <div className="swiper-wrapper">
      <div className="swiper-slide slide">
        <div className="user">
          <img src="../img/feed1.jpg" alt="" />
          <div className="info">
            <h3>Shubhdeep</h3>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
          </div>
        </div>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. In quis
          ipsa aspernatur incidunt iusto veniam cumque error quaerat officia.
          Aspernatur?
        </p>
      </div>
      <div className="swiper-slide slide">
        <div className="user">
          <img src="images/pic-2.png" alt="" />
          <div className="info">
            <h3>Abhilash</h3>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
          </div>
        </div>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          similique, numquam non, quasi, voluptatibus perspiciatis fugiat
          incidunt veniam nulla in aut aliquid necessitatibus nobis reiciendis
          ullam explicabo. Nulla, rem adipisci.
        </p>
      </div>
      <div className="swiper-slide slide">
        <div className="user">
          <img src="images/pic-3.png" alt="" />
          <div className="info">
            <h3>Harshit</h3>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
          </div>
        </div>
        <p className="text">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit
          aliquid mollitia voluptatem alias illo officiis.
        </p>
      </div>
      <div className="swiper-slide slide">
        <div className="user">
          <img src="images/pic-4.png" alt="" />
          <div className="info">
            <h3>john deo</h3>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
          </div>
        </div>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. In quis
          ipsa aspernatur incidunt iusto veniam cumque error quaerat officia.
          Aspernatur?
        </p>
      </div>
      <div className="swiper-slide slide">
        <div className="user">
          <img src="images/pic-5.png" alt="" />
          <div className="info">
            <h3>john deo</h3>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
          </div>
        </div>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          sequi minima sed obcaecati iste beatae quo praesentium, deleniti
          earum velit labore nobis voluptates a quam veniam delectus fugiat!
          Saepe, eos!
        </p>
      </div>
      <div className="swiper-slide slide">
        <div className="user">
          <img src="images/pic-6.png" alt="" />
          <div className="info">
            <h3>john deo</h3>
            <div className="stars">
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star" />
              <i className="fas fa-star-half-alt" />
            </div>
          </div>
        </div>
        <p className="text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. In quis
          ipsa aspernatur incidunt iusto veniam cumque error quaerat officia.
          Aspernatur?
        </p>
      </div>
    </div>
  </div>
</section>
{/* reviews section ends  */}
{/* service section starts  */}
<section className="service">
  <div className="box">
    <img src="images/service-1.png" alt="" />
    <h3>free shipping</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
      fugit?
    </p>
  </div>
  <div className="box">
    <img src="images/service-2.png" alt="" />
    <h3>secure payment</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
      fugit?
    </p>
  </div>
  <div className="box">
    <img src="images/service-3.png" alt="" />
    <h3>24/7 support</h3>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
      fugit?
    </p>
  </div>
</section>
{/* service section ends */}
{/* blogs section starts  */}
<section className="blogs" id="blogs">
  <div className="heading">
    <h1>our daily blogs</h1>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi
      consequuntur officia beatae distinctio minus optio?
    </p>
  </div>
  <div className="swiper blogs-slider">
    <div className="swiper-wrapper">
      <div className="swiper-slide slide">
        <div className="image">
          <img src="images/img-1.jpg" alt="" />
          <div className="icons">
            <a href="#">
              {" "}
              <i className="fas fa-user" /> by admin{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-clock" /> 21st may, 2021{" "}
            </a>
          </div>
        </div>
        <div className="content">
          <h3>blog title goes</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            debitis?
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </div>
      </div>
      <div className="swiper-slide slide">
        <div className="image">
          <img src="images/img-2.jpg" alt="" />
          <div className="icons">
            <a href="#">
              {" "}
              <i className="fas fa-user" /> by admin{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-clock" /> 21st may, 2021{" "}
            </a>
          </div>
        </div>
        <div className="content">
          <h3>blog title goes</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            debitis?
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </div>
      </div>
      <div className="swiper-slide slide">
        <div className="image">
          <img src="images/img-3.jpg" alt="" />
          <div className="icons">
            <a href="#">
              {" "}
              <i className="fas fa-user" /> by admin{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-clock" /> 21st may, 2021{" "}
            </a>
          </div>
        </div>
        <div className="content">
          <h3>blog title goes</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            debitis?
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </div>
      </div>
      <div className="swiper-slide slide">
        <div className="image">
          <img src="images/img-4.jpg" alt="" />
          <div className="icons">
            <a href="#">
              {" "}
              <i className="fas fa-user" /> by admin{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-clock" /> 21st may, 2021{" "}
            </a>
          </div>
        </div>
        <div className="content">
          <h3>blog title goes</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            debitis?
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </div>
      </div>
      <div className="swiper-slide slide">
        <div className="image">
          <img src="images/img-5.jpg" alt="" />
          <div className="icons">
            <a href="#">
              {" "}
              <i className="fas fa-user" /> by admin{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-clock" /> 21st may, 2021{" "}
            </a>
          </div>
        </div>
        <div className="content">
          <h3>blog title goes</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            debitis?
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </div>
      </div>
      <div className="swiper-slide slide">
        <div className="image">
          <img src="images/img-6.jpg" alt="" />
          <div className="icons">
            <a href="#">
              {" "}
              <i className="fas fa-user" /> by admin{" "}
            </a>
            <a href="#">
              {" "}
              <i className="fas fa-clock" /> 21st may, 2021{" "}
            </a>
          </div>
        </div>
        <div className="content">
          <h3>blog title goes</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            debitis?
          </p>
          <a href="#" className="btn">
            read more
          </a>
        </div>
      </div>
    </div>
    <div className="swiper-button-next" />
    <div className="swiper-button-prev" />
  </div>
</section>
{/* blogs section ends */}
{/* footer section starts  */}
<section className="footer">
  <div className="box-container">
    <div className="box">
      <h3>quick links</h3>
      <a className="link" href="#home">
        {" "}
        <i className="fas fa-angle-right" /> home
      </a>
      <a className="link" href="#shop">
        {" "}
        <i className="fas fa-angle-right" /> shop
      </a>
      <a className="link" href="#gallery">
        {" "}
        <i className="fas fa-angle-right" /> gallery
      </a>
      <a className="link" href="#team">
        {" "}
        <i className="fas fa-angle-right" /> team
      </a>
      <a className="link" href="#arrivals">
        {" "}
        <i className="fas fa-angle-right" /> arrivals
      </a>
      <a className="link" href="#blogs">
        {" "}
        <i className="fas fa-angle-right" /> blogs
      </a>
    </div>
    <div className="box">
      <h3>extra links</h3>
      <a href="#" className="link">
        {" "}
        <i className="fas fa-angle-right" /> my order{" "}
      </a>
      <a href="#" className="link">
        {" "}
        <i className="fas fa-angle-right" /> my favorite{" "}
      </a>
      <a href="#" className="link">
        {" "}
        <i className="fas fa-angle-right" /> my wishlist{" "}
      </a>
      <a href="#" className="link">
        {" "}
        <i className="fas fa-angle-right" /> private policy{" "}
      </a>
      <a href="#" className="link">
        {" "}
        <i className="fas fa-angle-right" /> terms of use{" "}
      </a>
    </div>
    <div className="box">
      <h3>contact info</h3>
      <p>
        {" "}
        <i className="fas fa-phone" /> +91 8383999623{" "}
      </p>
      <p>
        {" "}
        <i className="fas fa-phone" /> +91 8383999623{" "}
      </p>
      <p>
        {" "}
        <i className="fas fa-envelope" /> shubhdeeppaul71@gmail.com{" "}
      </p>
      <p>
        {" "}
        <i className="fas fa-map" /> Delhi, india - 110085{" "}
      </p>
      <div className="share">
        <a href="#" className="fab fa-facebook-f" />
        <a href="#" className="fab fa-twitter" />
        <a href="#" className="fab fa-instagram" />
        <a href="#" className="fab fa-linkedin" />
      </div>
    </div>
    <div className="box">
      <h3>newsletter</h3>
      <p>subscribe for latest updates</p>
      <form action="">
        <input
          type="email"
          name=""
          placeholder="enter your email"
          id=""
          className="email"
        />
        <input type="submit" defaultValue="subscribe" className="btn" />
      </form>
    </div>
  </div>
  <div className="credit">
    {" "}
    created by <span>S</span> | all rights reserved!{" "}
  </div>
</section>
{/* footer section ends */}
{/* custom js file link      */}
</>

);
}

export default App;
