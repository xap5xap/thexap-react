import React from 'react';
import { Link, IndexLink } from 'react-router';
import BannerDots from '../three/bannerDots';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = { opacity: 0, navclass: 'navbar-transparent', menuCollapsed: true };
        this.toogleMenu = this.toogleMenu.bind(this);
    }

    componentDidMount() {
        window.addEventListener('scroll', () => {
            let oVal = window.scrollY / 170;
            this.setState({ opacity: oVal });

            if (window.scrollY > 260) {
                if (this.state.navclass === 'navbar-transparent') {
                    this.setState({ navclass: '' });
                }

            } else {
                if (this.state.navclass === '') {
                    this.setState({ navclass: 'navbar-transparent' });
                }
            }


        });


        let banner = new BannerDots();
        banner.init();
    }
    toogleMenu() {
        this.setState({ menuCollapsed: !this.state.menuCollapsed });
    }

    render() {
        return (
            <div>
                <div className="container">
                    <nav className={`navbar navbar-ct-blue navbar-fixed-top ${this.state.navclass}`} role="navigation">

                        <div className="container">
                            <div className="navbar-header">
                                <button type="button" onClick={this.toogleMenu} className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                                    <span className="sr-only">Toggle navigation</span>
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                    <span className="icon-bar" />
                                </button>
                            </div>

                            <div className={(this.state.menuCollapsed ? 'collapse' : '') + ' navbar-collapse'} id="bs-example-navbar-collapse-1">
                                <ul className="nav navbar-nav navbar-right">
                                    <li><IndexLink to="/" onClick={this.toogleMenu} >Home</IndexLink></li>
                                    <li><Link to="/portfolio" onClick={this.toogleMenu} >Portfolio</Link></li>
                                    <li><Link to="/services" onClick={this.toogleMenu} >Services</Link></li>
                                    <li> <a className="btn btn-round btn-default" href="mailto:xavier.perez@thexap.com?Subject=Request info" target="_top">Contact me</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="blurred-container">
                    <div className="motto">
                        <div>thexap</div>
                    </div>
                    <div id="world" className="img-src img-src-background" />
                    <div className="img-srcs blurs img-src-background-blurs" style={{ opacity: this.state.opacity }} />
                </div>

            </div>
        );

    }
}

export default Header;
