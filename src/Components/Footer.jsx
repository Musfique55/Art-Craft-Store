
const Footer = () => {
    return (
        <div className="mt-12">
            <footer className="footer  p-5 md:px-12 md:py-10 lg:px-20 lg:py-10 bg-[#F4EDE7] text-base-content ">
                <nav className="text-black">
                    <h6 className="footer-title">Services</h6> 
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav> 
                <nav className="text-black">
                    <h6 className="footer-title">Company</h6> 
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav> 
                <nav className="text-black">
                    <h6 className="footer-title">Legal</h6> 
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav> 
                <form className="text-black">
                    <h6 className="footer-title">Newsletter</h6> 
                    <fieldset className="form-control w-80">
                    <label className="label">
                        <span className="label-text text-black">Enter your email address</span>
                    </label> 
                    <div className="join">
                        <input type="text" placeholder="username@site.com" className="input focus:outline-none join-item" /> 
                        <button className="bg-[#A1BE95] px-7 py-3 text-white font-medium join-item">Subscribe</button>
                    </div>
                    </fieldset>
                </form>
            </footer>
        </div>
    );
};

export default Footer;