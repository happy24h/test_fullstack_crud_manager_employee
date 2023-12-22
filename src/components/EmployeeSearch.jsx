import { Form, Input, Row, Col, Button, Select } from "antd";
// import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
// import { ALL_GENDER } from "../../../utils/constants/permissions";

function EmployeeSearch() {
  /////
  const [form] = Form.useForm();
  const onFinish = async () => {
    // let query = "";
    // if (values.email) {
    //   query += `&email=${values.email}`;
    // }
    // if (values.gender) {
    //   query += `&gender=${values.gender}`;
    // }

    // if (values.email || values.gender) {
    //   props.handleSearch(query);
    // } else {
    //   props.handleSearch("");
    // }
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
          <Form.Item name={`email`} label={`Email`}>
            <Input placeholder="Tìm kiếm địa chỉ email..." />
          </Form.Item>
        </Col>
        <Col span={8}>
          <Form.Item name={`email`} label={`Email`}>
            <Input placeholder="Tìm kiếm địa chỉ email..." />
          </Form.Item>
        </Col>
        {/* <Col span={8}>
          <Form.Item name={`gender`} label={`Giới tính`}>
            <Select
              showSearch
              placeholder="Tìm kiếm giới tính..."
              options={ALL_GENDER}
            />
          </Form.Item>
        </Col> */}
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
