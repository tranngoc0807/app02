import "../Banner/Banner.css";
import { useState, useEffect } from "react";
import Food from "../../../asset/img/food.png";
import Food1 from "../../../asset/img/food1.png";
import Food2 from "../../../asset/img/food2.png";
import Food3 from "../../../asset/img/food3.png";
import Food4 from "../../../asset/img/food4.png";
import Food5 from "../../../asset/img/food5.png";
import Food6 from "../../../asset/img/food6.png";
import Food7 from "../../../asset/img/food7.png";
import Man from "../../../asset/img/man.png";
import Contact from "../../../asset/img/contact.png";
import Slideshow1 from "../../../asset/img/slideshow1.png";
import Slideshow2 from "../../../asset/img/slideshow2.png";
import Slideshow3 from "../../../asset/img/slideshow3.png";
import Slideshow4 from "../../../asset/img/slideshow4.png";
import Slideshow5 from "../../../asset/img/slideshow5.png";
import Bannergirl from "../../../asset/img/bannergirl.png";
import { Row, Col } from "reactstrap";
export function Banner() {
  const fakeData = [
    {
      id: 1,
      logo: Food,
      name: "Marketing",
    },
    {
      id: 2,
      logo: Food1,
      name: "Graphics",
    },
    {
      id: 3,
      logo: Food2,
      name: "Marketing",
    },
    {
      id: 4,
      logo: Food3,
      name: "Graphics",
    },
    {
      id: 5,
      logo: Food4,
      name: "Web Design",
    },
    {
      id: 6,
      logo: Food5,
      name: "Marketing",
    },
    {
      id: 7,
      logo: Food6,
      name: "Web Design",
    },
    {
      id: 8,
      logo: Food7,
      name: "Graphics",
    },
  ];
  let [products, setProducts] = useState([]);
  const handleFilterName = (filterName) => {
   
    const listArrays = filterName
      ? fakeData.filter((i) => i.name === filterName)
      : fakeData;
    setProducts(listArrays);
  };
  useEffect(() => {
    setProducts(fakeData);
  }, []);
  function isEmpty(obj) {
    return Object.keys(obj).length === 0;
  }
  return (
    <div>
      <div className="girl-logo">
        <div className="body-girl-logo">
          <div className="top-body-girl-logo">
            <div className="item-body-girl-logo">
              <div className="sub-item-body-girl-logo">RESPONSIVE</div>
              <div className="sub-item-body-girl-logo">OPTIMIZATION</div>
              <div className="sub-item-body-girl-logo">WEB DESIGN</div>
              <div className="sub-item-body-girl-logo">DEVELOPMENT</div>
            </div>
          </div>
          <div className="footer-body-girl-logo">
            <div className="left-logo-girl">
              <img src={Bannergirl} style={{ width: "100%" }} />
            </div>
            <div className="right-logo-girl">
              <div className="sub-right-logo-girl">
                <div className="cusnumber">01</div>
                <div className="name-logo-girl">
                  When Creativity Matters in life
                </div>
                <div className="title-logo-girl">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quidem perferendis quod debitis ab sed sapiente. Ducimus
                  tempore, doloremque asperiores natus reprehenderit dignissimos
                  beatae molestias tenetur cupiditate architecto culpa quibusdam
                  velit magnam sapiente accusantium, repellat earum!
                </div>
                <div className="button-footer-logo-girl">
                  <div className="sub-button-footer-logo-girl">
                    <button
                      type="button"
                      className="btn btn-danger"
                      style={{ borderRadius: "20px", width: "100%" }}
                    >
                      <div className="text-button-logo-girl">GET IN TOUCH</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="food-logo">
        <div className="body-food-logo">
          <div className="top-body-food-logo">
            <div className="item-body-food-logo">
              <div className="name-item-food-logo">
                <div className="sub-item-body-food-logo">
                  <div className="cus-sub-item-body-food-logo one">
                    <button onClick={() => handleFilterName("")} style={{borderRadius:'5px'}} >
                      All Projects
                    </button>
                  </div>
                </div>
                <div className="sub-item-body-food-logo">
                  <div className="cus-sub-item-body-food-logo ">
                    <button onClick={() => handleFilterName("Graphics")} style={{borderRadius:'5px'}}>
                      Graphics
                    </button>
                  </div>
                </div>
                <div className="sub-item-body-food-logo">
                  <div className="cus-sub-item-body-food-logo ">
                    <button onClick={() => handleFilterName("Web Design")} style={{borderRadius:'5px'}}>
                      Web Design
                    </button>
                  </div>
                </div>
                <div className="sub-item-body-food-logo">
                  <div className="cus-sub-item-body-food-logo ">
                    <button onClick={() => handleFilterName("Marketing")} style={{borderRadius:'5px'}}>
                      Marketing
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-body-food-logo">
            <div className="top-item-food-img">
              <Row style={{width:'100%'}}>
                {products.map((product, index) => (
                  <div className="item-img-food">
                    <img
                      style={{ width: "100%", padding: "15px 0px" }}
                      src={product.logo}
                    ></img>
                  </div>
                ))}
              </Row>
            </div>
          </div>
        </div>
      </div>
      <div className="feedback">
        <div className="feedback-content">
          <div className="chil-feedback-content">
            <div className="sub-chil-feedback-content">
              <div className="feedback-man">
                <img src={Man} />
              </div>
              <div className="item-chil-feedback">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
                perferendis quod debitis ab sed sapiente.Ducimus tempore,
                doloremque asperiores natus reprehenderit
              </div>
              <div className="item-chil-feedback-footer">KRISTIANA</div>
              <div style={{ textAlign: "center" }}>
                <button type="button" class="btn btn-danger">
                  <div className="text-size-button-feedback">Web Design</div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="option-price">
        <div className="sub-option-price">
          <div className="name-sub-option-price">
            <div className="item-option-price">
              <div className="sub-item-option-price">
                <div className="bold">
                  <div className="name-bold">Free</div>
                  <div className="price-bold">$00/month</div>
                </div>
                <div className="blur">
                  <div className="item-blur">10 GB Disk Space </div>
                  <div className="item-blur">15 Domain Names</div>
                  <div className="item-blur">4 Email Address</div>
                  <div className="item-blur"> Enhanced Secur</div>
                </div>
                <div className="button-footer-option">
                  <div className="sub-button-footer-option">
                    <button
                      type="button"
                      class="btn btn-danger"
                      style={{ borderRadius: "20px", width: "100%" }}
                    >
                      <div
                        className="text-option-chil"
                        style={{ width: "100%" }}
                      >
                        Purchase Now
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="item-option-price">
              <div className="sub-item-option-price">
                <div className="bold">
                  <div className="name-bold">Basic</div>
                  <div className="price-bold">$10/month</div>
                </div>
                <div className="blur">
                  <div className="item-blur">10 GB Disk Space </div>
                  <div className="item-blur">15 Domain Names</div>
                  <div className="item-blur">4 Email Address</div>
                  <div className="item-blur"> Enhanced Secur</div>
                </div>
                <div className="button-footer-option">
                  <div className="sub-button-footer-option">
                    <button
                      type="button"
                      class="btn btn-danger"
                      style={{ borderRadius: "20px", width: "100%" }}
                    >
                      <div className="text-option-chil">Purchase Now</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="item-option-price">
              <div className="sub-item-option-price">
                <div className="bold">
                  <div className="name-bold">Standard</div>
                  <div className="price-bold">$30/month</div>
                </div>
                <div className="blur">
                  <div className="item-blur">10 GB Disk Space </div>
                  <div className="item-blur">15 Domain Names</div>
                  <div className="item-blur">4 Email Address</div>
                  <div className="item-blur"> Enhanced Secur</div>
                </div>
                <div className="button-footer-option">
                  <div className="sub-button-footer-option">
                    <button
                      type="button"
                      class="btn btn-danger"
                      style={{ borderRadius: "20px", width: "100%" }}
                    >
                      <div className="text-option-chil">Purchase Now</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="item-option-price">
              <div className="sub-item-option-price">
                <div className="bold">
                  <div className="name-bold">Premium</div>
                  <div className="price-bold">$80/month</div>
                </div>
                <div className="blur">
                  <div className="item-blur">10 GB Disk Space </div>
                  <div className="item-blur">15 Domain Names</div>
                  <div className="item-blur">4 Email Address</div>
                  <div className="item-blur"> Enhanced Secur</div>
                </div>
                <div className="button-footer-option">
                  <div className="sub-button-footer-option">
                    <button
                      type="button"
                      class="btn btn-danger"
                      style={{ borderRadius: "20px", width: "100%" }}
                    >
                      <div className="text-option-chil">Purchase Now</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="information">
        <div className="sub-information">
          <div className="chil-sub-information">
            <div className="chil-item-information">
              <div>
                <div style={{ width: "100%" }}>
                  <img src={Contact} style={{ width: "50%" }} />
                </div>
              </div>
              <div className="number-item-information">446</div>
              <div className="text-item-information">+ PROJECTS </div>
            </div>
            <div className="chil-item-information">
              <div>
                <div style={{ width: "100%" }}>
                  <img src={Contact} style={{ width: "50%" }} />
                </div>
              </div>
              <div className="number-item-information">1200</div>
              <div className="text-item-information">+ VIDEOS </div>
            </div>
            <div className="chil-item-information">
              <div>
                <div style={{ width: "100%" }}>
                  <img src={Contact} style={{ width: "50%" }} />
                </div>
              </div>
              <div className="number-item-information">990</div>
              <div className="text-item-information">+ AWARDS </div>
            </div>
            <div className="chil-item-information">
              <div>
                <div style={{ width: "100%" }}>
                  <img src={Contact} style={{ width: "50%" }} />
                </div>
              </div>
              <div className="number-item-information">1232</div>
              <div className="text-item-information">+ CLIENTS </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slideshow">
        <div className="body-slideshow">
          <div className="sub-slideshow">
            <div className="top-slideshow">
              <div className="name-top-slideshow">Satisfied clients</div>
              <div className="title-top-slideshow">Our Happy Clients</div>
            </div>
            <marquee
              direction=""
              onmouseover="this.stop();"
              onmouseout="this.start();"
            >
              <div className="footer-slideshow">
                <div className="slideshow-item">
                  <div className="item-slides">
                    <img src={Slideshow5} style={{ width: "100%" }} />
                  </div>
                  <div className="item-slides">
                    <img src={Slideshow1} style={{ width: "100%" }} />
                  </div>
                  <div className="item-slides">
                    <img src={Slideshow2} style={{ width: "100%" }} />
                  </div>
                  <div className="item-slides">
                    <img src={Slideshow3} style={{ width: "100%" }} />
                  </div>
                  <div className="item-slides">
                    <img src={Slideshow4} style={{ width: "100%" }} />
                  </div>
                  <div className="item-slides">
                    <img src={Slideshow5} style={{ width: "100%" }} />
                  </div>
                </div>
              </div>
            </marquee>
          </div>
        </div>
      </div>
      {/* <div className="contact">
        <div className="tower">
          <div className="title-top-contact">GET IN TOUCH</div>
        </div>
        <div>1</div>
        <div className="body-contact">
          <div className="left-body-contact">1</div>
          <div className="right
          
          -body-contact">1</div>
        </div>
      </div> */}
    </div>
  );
}

export default Banner;
