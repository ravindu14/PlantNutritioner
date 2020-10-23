// @flow
import React, { Component, Fragment } from "react";
import { connect } from "react-redux";

import Layout from "components/layout";
import Row from "components/Row";
import Col from "components/Col";
import Input from "components/Input";
import NumberInput from "components/NumberInput";
import Textarea from "components/TextArea";
import Select from "components/Select";
import Button from "components/button";

import "./styles.scss";

type AddProductsPageProps = {};

class AddProductsPage extends Component<AddProductsPageProps> {
  render() {
    return (
      <Layout
        breadcrumbs={["Add Products"]}
        actions={
          <Fragment>
            <Button type={Button.TYPE.DANGER}>Reset Product</Button>
            <Button type={Button.TYPE.SUCCESS}>Add Product</Button>
          </Fragment>
        }
      >
        <div className="add-products">
          <div className="add-products-container">
            <Row>
              <Col>
                <div className="field-label">Product Code</div>
              </Col>
              <Col>
                <Input id="productCode" />
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="field-label">Product Name</div>
              </Col>
              <Col>
                <Input id="productName" />
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="field-label">Unit Price</div>
              </Col>
              <Col>
                <NumberInput min="0" id="UnitPrice" />
              </Col>
            </Row>
            <Row>
              <Col>
                <div className="field-label">Application Method</div>
              </Col>
              <Col>
                <Textarea id="applicationLabel" />
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

export default connect(mapStateToProps, Actions)(AddProductsPage);
