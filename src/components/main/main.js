import './main.css'

function LandingPage() {
    return (
<>

  <meta charSet="UTF-8" />
  <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <link rel="stylesheet" href="index.css" />
  <title>Landing Page</title>
  <nav>
    <div className="heading">Landing Page</div>
    <span className="sideMenuButton" onclick="openNavbar()">
      ☰
    </span>
    <div className="navbar">
      <ul>
        <li>
          <a href="#Home">Home</a>
        </li>
        <li>
          <a href="#">About</a>
        </li>
        <li>
          <a href="#">Sign Up</a>
        </li>
      </ul>
    </div>
  </nav>
  {/* Side navigation bar for 
  responsive website */}
  <div className="sideNavigationBar" id="sideNavigationBar">
    <a href="#" className="closeButton" onclick="closeNavbar()">
      ❌
    </a>
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Sign Up</a>
  </div>
  {/* Content */}
  <div className="line" id="Home">
    <div className="side1">
      <h1>GeeksforGeeks</h1>
      <button>
        <a href="https://www.geeksforgeeks.org/">Explore More</a>
      </button>
    </div>
    <div className="side2">
      <img
        src="https://media.geeksforgeeks.org/wp-content/cdn-uploads/20220401124017/HTML-Tutorial.png"
        width={500}
      />
    </div>
  </div>
  <section className="about" id="My Projects">
    <div className="content">
      <div className="title">
        <span>Courses</span>
      </div>
      <div className="boxes">
        <div className="box">
          <div className="topic">
            <a href="" target="_blank">
              DSA
            </a>
          </div>
          <p>
            The term DSA stands for Data Structures and Algorithms. As the name
            itself suggests, it is a combination of two separate yet
            interrelated topics.
          </p>
        </div>
        <div className="box">
          <div className="topic">
            <a href="" target="_blank">
              HTML
            </a>
          </div>
          <p>
            HTML stands for HyperText Markup Language. It is used to design web
            pages using the markup language.
          </p>
        </div>
        <div className="box">
          <div className="topic">
            <a href="" target="_blank">
              Javascript
            </a>
          </div>
          <p>
            JavaScript (JS) is the most popular lightweight, interpreted
            compiled programming language.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section className="contact" id="contact">
    <div className="content">
      <div className="title">
        <span>Sign Up</span>
      </div>
      <div className="contactMenu">
        <div className="input1">
          <div className="label1">Your Name</div>
          <div className="input2">
            <input type="text" placeholder="Enter your Name here" />
          </div>
          <div className="label1">
            <label>Your Email</label>
          </div>
          <div className="input2">
            <input type="text" placeholder="Enter your Email here" />
          </div>
          <div className="label1">
            <label>Your Password</label>
          </div>
          <div className="input2">
            <input type="text" placeholder="Enter your Password here" />
          </div>
          <div className="button">
            <button>Sign Up</button>
          </div>
        </div>
        <div className="input3">
          <div className="rightside1">
            <div className="title1">
              <span>Contact Us</span>
            </div>
            <div className="content1">
              A-143, 9th Floor, Sovereign Corporate Tower, Sector-136, Noida,
              Uttar Pradesh - 201305
            </div>
            <div className="title1">
              <span>More Information</span>
            </div>
            <div className="content1">
              Greetings to all the Geeks out there! We welcome you to the
              platform where we consistently strive to offer the best of
              education. This platform has been designed for every geek wishing
              to expand their knowledge, share their knowledge and is ready to
              grab their dream job. We have millions of articles, live as well
              as online courses, thousands of tutorials and much more just for
              the geek inside you.Thank you for choosing and supporting us!
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Footer section */}
  <footer>
    <div className="footer">
      <span>
        Created By
        <a href="https://www.geeksforgeeks.org/" target="_blank">
          GeeksforGeeks
        </a>
      </span>
    </div>
  </footer>
</>

);
}

export default LandingPage;