import { Link } from "react-router-dom";

export default function MyNavbar (){
    return (
        <div id="BrandPageWrapper" className="cnbcBrand">
        <div className="JumpLink-container"><a href="#MainContent" className="JumpLink-link">Skip Navigation</a></div>
        <header className="CNBCGlobalNav-container" id="GlobalNavigation" data-test="GlobalNavigation" data-analytics="HomePageInternational-GlobalNavigation">
          <div className="CountdownClock-countdownContainer">
            <div id="GlobalNavigation-CountdownClock" className="CountdownClock-container" data-module="mps-slot"></div>
          </div>
          <div className="CNBCGlobalNav-globalNavigation">
            <div className="CNBCGlobalNav-gridContainer">
              <div className="CNBCGlobalNav-wrapper">
                <div className="branding-menu-brandingMenu"><Link to={"/"} className="branding-menu-logo"><img src="https://static-redesign.cnbcfm.com/dist/0dbbcac4aae29ae1ab0b.svg" alt="logo" className="branding-menu-logo" /></Link></div>
                <div className="CNBCGlobalNav-desktopNavMenu">
                  <div className="nav-menu-navMenu " id="nav-menu"><button className="nav-menu-desktopHamburger nav-menu-button" aria-label="Open Navigation Menu"><span className="icon-menu"></span></button><Link to={"/"} className="nav-menu-logoContainer"><img src="https://static-redesign.cnbcfm.com/dist/79ea413ac8a9ee99cad0.svg" className="nav-menu-logo" alt="logo" /></Link>
                    <div
                      className="nav-menu-mainLinks">
                      <div className="nav-menu-mainLinksWrapperStart nav-menu-mainLinksWrapper">
                        <div className=" nav-menu-navLinks">
                          <div className="nav-menu-primaryLink markets"><Link to={"/"} className="nav-menu-button"><span className="icon-markets"></span><span className="nav-menu-buttonText">Markets</span></Link>
                            
                          </div>
                          <div className="nav-menu-primaryLink business_news"><Link to={"/"} className="nav-menu-button"><span className="icon-news"></span><span className="nav-menu-buttonText">Business</span></Link>

                          </div>
                          <div className="nav-menu-primaryLink investing"><Link to={"/"} className="nav-menu-button"><span className="icon-investing"></span><span className="nav-menu-buttonText">Investing</span></Link>

                          </div>
                          <div className="nav-menu-primaryLink tech"><Link to={"/"} className="nav-menu-button"><span className="icon-tech"></span><span className="nav-menu-buttonText">Tech</span></Link>

                          </div>
                          <div className="nav-menu-primaryLink politics"><Link to={"/"} className="nav-menu-button"><span className="icon-politics"></span><span className="nav-menu-buttonText">Politics</span></Link>

                          </div>
                          <div className="nav-menu-primaryLink cnbc_tv"><Link to={"/"} className="nav-menu-button"><span className="icon-cnbctv"></span><span className="nav-menu-buttonText">CNBC TV</span></Link>

                          </div>
                          <div className="nav-menu-primaryLink watchlist"><Link to={"/"} className="nav-menu-button"><span className="icon-watchlist"></span><span className="nav-menu-buttonText">Watchlist</span></Link></div>
                          <div className="nav-menu-primaryLink investing_club"><Link to={"/"} className="nav-menu-button"><span className="icon-investing_club"></span><span className="nav-menu-buttonText">Investing Club</span></Link>

                          </div><span className="nav-menu-investingClubLockIcon"></span>
                          <div className="nav-menu-primaryLink pro"><Link to={"/"} className="nav-menu-button"><span className="icon-pro"></span><span className="nav-menu-buttonText">PRO</span></Link>

                          </div><span className="nav-menu-proLockIcon"></span>
                          <div aria-hidden="true" className="nav-menu-navUnderline"></div>
                          <div aria-hidden="true" className="nav-menu-navDropdownWrap"></div>
                          <div className="nav-menu-primaryLink hamburger"><button className="nav-menu-hamburger nav-menu-button" aria-label="Open Navigation Menu"><span className="icon-menu"></span><span className="nav-menu-buttonText">Menu</span></button></div>
                        </div>
                      </div>
                    </div>
                    <div className="nav-menu-progressBarContainer"></div>
                  </div>
                </div>
                <div
                  className="CNBCGlobalNav-watchListContainerBtn" ><Link style={{color:"white"}}>Watchlist</Link></div>
                <div className="SignInMenu-signInContainerBtn">
                  <div>
                    <div className="SignInMenu-signInMenu"><Link style={{color:"white"}}>SIGN IN</Link></div>
                  </div>
                </div>
                <div className="SignUpMenu-signUpContainer">
                  <div>
                    <div className="SignUpMenu-signUpMenu"><Link>Create free account</Link></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
        <div className="CNBCGlobalNav-mobileNavMenu">
          <div className="nav-menu-navMenu " id="nav-menu"><button className="nav-menu-desktopHamburger nav-menu-button" aria-label="Open Navigation Menu"><span className="icon-menu"></span></button><a href="/" className="nav-menu-logoContainer"><img src="https://static-redesign.cnbcfm.com/dist/79ea413ac8a9ee99cad0.svg" className="nav-menu-logo" alt="logo" /></a>
            <div
              className="nav-menu-mainLinks">
              <div className="nav-menu-mainLinksWrapperStart nav-menu-mainLinksWrapper">
                <div className=" nav-menu-navLinks">
                  <div className="nav-menu-primaryLink markets"><a href="/markets/" className="nav-menu-button"><span className="icon-markets"></span><span className="nav-menu-buttonText">Markets</span></a></div>
                  <div className="nav-menu-primaryLink business_news"><a href="/business/" className="nav-menu-button"><span className="icon-news"></span><span className="nav-menu-buttonText">Business</span></a></div>
                  <div className="nav-menu-primaryLink investing"><a href="/investing/" className="nav-menu-button"><span className="icon-investing"></span><span className="nav-menu-buttonText">Investing</span></a></div>
                  <div className="nav-menu-primaryLink tech"><a href="/technology/" className="nav-menu-button"><span className="icon-tech"></span><span className="nav-menu-buttonText">Tech</span></a></div>
                  <div className="nav-menu-primaryLink politics"><a href="/politics/" className="nav-menu-button"><span className="icon-politics"></span><span className="nav-menu-buttonText">Politics</span></a></div>
                  <div className="nav-menu-primaryLink cnbc_tv"><a href="/tv/" className="nav-menu-button"><span className="icon-cnbctv"></span><span className="nav-menu-buttonText">CNBC TV</span></a></div>
                  <div className="nav-menu-primaryLink watchlist"><a href="/watchlist/" className="nav-menu-button"><span className="icon-watchlist"></span><span className="nav-menu-buttonText">Watchlist</span></a></div>
                  <div className="nav-menu-primaryLink investing_club"><a href="/investingclub/" className="nav-menu-button"><span className="icon-investing_club"></span><span className="nav-menu-buttonText">Investing Club</span></a></div><span className="nav-menu-investingClubLockIcon"></span>
                  <div className="nav-menu-primaryLink pro"><a href="/pro/" className="nav-menu-button"><span className="icon-pro"></span><span className="nav-menu-buttonText">PRO</span></a></div><span className="nav-menu-proLockIcon"></span>
                  <div aria-hidden="true" className="nav-menu-navUnderline"></div>
                  <div aria-hidden="true" className="nav-menu-navDropdownWrap"></div>
                  <div className="nav-menu-primaryLink hamburger"><button className="nav-menu-hamburger nav-menu-button" aria-label="Open Navigation Menu"><span className="icon-menu"></span><span className="nav-menu-buttonText">Menu</span></button></div>
                </div>
              </div>
            </div>
            <div className="nav-menu-progressBarContainer"></div>
          </div>
        </div>

      </div>
    )
}