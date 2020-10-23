// @flow
import React, { Component } from "react";
import { connect } from "react-redux";

import Layout from "components/layout";

import "./styles.scss";

type ViewResearchPageProps = {};

class ViewResearchPage extends Component<ViewResearchPageProps> {
  render() {
    return (
      <Layout breadcrumbs={["View Researches"]}>
        <div className="view-researches">
          <div className="view-researches-table">
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

export default connect(mapStateToProps, Actions)(ViewResearchPage);
