import React, { useEffect } from "react";
import ReactGA from "react-ga4";

const Privacy = () => {
    useEffect(() => {
        ReactGA.send({ hitType: "pageview", page: "/privacy" });
    }, []);

    return (
        <div className="window-container" style={{ maxWidth: "800px", margin: "100px auto" }}>
            <div className="window-content" style={{ padding: "40px" }}>
                <h1>Privacy Policy</h1>
                <br />
                <p><strong>Last Updated: {new Date().toLocaleDateString()}</strong></p>
                <br />
                <p>
                    I am committed to protecting your privacy and ensuring your personal data is handled responsibly. This policy explains how I collect, use, and protect your information when you interact with this website.
                </p>

                <br />
                <h2>What Data I Collect</h2>
                <br />
                <ul>
                    <li><strong>Analytics Data:</strong> I use Google Analytics to track how visitors navigate and interact with my website. This helps me understand which content is most valuable to you. This includes anonymized IP addresses, browser types, and usage patterns.</li>
                    <li><strong>Contact and Form Data:</strong> When you sign up for free downloads, reach out through a form, or request a consultation, I collect your name, email address, and any specific details you provide. These forms are processed securely through HoneyBook.</li>
                </ul>

                <br />
                <h2>How I Use Your Data</h2>
                <br />
                <p>The information collected is used solely to:</p>
                <ul>
                    <li>Deliver the downloads or resources you requested.</li>
                    <li>Respond to your inquiries or project requests.</li>
                    <li>Send occasional automated emails related to your interests (you can unsubscribe at any time).</li>
                    <li>Improve the performance and user experience of this website.</li>
                </ul>

                <br />
                <h2>Your Rights and Opt-Out Options</h2>
                <br />
                <p>You have full control over your personal data:</p>
                <ul>
                    <li><strong>Email Unsubscribe:</strong> Every automated email I send includes an unsubscribe link at the bottom. Clicking it will remove you from that specific mailing list immediately.</li>
                    <li><strong>Data Removal & Opt-Out Request:</strong> If you wish to have all your data deleted from my systems or to opt out of Google Analytics tracking manually, you can contact me directly at <a href="mailto:tessacharis@gmail.com">tessacharis@gmail.com</a>.</li>
                </ul>

                <br />
                <h2>Third-Party Services</h2>
                <br />
                <p>I do not sell or share your data with third outside parties for marketing purposes. I only share data with trusted processors required to run this website, specifically Google Analytics (for site metrics) and HoneyBook (for form submissions and client management).</p>
            </div>
        </div>
    );
};

export default Privacy;
