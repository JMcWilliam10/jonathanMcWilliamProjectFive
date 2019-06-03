import React, { Component } from "react";
import DidYouKnow from "./DidYouKnow";
import Fade from "react-reveal/Fade";
class Facts extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <Fade cascade>
          <h2>A Few Facts</h2>
        </Fade>
        <DidYouKnow
          imgClass="questionOneTwo"
          imgSrc="https://www.sparkontario.ca/sites/default/files/styles/new_opportunity_image/public/opportunity_images/tgln_heros.png?itok=LoxKCFJ_"
          imgAlt="1 donor can save 8 lives"
          questionPartOne="One donor can save up to "
          questionPartTwo=" lives"
          optionSelect0="---"
          optionSelect1="2"
          optionSelect2="4"
          optionSelect3="6"
          optionSelect4="8"
          selectWidth="howManyLives"
        />
        <DidYouKnow
          imgClass="questionOneTHREE"
          imgSrc="https://media.socastsrm.com/wordpress/wp-content/blogs.dir/1948/files/2019/02/Trillium-Gift-of-Life-Donors-Save-lifes-graphic_3.jpg"
          imgAlt="placeholder"
          questionPartOne="In 2015, "
          questionPartTwo=" individuals received a lifesaving organ transplant"
          optionSelect0="---"
          optionSelect1="123"
          optionSelect2="489"
          optionSelect3="704"
          optionSelect4="1,086"
          selectWidth="howManyLives"
        />
        <DidYouKnow
          imgClass="questionOnefour"
          imgSrc="https://pbs.twimg.com/media/DI-o7cbV4AAGnGc.jpg"
          imgAlt="Altplaceee"
          questionPartOne="In 2017, "
          questionPartTwo=" children in Ontario attended their first day of school thanks to organ donors"
          optionSelect0="---"
          optionSelect1="12"
          optionSelect2="22"
          optionSelect3="32"
          optionSelect4="42"
          selectWidth="howManyLives"
        />
        <DidYouKnow
          imgClass="questionOneFive"
          imgSrc="http://health.sunnybrook.ca/wp-content/uploads/2017/04/rsz_otd-key-message-graphic-beadonor-month-tgln.png"
          imgAlt="1 donor can save 8 lives"
          questionPartOne="Up to "
          questionPartTwo=" Ontarians mistakenly believe they are registered organ and tissue donors."
          optionSelect0="----------------"
          optionSelect1="10,000"
          optionSelect2="100,000"
          optionSelect3="500,000"
          optionSelect4="1.8 Million"
          selectWidth="howManyLivesLong"
        />
        <DidYouKnow
          imgClass="questionSix"
          imgSrc="https://i.imgur.com/9x19ues.png"
          imgAlt="1684 Ontarios are currently waiting for an organ transplant as of march 31, 2019"
          questionPartOne=""
          questionPartTwo=" Ontarians are currently waiting for an organ transplant"
          optionSelect0="----------------"
          optionSelect1="89"
          optionSelect2="400"
          optionSelect3="892"
          optionSelect4="1,684"
          selectWidth="howManyLivesLong"
        />
      </>
    );
  }
}
export default Facts;
