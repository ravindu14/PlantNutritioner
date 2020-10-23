import React from "react";

import SubMenu from "components/subMenu";
import Link from "components/Link";

import "./styles.scss";

export default function sidebar() {
  return (
    <div className="sidebar">
      <div className="home">
        <Link to="/">
          <div className="home-link">Plant Protector</div>
        </Link>
      </div>
      <div className="menu">
        <SubMenu
          title="Products"
          icon="disk"
          items={[
            { title: "Add Products", link: "/add-products" },
            { title: "View Products", link: "/" },
          ]}
        />
        <SubMenu
          title="Researches"
          icon="bar-chart"
          items={[
            { title: "Add Research", link: "/add-researches" },
            { title: "View Researches", link: "/view-researches" },
          ]}
        />
        <SubMenu
          title="Deficiencies"
          icon="boxes"
          items={[{ title: "Manage Deficiency", link: "/view-deficiency" }]}
        />
        <SubMenu
          title="Verify Requests"
          icon="tag"
          items={[
            { title: "Add Verification", link: "/add-verifications" },
            { title: "View Verify Requests", link: "/view-verifications" },
          ]}
        />
      </div>
    </div>
  );
}
