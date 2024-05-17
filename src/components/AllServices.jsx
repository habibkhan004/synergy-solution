import { skills } from "./services";
let AllServices = () => {
  return (
    <>
      {" "}
      <section class="skills" id="skills">
        <h2 class="heading">
          <i class="fas fa-laptop-code"></i> Our <span>Services</span>
        </h2>
        <p style={{ textAlign: "center", fontSize: "1.44rem" }}>
          Our suite of services is designed to amplify your business potential,
          driving growth and success. From bespoke software development to
          cutting-edge IT solutions, we are dedicated to elevating your
          operations to new heights. Experience the power of synergy with us,
          and unlock the possibilities for your business like never before."
        </p>
        <div class="container">
          <div class="row" id="skillsContainer">
            {skills.map((Product) => (
              <div class="bar">
                <div class="info">
                  <img src={Product.img} />
                  <span>{Product.title}</span>
                  <p className="pp">{Product.disc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default AllServices;
