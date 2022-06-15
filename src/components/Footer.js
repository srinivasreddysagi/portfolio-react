export default function Footer() {
    return (
        <footer className="contact" id="contact">
            <div className="contact__left">
                <h2 className="contact__h" id="contact">
                    Contact
                </h2>
                <div className="contact__basic">
                    <p className="contact__basic-phone">
                        <i className="fa-solid fa-phone"></i> Mobile: +91
                        8297696398
                    </p>
                    <p className="contact__basic-email">
                        <i className="fa-solid fa-envelope"></i>
                        srinivasreddysagi@gmail.com
                    </p>
                </div>
            </div>
            <div className="contact__social">
                <a
                    href="https://www.linkedin.com/in/srinivas-reddy-sagi/"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="fa-brands fa-linkedin"></i>
                </a>
                <a
                    href="https://github.com/srinivasreddysagi"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="fa-brands fa-github"></i>
                </a>
                <a
                    href="https://wa.me/918297696398"
                    target="_blank"
                    rel="noreferrer"
                >
                    <i className="fa-brands fa-whatsapp"></i>
                </a>
            </div>
        </footer>
    );
}