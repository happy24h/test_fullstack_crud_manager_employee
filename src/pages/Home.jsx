import { Space, Table, Tag } from "antd";
import { Row, Col, Button, Popconfirm, message } from "antd";
import {
  DeleteOutlined,
  EditTwoTone,
  PlusCircleOutlined,
} from "@ant-design/icons";
import EmployeeSearch from "../components/EmployeeSearch";
// ID/Name/Date of Bird/Gender/Email/Address)
const columns = [
  {
    title: "ID",
    dataIndex: "id",
    key: "id",
    render: (text) => <a>{text}</a>,
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Date of Bird",
    dataIndex: "date_of_bird",
    key: "date_of_bird",
  },
  {
    title: "Gender",
    key: "gender",
    dataIndex: "gender",
    render: (text) => {
      let color = text.length > 5 ? "volcano" : "geekblue";
      return <Tag color={color}>{text}</Tag>;
    },
  },
  {
    title: "Email",
    dataIndex: "email",
    key: "email",
  },
  {
    title: "Action",
    key: "action",
    render: (_, record) => (
      <Space size="middle">
        <Button style={{ border: "1px solid #f57800" }} type="primary" ghost>
          {/* <EditOutlined twoToneColor="red" style={{ cursor: "pointer" }} /> */}
          <EditTwoTone twoToneColor="#f57800" style={{ cursor: "pointer" }} />
        </Button>
        <Popconfirm
          placement="leftTop"
          title={"Xác nhận xóa user"}
          description={"Bạn có chắc chắn muốn xóa user này ?"}
          //   onConfirm={() => handleDeleteUser(record._id)}
          okText="Xác nhận"
          cancelText="Hủy">
          <Button type="primary" danger ghost>
            <DeleteOutlined />
          </Button>
        </Popconfirm>
      </Space>
    ),
  },
];
// ID/Name/Date of Bird/Gender/Email/Address
const data = [
  {
    id: "1",
    name: "John Brown 1",
    date_of_bird: "03/09/1999",
    gender: "Male",
    email: "vietanhhappy99@gmail.com",
    address: "Hà Nội",
  },
  {
    id: "2",
    name: "John Brown 2",
    date_of_bird: "03/10/1995",
    gender: "Female",
    email: "test@gmail.com",
    address: "Hà Nội",
  },
  {
    id: "3",
    name: "John Brown 3",
    date_of_bird: "03/10/1993",
    gender: "Male",
    email: "hello@gmail.com",
    address: "Hà Nội",
  },
];

const renderHeader = () => {
  return (
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      <span>Table List Employee</span>
      <span style={{ display: "flex", gap: 15 }}>
        <Button
          type="primary"
          //   onClick={() => handleExportData()}
          icon={<PlusCircleOutlined />}>
          Add Employee
        </Button>
        {/* {modalAdd()} */}
      </span>
    </div>
  );
};

function Home() {
  return (
    <>
      <Row gutter={[20, 20]}>
        <Col span={24}>
          {/* <UserSearch handleSearch={setSearchData} /> */}
          <EmployeeSearch />
        </Col>
      </Row>
      <Table title={renderHeader} columns={columns} dataSource={data} />
    </>
  );
}

export default Home;
