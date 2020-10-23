// @flow
import React, { Component } from "react";
import { connect } from "react-redux";

import Layout from "components/layout";

import "./styles.scss";

type ViewVerificationPageProps = {};

class ViewVerificationPage extends Component<ViewVerificationPageProps> {
  render() {
    return (
      <Layout breadcrumbs={["View Verifications"]}>
        <div className="view-verifications">
          <div className="view-verifications-table">
            <table>
              <tbody>
                <tr className="table-heading">
                  <th>Research Id</th>
                  <th>Deficiency</th>
                  <th>Findings</th>
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

export default connect(mapStateToProps, Actions)(ViewVerificationPage);
