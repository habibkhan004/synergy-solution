import { services } from "./services";
let HomeServices = ({ tab, onTabChange }) => {
  return (
    <>
      {" "}
      <section class="skills" id="skills">
        <h2 class="heading">
          <i class="fas fa-laptop-code"></i> Our <span>Services</span>
        </h2>
        <p
          style={{ textAlign: "justify", fontSize: "1.46rem", padding: "10px" }}
        >
          Our suite of services is designed to amplify your business potential,
          driving growth and success. From bespoke software development to
          cutting-edge IT solutions, we are dedicated to elevating your
          operations to new heights. Experience the power of synergy with us,
          and unlock the possibilities for your business like never before."
        </p>
        <div class="container">
          <div class="row" id="skillsContainer">
            {services.map((Product) => (
              <div class="bar">
                <div class="info">
                  <img src={Product.img} />
                  <span>{Product.title}</span>
                  <p className="pp">{Product.disc}</p>
                </div>
              </div>
            ))}
          </div>
          <center style={{ margin: "15px" }}>
            <a
              onClick={(e) => {
                e.preventDefault();
                onTabChange("allservices");
              }}
              style={{
                backgroundColor: "black",
                color: "white",
                fontWeight: "normal",
              }}
              href=""
              className="btn"
            >
              View All
              <i
                style={{ marginLeft: "10px" }}
                className="fas fa-external-link-alt"
              ></i>
            </a>
          </center>
        </div>
      </section>
    </>
  );
};
export default HomeServices;
