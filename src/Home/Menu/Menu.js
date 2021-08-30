import "./Menu.css";
import "antd/dist/antd.css";
import { Progress } from "antd";
import Icon from "../../asset/img/icon.png";
import Icon1 from "../../asset/img/icon1.png";
import Icon2 from "../../asset/img/icon2.png";
import Icon3 from "../../asset/img/icon3.png";
import Icon4 from "../../asset/img/icon4.png";
import Icon5 from "../../asset/img/icon5.png";
import Icon6 from "../../asset/img/icon6.png";
import Play from "../../asset/img/play.png";
import Person from "../../asset/img/person.png";
import Person1 from "../../asset/img/person1.png";
import Phone from "../../asset/img/phone.JPG";
import Note from "../../asset/img/note.JPG";
import Loa from "../../asset/img/loa.JPG";
import Setting from "../../asset/img/setting.JPG";
import Banner from "./Banner/Banner";
export function Menu() {
  return (
    <div className="menu">
      <div className="chil-menu">
        <div className="sub-menu">
          <div className="title">SERVICES</div>
          <div className="body-menu">
            <div className="chil-body-menu">
              <div className="sub-chil">
                <div className="sub-chil-item">
                  <div className="sub-chil-logo">
                    <img src={Icon} />
                  </div>
                  <div className="sub-chil-name">Free Trial</div>
                  <div className="sub-chil-title">
                    Class aptent is not conub rep tos
                  </div>
                </div>
              </div>
              <div className="sub-chil">
                <div className="sub-chil-item">
                  <div className="sub-chil-logo">
                    <img src={Icon1} />
                  </div>
                  <div className="sub-chil-name">Secure Payment</div>
                  <div className="sub-chil-title">
                    Class aptent is not conub rep tos
                  </div>
                </div>
              </div>
              <div className="sub-chil">
                <div className="sub-chil-item">
                  <div className="sub-chil-logo">
                    <img src={Icon2} />
                  </div>
                  <div className="sub-chil-name">No Setup</div>
                  <div className="sub-chil-title">
                    Class aptent is not conub rep tos
                  </div>
                </div>
              </div>
              <div className="sub-chil">
                <div className="sub-chil-item">
                  <div className="sub-chil-logo">
                    <img src={Icon} />
                  </div>
                  <div className="sub-chil-name">24th Support</div>
                  <div className="sub-chil-title">
                    Class aptent is not conub rep tos
                  </div>
                </div>
              </div>
            </div>
            <div className="chil-body-menu">
              <div className="sub-chil">
                <div className="sub-chil-item">
                  <div className="sub-chil-logo">
                    <img src={Icon3} />
                  </div>
                  <div className="sub-chil-name">Quick Access</div>
                  <div className="sub-chil-title">
                    Class aptent is not conub rep tos
                  </div>
                </div>
              </div>
              <div className="sub-chil">
                <div className="sub-chil-item">
                  <div className="sub-chil-logo">
                    <img src={Icon4} />
                  </div>
                  <div className="sub-chil-name">Track Anywhere </div>
                  <div className="sub-chil-title">
                    Class aptent is not conub rep tos
                  </div>
                </div>
              </div>
              <div className="sub-chil">
                <div className="sub-chil-item">
                  <div className="sub-chil-logo">
                    <img src={Icon5} />
                  </div>
                  <div className="sub-chil-name">Manger User</div>
                  <div className="sub-chil-title">
                    Class aptent is not conub rep tos
                  </div>
                </div>
              </div>
              <div className="sub-chil">
                <div className="sub-chil-item">
                  <div className="sub-chil-logo">
                    <img src={Icon6} />
                  </div>
                  <div className="sub-chil-name">Daily Update</div>
                  <div className="sub-chil-title">
                    Class aptent is not conub rep tos
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="banner-logo">
            <div className="title-top">
              <div className="chil-title-top">MAKE AMAZING WEBSITE</div>
              <div className="chil-title-bot">Watch Our Tutorials</div>
            </div>
            <div className="banner">
              <div className="body-banner">
                <div className="item-play">
                  <img src={Play} style={{width:'15%'}}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="product-wrapper">
        <div className="product-item">
          <div className="chil-item-product left">
            <div className="sub-item-product">
              <div></div>
              <div className="font-text">Target</div>
              <div className="title-font-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
                impedit mollitia distinctio, suscipit vero laudantium debitis
                nobis tenetur dolores doloribus!
              </div>
            </div>
          </div>
          <div className="chil-item-product center">
            <div className="sub-item-product center">
              <div></div>
              <div className="font-text">Work</div>
              <div className="title-font-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
                impedit mollitia distinctio, suscipit vero laudantium debitis
                nobis tenetur dolores doloribus!
              </div>
            </div>
          </div>
          <div className="chil-item-product left">
            <div className="sub-item-product">
              <div></div>
              <div className="font-text">Hoping</div>
              <div className="title-font-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit
                impedit mollitia distinctio, suscipit vero laudantium debitis
                nobis tenetur dolores doloribus!
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="post">
        <div className="body-post">
          <div className="left-body-post">
            <div className="item-left-body">
              <div className="item-top-left-post">
                <div className="text-top-left-post">Meet our Awesome Team</div>
              </div>
              <div className="item-body-left-post">
                <div  className="text-item-body-left-post" >
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Vitae temporibus assumenda laudantium, explicabo aliquam error
                  magni magnam est, fugit quasi earum cum! Quis adipisci sequi
                </div>
              </div>
              <div className="item-footer-left-post"></div>
            </div>
          </div>
          <div className="right-body-post">
            <div className="item-right-post">
              <div className="chil-item-left-post">
                <div className="cus-img-left">
                  <img src={Person} style={{ width: "100%" }} />
                </div>
              </div>
              <div className="chil-item-right-post">
                <div className="cus-img-right">
                  <img src={Person1} style={{ width: "100%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="progressbar">
        <div className="progressbar-sub">
          <div className="left-progressbar">
            <div className="item-progressbar">
              <div className="chil-item-progressbar">
                <div className="title-progress-item">Web Design</div>
                <div className="body-item-progressbar">
                  <Progress percent={95} />
                </div>
              </div>
              <div className="chil-item-progressbar">
                <div className="title-progress-item">Web Development</div>
                <div className="body-item-progressbar">
                  <Progress percent={75} />
                </div>
              </div>
              <div className="chil-item-progressbar"></div>
            </div>
          </div>
          <div className="right-progressbar">
            <div className="item-progressbar">
              <div className="chil-item-progressbar">
                <div className="title-progress-item">Photoshop/Lightroom</div>
                <div className="body-item-progressbar">
                  <Progress percent={75} />
                </div>
              </div>
              <div className="chil-item-progressbar">
                <div className="title-progress-item">Digital Social</div>
                <div className="body-item-progressbar">
                  <Progress percent={90} />
                </div>
              </div>
              <div className="chil-item-progressbar"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="banner-accessory">
        <div className="backgoud-banner">
          <div className="item-title-banner">
            <div className="title-banner-item-top">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </div>
            <div className="title-banner-item-body">Daniel Edward</div>
            <div className="title-banner-item-footer">Manager</div>
          </div>
        </div>
      </div>
      <div className="phone-item">
        <div className="body-phone-item">
          <div className="top-title-phone-item">
            <div className="name-top-title-phone-item">AWESOME FEATURES</div>
            <div className="detail-top-title-phone-item">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </div>
          </div>
          <div className="footer-title-phone-item">
            <div className="sub-footer-title-phone-item">
              <div className="phone-img">
                <div className="sub-phone-img">
                  <img src={Phone} style={{ width: "100%" }} />
                </div>
              </div>
              <div className="contac-phone-item">
                <div className="sub-contac-phone-item">
                  <div className="chil-item-sub-phone">
                    <div className="item-contac-phone-logo">
                      <div>
                        <img src={Note} style={{ width: "100%" }} />
                      </div>
                    </div>
                    <div className="detail-item-contac-phone">
                      <div className="top-contact">
                        <div className="title-top-contact">CREATIVE DESIGN</div>
                        <div className="text-size-phone-contact">Lorem ipsum dolor sit amet</div>
                      </div>
                      <div className="footer-contact text-size-phone-contact">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        iusto veniam, animi nam explicabo est adipisci tempora
                        nesciunt ab pariatur necessitatibus autem laudantium non
                        sint facere.
                      </div>
                    </div>
                  </div>
                  <div className="chil-item-sub-phone">
                    <div className="item-contac-phone-logo">
                      <div>
                        <img src={Loa} style={{ width: "100%" }} />
                      </div>
                    </div>
                    <div className="detail-item-contac-phone">
                      <div className="top-contact">
                        <div className="title-top-contact">
                          EASY CUSTOMIZATION
                        </div>
                        <div className="text-size-phone-contact">Lorem ipsum dolor sit amet</div>
                      </div>
                      <div className="footer-contact text-size-phone-contact">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        iusto veniam, animi nam explicabo est adipisci tempora
                        nesciunt ab pariatur necessitatibus autem laudantium non
                        sint facere.
                      </div>
                    </div>
                  </div>
                  <div className="chil-item-sub-phone">
                    <div className="item-contac-phone-logo">
                      <div>
                        <img src={Setting} style={{ width: "100%" }} />
                      </div>
                    </div>
                    <div className="detail-item-contac-phone">
                      <div className="top-contact">
                        <div className="title-top-contact">MINIMAL DESIGN</div>
                        <div className="text-size-phone-contact">Lorem ipsum dolor sit amet</div>
                      </div>
                      <div className="footer-contact text-size-phone-contact">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit
                        iusto veniam, animi nam explicabo est adipisci tempora
                        nesciunt ab pariatur necessitatibus autem laudantium non
                        sint facere.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Banner />
      </div>
    </div>
  );
}

export default Menu;
