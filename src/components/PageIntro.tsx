import React from "react";

interface Props {
  name: String;
}

const PageIntro = ({ name }: Props) => {
  return (
    <div style={{ backgroundColor: "#F6F5FF" }}>
      <section className="header-section ">
        <div className="container">
          <div className="header-content">
            <div>
              <h1 className="page-intro-head">{name}</h1>
              <nav>
                <ul className="section-link">
                  <li className="section-link-home">
                    <a href="#">Home</a>
                  </li>
                  <li className="section-link-item ">
                    <a href="#">Pages</a>
                  </li>
                  <li className="section-link-item-active" aria-current="page">
                    {name}
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PageIntro;
