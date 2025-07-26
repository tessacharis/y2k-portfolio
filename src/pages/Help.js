import { Widget, PopupButton } from '@typeform/embed-react'

const Help = () => {
  return (
    <section className="portfolio-item" aria-labelledby="help-heading">
      <div className="window-content">
        <div className="window-content-container">
          <h2 id="help-heading">
            Are you looking for an extra hand?
          </h2>
          <p>
            Are you looking for an extra hand on a website or web app project?
            Please let me know how I can assist you in your next UI/UX design or
            front-end project.
          </p>
          <div data-tf-live="01K13R1B4DTFZ1EN6APS3QZQC0"></div><script src="//embed.typeform.com/next/embed.js"></script>
          <Widget id="01K13QJRF8QSJ2YRTQQZQV8ZYP" style={{ width: '100%', height: '500px' }} />
          <PopupButton id="01K13QJRF8QSJ2YRTQQZQV8ZYP" style={{ fontSize: 20 }} className="my-button">
      click to open form in popup
    </PopupButton>
        </div>
      </div>
    </section>
  );
};

export default Help;
