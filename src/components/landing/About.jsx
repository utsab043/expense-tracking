const About = () => {
  return (
    <div id="about" className="container about-section">
      <h2>About</h2>
      <div className="flex">
        <p>
        We are the team behind Expense Tracking. After having difficulty tracking our internal expenses and income in our company while using all the expense tracking application out in the wild we decided to create our own expense tracking software.
        After months of requirements gathering, developing the application and testing it within our company we were able to create something that is easy to use and lot more helpful product.
        We are always aiming to help our customers and users to get most out of the product we release and expense tracking is no exception to it.
        </p>
        <div className="wrapperimg">
        <img src="money.jpg" alt=""/>
        </div>
      </div>
    </div>
  );
};

export default About;
