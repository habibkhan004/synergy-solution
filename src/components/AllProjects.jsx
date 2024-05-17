import reactImg2 from "./images/lapy.jpg";
import { projects } from "./js/project.js";
let AllProjects = () => {
  return (
    <>
      <section class="work" id="work">
        <h2 class="heading h11">
          <i class="fas fa-laptop-code"></i> Projects <span>Made</span>
        </h2>
        <div className="boxes">
          {projects.map((project) => (
            <div class="box-container" style={{}}>
              <div class="box tilt">
                <img draggable="false" src={project.img} alt="" />
                <div class="content">
                  <div class="tag">
                    <h3>{project.title}</h3>
                  </div>
                  <div class="desc">
                    <p>{project.Disc}</p>
                    <div class="btns">
                      <a href={project.src} class="btn" target="_blank">
                        <i class="fas fa-external-link-alt"></i> Visit
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default AllProjects;
