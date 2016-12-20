import React, { PropTypes } from 'react';
import { Modal, Form, Input } from 'antd';

class ModelEffectForm extends React.Component {
  handleOk = () => {
    const values = this.props.form.getFieldsValue();
    this.props.onEffectCreate(values);
  }
  handleCancel = () => {
    this.props.hideEffectModal();
  }
  render() {
    const { dataflow, form } = this.props;
    const { getFieldDecorator } = form;
    return (
      <Modal
        title="Add Effects"
        visible={dataflow.showEffectModal}
        okText="Confrim" cancelText="Cancel"
        onOk={this.handleOk}
        onCancel={this.handleCancel}
      >
        <Form vertical>
          <Form.Item>
            {
              getFieldDecorator('name')(
                <Input type="text" placeholder="Effect Name" />
              )
            }
          </Form.Item>
          <Form.Item>
            {
              getFieldDecorator('source')(
                <Input type="textarea" placeholder="Effect Function" rows="5" />
              )
            }
          </Form.Item>
        </Form>
      </Modal>
    );
  }
}

ModelEffectForm.propTypes = {
  dataflow: PropTypes.object.isRequired,
  hideEffectModal: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired,
  onEffectCreate: PropTypes.func.isRequired,
};
export default Form.create()(ModelEffectForm);
