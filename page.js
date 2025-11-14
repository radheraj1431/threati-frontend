import React, { Component } from "react";
import PageHolder from "./pageStyles";
import TopBar from "../layout/topbar/topbar";
import SideBar from "../layout/sidebar/sidebar";
import PageRouter from "./pageRouter";
import authActions from "../../core/redux/auth/authActions";
import appActions from "../../core/redux/app/appActions";
import { connect } from "react-redux";
import LoadingImage from "../../core/images/ThreatILoading.svg";
import "./global.css";
import { checkSession } from "../../core/helper/envData";
import { ZsToast } from "./components";
const { toggleTheme, toggleMenu, removeToast } = appActions;
class PageModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      toasts: this.props.toasts,
      isSession: false,
      userData: [],
      routingAccess: [],
      routesData: [],
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    const { dashes } = nextProps;
    let update = {};
    if (dashes) {
      update.toasts = nextProps.toasts;
    }
    switch (nextProps.loginAction.type) {
      case "GET_AUTHENTICATION_SUCCESS":
        update.isSession = true;
        update.userData = nextProps.loginAction.data;
        localStorage.setItem("lastLogin",update.userData.lastLogin)
        let aa = [];
        update.routingAccess = aa;
        let bb = [
          "/zeronsec",
          "/zeronsec/discovery",
          "/zeronsec/dashboard",
          "/zeronsec/darkweb",
          "/zeronsec/integrations",
          "/zeronsec/3dglobe"
        ];
        update.routesData = bb;
        aa.push({
          route: "/zeronsec/dashboard",
          moduleName: "Dashboard",
          access: true,
          iconName: "dashboard",
          className:
            nextProps.location.pathname === "/zeronsec/dashboard" ||
            nextProps.location.pathname === "/zeronsec"
              ? "menu-item active-link"
              : "menu-item"
        });
        aa.push({
          route: "/zeronsec/discovery",
          moduleName: "Discovery",
          access: true,
          iconName: "discovery",
          className:
            nextProps.location.pathname === "/zeronsec/discovery"
              ? "menu-item active-link"
              : "menu-item"
        });
        aa.push({
          route: "/zeronsec/darkweb",
          moduleName: "Darkweb",
          access: true,
          iconName: "darkweb",
          className:
            nextProps.location.pathname === "/zeronsec/darkweb"
              ? "menu-item active-link"
              : "menu-item"
        });
        if (nextProps.loginAction.data.infection === true) {
          aa.push({
            route: "/zeronsec/infections",
            moduleName: "Infections",
            access: true,
            iconName: "infections",
            className:
              nextProps.location.pathname === "/zeronsec/infections"
                ? "menu-item active-link"
                : "menu-item"
          });
          bb.push("/zeronsec/infections");
        }

        if (nextProps.loginAction.data.enrichment === true) {
          aa.push({
            route: "/zeronsec/enrichment",
            moduleName: "Enrichment",
            access: true,
            iconName: "enrichment",
            className:
              nextProps.location.pathname === "/zeronsec/enrichment"
                ? "menu-item active-link"
                : "menu-item"
          });
          bb.push("/zeronsec/enrichment");
        }
        aa.push({
          route: "/zeronsec/integrations",
          moduleName: "Integrations",
          access: true,
          iconName: "integrations",
          className:
            nextProps.location.pathname === "/zeronsec/integrations"
              ? "menu-item active-link"
              : "menu-item"
        });

        if (nextProps.loginAction.data.administrator === true) {
          aa.push({
            route: "/zeronsec/administrations",
            moduleName: "Administrations",
            access: true,
            iconName: "administrations",
            className:
              nextProps.location.pathname === "/zeronsec/administrations"
                ? "menu-item active-link"
                : "menu-item"
          });
          bb.push("/zeronsec/administrations");
        }
        update.routingAccess = aa;
        update.routesData = bb;
        break;
      case "GET_AUTHENTICATION_FAIL":
        update.isSession = false;
        break;
      default:
        break;
    }
    return Object.keys(update).length > 0 ? update : null;
  }

  componentDidMount() {
     checkSession();
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  }

  logout = () => {
    this.props.logout();
    this.setState({ logPop: false });
  };
  logPopShow = () => {
    this.setState({ logPop: true });
  };
  logoutNo = () => {
    this.setState({ logPop: false });
  };

  render() {
   
    const { loading, logPop } = this.state;
    const { location } = this.props;

    return (
      <PageHolder>
        {loading ? (
          <div className="splash-screen" style={{ justifyContent: "center" }}>
            <img
              src={LoadingImage}
              style={{ height: "80px", width: "200px" }}
              alt="img-loader"
            ></img>{" "}
          </div>
        ) : (
          <div style={{ height: "100%" }}>
            <div
              style={{ height: "100%", display: "flex" }}
              className="setLayout"
            >
              <ZsToast />
              <div
                style={{
                  display:
                    location.pathname === "/zeronsec/3dglobe" ? "none" : "flex"
                }}
              >
                <SideBar
                  isSession={this.state.isSession}
                  brd={location.pathname}
                  userData={this.state.userData}
                  routingAccess={this.state.routingAccess}
                  logPop={logPop}
                  logout={this.logout}
                  logPopShow={this.logPopShow}
                  logoutNo={this.logoutNo}
                ></SideBar>
              </div>
              <div
                className="zscontent"
                style={{
                  width:
                    location.pathname === "/zeronsec/3dglobe"
                      ? "100%"
                      : "calc(100% - 61px)"
                }}
              >
                <div
                  className="displayTopBar"
                  style={{
                    display:
                      location.pathname === "/zeronsec/3dglobe"
                        ? "none"
                        : "flex"
                  }}
                >
                  {location.pathname!=="/zeronsec/darkweb"?
                  <TopBar
                    brd={location.pathname}
                    userData={this.state.userData}
                    routesData={this.state.routesData}
                  ></TopBar>:
                  null}
                </div>
                <div
                  className={
                    location.pathname === "/zeronsec/3dglobe"
                      ? "mainContentGlobe"
                      : location.pathname === "/zeronsec/discovery"
                      ? "mainDiscory"
                      : "mainContent"
                  }
                >
                  <PageRouter
                    {...this.props}
                    isSession={this.state.isSession}
                    routingAccess={this.state.routingAccess}
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </PageHolder>
    );
  }
}

export default connect(
  state => ({
    ...state.App,
    ...state.Auth
  }),
  { toggleTheme, toggleMenu, removeToast, authActions }
)(PageModule);
