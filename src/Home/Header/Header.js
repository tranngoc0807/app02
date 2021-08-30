import "./Header.css";
export function Header() {
  return (
    <div className="header">
      <div className="chil-header">
        <div className="sub-header">
          <div className="top-sub-header">
            Beautify Landing page Kit for Startup
          </div>
          <div className="body-sub-header">
            Excepteur sint occaecat cupidatat non proident suntin culpa qui
            officia deserunt mollit lorem ipsum animind est laborum perspiciatis
            unde .
          </div>
          <div className="footer-sub-header">
            <div className="sub-button-header">
              <button
                type="button"
                className="btn btn-danger"
                style={{ width: "100%" }}
              >
                <div className="text-footer-header"> Start Free Trial</div>
              </button>
            </div>
            <div className="sub-button-header-chil">
              <button
                type="button"
                className="btn btn-danger"
                style={{ width: "100%" }}
              >
                <div className="text-footer-header"> Check Features</div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
