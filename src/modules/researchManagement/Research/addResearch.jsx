// @flow
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import Layout from "components/layout";
import Row from "components/Row";
import Col from "components/Col";
import Input from "components/Input";
import Select from "components/Select";
import Textarea from "components/TextArea";
import Button from "components/button";

import "./styles.scss";

type AddResearchPageProps = {};

class AddResearchPage extends Component<AddResearchPageProps> {
  render() {
    return (
      <Layout
        breadcrumbs={["Add Research"]}
        actions={
          <Fragment>
            <Button type={Button.TYPE.DANGER}>Reset Research</Button>
            <Button type={Button.TYPE.SUCCESS}>Add Research</Button>
          </Fragment>
        }
      >
        <div className="add-researches">
          <div className="add-researches-container">
            <Row>
              <Col>
                <div className="field-label">Research Id</div>
              </Col>
              <Col>
                <Input id="researchId" />
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="field-label">Crop Type</div>
              </Col>
              <Col>
                <Input id="cropType" />
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="field-label">Deficiency</div>
              </Col>
              <Col>
                <Select id="deficiency" options={[]} placeholder="select" />
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="field-label">Findings</div>
              </Col>
              <Col>
                <Textarea id="findings" />
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="field-label">Verify Products</div>
              </Col>
              <Col>
                <div className="productContainer"></div>
              </Col>
            </Row>
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

export default connect(mapStateToProps, Actions)(AddResearchPage);
