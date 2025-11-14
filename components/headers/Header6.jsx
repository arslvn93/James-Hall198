import React from "react";
import Nav from "./Nav";
import Link from "next/link";
import Image from "next/image";
import { siteContent } from "@/data/siteContent"; // Import centralized content
export default function Header6() {
  return (
    <header id="header-main" className="header style-6 v1">
      <div className="header-inner">
        <div className="tf-container xl">
          <div className="row">
            <div className="col-12">
              <div className="header-inner-wrap">
                <div className="header-logo">
                  <Link href={`/`} className="site-logo">
                    <div className="logo-container">
                      <Image
                        src="/images/logo/jhlogo.svg"
                        alt={`${siteContent.agent.name} Logo`}
                        width={64}
                        height={64}
                        className="logo-image"
                      />
                      <span className="text-logo">{siteContent.agent.name}</span>
                    </div>
                  </Link>
                </div>
                <nav className="main-menu">
                  <ul className="navigation">
                    <Nav />
                  </ul>
                </nav>
                <div className="header-right">
                  <div className="btn-add">
                    <Link
                      className="tf-btn style-border border2 pd-23"
                      href={`/contact`}
                    >
                      Book a Call
                    </Link>
                  </div>
                  <div
                    className="mobile-button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#menu-mobile"
                    aria-controls="menu-mobile"
                  >
                    <i className="icon-menu" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
