import { Form, Input, Row, Col, Button } from "antd";
// import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
// import { ALL_GENDER } from "../../../utils/constants/permissions";

function EmployeeSearch(props) {
  /////
  const [form] = Form.useForm();
  const onFinish = async (values) => {
    let query = "";
    if (values.name) {
      query += `&name=${values.name}`;
    }
    if (values.address) {
      query += `&address=${values.address}`;
    }
    if (values.name || values.address) {
      // eslint-disable-next-line react/prop-types
      props.handleSearch(query);
    } else {
      // eslint-disable-next-line react/prop-types
      props.handleSearch("");
    }
  };

  const resetForm = () => {
    form.resetFields();
  };

  return (
    <Form form={form} onFinish={onFinish}>
      <Row
        gutter={24}
        style={{
          background: "#fff",
          paddingTop: 25,
          margin: 0,
          marginBottom: 20,
          borderRadius: 6,
        }}>
        <Col span={8}>
          <Form.Item name="name" label="Name">
            <Input placeholder="Tìm kiếm tên nhân viên..." />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name="address" label="Address">
            <Input placeholder="Tìm kiếm địa chỉ nhân viên..." />
          </Form.Item>
        </Col>
        <Col
          span={8}
          style={{
            display: "flex",
            justifyContent: "flex-end",
          }}>
          <Button
            type="primary"
            onClick={() => {
              form.submit();
            }}
            style={{ marginRight: 12 }}>
            Tìm kiếm
          </Button>
          <Button type="primary" danger onClick={resetForm}>
            Làm lại
          </Button>
        </Col>
      </Row>
    </Form>
  );
}

export default EmployeeSearch;
