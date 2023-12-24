/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/laptop.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Content Management Tool",
    description:
      "This is for creating your own content and make it as a blog. This also has the features to add the audio and video to your blog",
    url: "https://satwika2020.github.io/Content-Management-Tool/",
  },
  {
    title: "Project Management Tool",
    description:
      "THis is a project management tool where you can add users assign them taska and change the status of the tasks also giving start date and end date of the project",
    url: "https://satwika2020.github.io/Project-Management-Tool/",
  },
  {
    title: "Power of Data Visualization",
    description:
      "This is a blog written by me which shows the power of data visualization",
    url: "https://satwikachamarthi.blogspot.com/2023/07/the-power-of-data-visualization_13.html",
  },
  {
    title: "Prediction using Supervised Machine Learning",
    description:
      "This file shows how to predict using Supervised Machine Learning",
    url: "https://github.com/satwika2020/Task-1/blob/main/Task-01.ipynb",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "90%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
