import { useState } from "react";
// import { PlusOutlined } from "@ant-design/icons";
import {
  Modal,
  Button,
  Col,
  DatePicker,
  Form,
  Input,
  Row,
  Select,
  message,
} from "antd";
import dayjs from "dayjs";
import { callCreateEmployee } from "../config/api";
// import { DatePicker, Space } from 'antd';
const { Option } = Select;
const AddEmployee = (props) => {
  const [form] = Form.useForm();

  // const { RangePicker } = DatePicker;

  const dateFormatList = ["DD/MM/YYYY", "DD/MM/YY", "DD-MM-YYYY", "DD-MM-YY"];

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const onFinish = async (values) => {
    const res = await callCreateEmployee(values);
    if (res.status === 201) {
      // eslint-disable-next-line react/prop-types
      props.handleFetchEmployee();
      setIsModalOpen(false);
      message.success("create a employees success!");
    } else {
      message.error("create a employee failed!");
    }
  };
  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add Employee
      </Button>
      <Modal
        title="Create a employee"
        open={isModalOpen}
        onOk={() => {
          form.submit();
        }}
        onCancel={handleCancel}>
        <Form
          form={form}
          onFinish={onFinish}
          layout="vertical"
          hideRequiredMark>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="name"
                label="Name"
                rules={[
                  {
                    required: true,
                    message: "Please enter user name",
                  },
                ]}>
                <Input placeholder="Please enter user name" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="date_of_bird"
                label="Date of Bird"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập ngày sinh",
                  },
                ]}>
                <DatePicker
                  style={{ width: "100%" }}
                  defaultValue={dayjs("01/01/2015", dateFormatList[0])}
                  format={dateFormatList}
                />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="gender"
                label="Gender"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng chọn giới tính",
                  },
                ]}>
                <Select placeholder="Vui lòng chọn giới tính">
                  <Option value="Male">Nam</Option>
                  <Option value="Female">Nữ</Option>
                </Select>
              </Form.Item>
            </Col>
          </Row>

          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập email",
                  },
                ]}>
                <Input placeholder="Vui lòng nhập email" />
              </Form.Item>
            </Col>
          </Row>
          <Row gutter={16}>
            <Col span={24}>
              <Form.Item
                name="address"
                label="Address"
                rules={[
                  {
                    required: true,
                    message: "Vui lòng nhập địa chỉ",
                  },
                ]}>
                <Input placeholder="Vui lòng nhập địa chỉ" />
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  );
};
export default AddEmployee;
