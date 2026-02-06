const Help = () => {
  return (
    <section className="portfolio-item" aria-labelledby="help-heading">
      <div className="window-content">
        <div className="window-content-container">
          <h2 id="help-heading">Are you looking for an extra hand?</h2>
          <p>
            Are you looking for an extra hand on a website or web app project?
            Please let me know how I can assist you in your next UI/UX design or
            front-end project.
          </p>
          <div style={{ width: "100%", height: "1800px", border: "0px" }}>
            <iframe
              style={{ width: "100%", height: "100%", border: "0px" }}
              src="https://tessanewbacher.hbportal.co/public/698291e62429e2003cb1a1b4/1-Inquiry_form"
              title="Tessa Newbacher's Inquiry Form"
            />
          </div>
          <div>
            {/* Optional tracking pixel from the original code */}
            <img
              height="1"
              width="1"
              style={{ display: "none" }}
              src={`https://www.honeybook.com/p.png?pid=697cf7c8f10ce40007b290b0`}
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Help;
