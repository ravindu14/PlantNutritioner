// @flow
import React, { Component } from "react";
import { connect } from "react-redux";

import Layout from "components/layout";

import "./styles.scss";

type ViewProductsPageProps = {};

class ViewProductsPage extends Component<ViewProductsPageProps> {
  render() {
    return (
      <Layout breadcrumbs={["View Products"]}>
        <div className="view-products">
          <div className="view-products-table">
            <table>
              <tbody>
                <tr className="table-heading">
                  <th>ProductCode</th>
                  <th>ProductName</th>
                  <th>UnitPrice</th>
                  <th>Action</th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Layout>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

const Actions = {};

export default connect(mapStateToProps, Actions)(ViewProductsPage);
