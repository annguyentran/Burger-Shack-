// footer with information such as location:  100 B Ave Coronado, CA 92118. Time:   Closed - Opens at 10:00 AM
//   our social media homepage link with logos (facebook, instagram, twitter)
import footerImage from "../../assets/footer.jpg";
const Footer = () => {
  return (
    <div className="container">
      <div className="session">
        <img src= {footerImage}  alt="burgers and fries" />
      </div>
      <div className="session">
        <div className= "card">
          <h2 className="title">What Our Customers Are Saying</h2>
          <p className="text">
         " My wife and I, amongst other relatives and friends we've introduced this place to, absolutely love the food and service! I haven't had 1 thing that I didn't like from The Shack. I personally don't even bother getting burgers from anywhere else because they don't compare. The owners recently catered our wedding also, and they knocked that straight out of the park. Everything was homemade, and not only was the food amazing - they went well above and beyond what we expected. AND they did it all for such a super low price by comparison to everywhere else we were considering.
I strongly recommend giving this place a try, and don't forget their catering - you won't be disappointed!"
          </p>
        </div>
        <div className= "card">
          <h1 className="title">FIND OUR RESTAURANTS</h1>
          <p className="text">
          100 B Ave Coronado
            <br /> CA 92118
            <br /> (602) 867-1010
          </p>
        </div>
        <div className= "card">
          <h1 className="title">WORKING HOURS</h1>
          <p className="text">
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className="text">
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
