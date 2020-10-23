// @flow
import React, { Component } from "react";
import { connect } from "react-redux";

import Layout from "components/layout";
import Row from "components/Row";
import Col from "components/Col";
import Button from "components/button";
import Input from "components/Input";

import "./styles.scss";

type ViewDeficiencyPageProps = {};

class ViewDeficiencyPage extends Component<ViewDeficiencyPageProps> {
  render() {
    return (
      <Layout breadcrumbs={["View Deficiencies"]}>
        <div className="view-deficiencies">
          <div className="view-deficiencies-add">
            <Row>
              <Col>
                <Row>
                  <Col>
                    <div className="field-label">Deficiency</div>
                  </Col>
                  <Col>
                    <Input id="productCode" />
                  </Col>
                </Row>
              </Col>
              <Col size="3">
                <Button type={Button.TYPE.SUCCESS}>Add Deficiency</Button>
              </Col>
            </Row>
          </div>
          <div className="view-deficiencies-table">
            <table>
              <tbody>
                <tr className="table-heading">
                  <th>Deficiency</th>
                  <th className="action-field">Action</th>
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

export default connect(mapStateToProps, Actions)(ViewDeficiencyPage);
