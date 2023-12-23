import { Space, Table, Tag } from "antd";
import { Row, Col, Button, Popconfirm, message } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import EmployeeSearch from "../components/EmployeeSearch";
import { useEffect, useState } from "react";
import { callFetchEmployee, callDeleteEmployee } from "../config/api";
import AddEmployee from "./AddEmployee";
import dayjs from "dayjs";
import EditEmployee from "./EditEmployee";

function Home() {
  const [searchData, setSearchData] = useState("");
  const [searchPagination, setSearchPagination] = useState(
    "current=1&pageSize=5"
  );

  const columns = [
    {
      title: "ID",
      dataIndex: "_id",
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
      render: (text) => {
        // Chuyển đổi chuỗi ngày thành đối tượng ngày
        const dateObject = dayjs(text);
        // Định dạng lại theo định dạng 'DD/MM/YYYY'
        const formattedDate = dateObject.format("DD/MM/YYYY");
        return formattedDate;
      },
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
      title: "Address",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <EditEmployee
            id={record._id}
            handleFetchEmployee={handleFetchEmployee}
          />
          <Popconfirm
            placement="leftTop"
            title={"Xác nhận xóa nhân viên"}
            description={"Bạn có chắc chắn muốn xóa nhân viên này ?"}
            onConfirm={() => handleDeleteUser(record._id)}
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
  const handleDeleteUser = async (id) => {
    const result = await callDeleteEmployee(id);
    console.log("check result delete", result);
    if (result.status === 200) {
      await handleFetchEmployee();
      message.success("delete success!");
    } else {
      message.error("delete failed!");
    }
  };

  const renderHeader = () => {
    return (
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>Table List Employee</span>

        <AddEmployee handleFetchEmployee={handleFetchEmployee} />
      </div>
    );
  };
  const [listEmployees, setListEmployees] = useState([]);
  let query = `${searchPagination}${searchData}`;
  const handleFetchEmployee = async () => {
    const res = await callFetchEmployee(query);
    setListEmployees(res.data);
  };

  useEffect(() => {
    handleFetchEmployee();
  }, []);
  return (
    <>
      <Row gutter={[20, 20]}>
        <Col span={24}>
          {/* <UserSearch handleSearch={setSearchData} /> */}
          <EmployeeSearch handleSearch={setSearchData} />
        </Col>
      </Row>
      <Table
        title={renderHeader}
        columns={columns}
        dataSource={listEmployees?.result}
      />
    </>
  );
}

export default Home;
