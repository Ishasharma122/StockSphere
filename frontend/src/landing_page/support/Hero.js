import React from "react";

function Hero() {
  return (
    <section className="container-fluid py-5" id="supportHero">
      {/* Top Bar */}
      <div className="d-flex justify-content-between align-items-center px-4 mb-5">
        <h4 className="m-0">Support Portal</h4>
        <a href="">Track Tickets</a>
      </div>

      {/* Main Wrapper */}
      <div className="row px-4">
        
        {/* Left Column */}
        <div className="col-md-6 mb-5">
          <h1 className="fs-3 mb-4">
            Search for an answer or browse help topics to create a ticket
          </h1>

          <input
            className="form-control mb-3 py-2"
            placeholder="Eg. how do I activate F&O"
          />

          {/* Links */}
          <div className="d-flex flex-wrap gap-3">
            <a href="">Track account opening</a>
            <a href="">Track segment activation</a>
            <a href="">Intraday margins</a>
            <a href="">Kite user manual</a>
          </div>
        </div>

        {/* Right Column */}
        <div className="col-md-6 mb-4">
          <h1 className="fs-3 mb-3">Featured</h1>
          <ol className="ps-3">
            <li className="mb-2">
              <a href="">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>

      </div>
    </section>
  );
}

export default Hero;
