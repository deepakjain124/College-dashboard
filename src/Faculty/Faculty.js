import React, { useEffect, useState } from "react";
import { Table } from "antd";
import Collectionpage from "../Home/Collectionpage";
import Addfaculty from "./Addfaculty";

const Faculty = () => {
  const [visible, setVisible] = useState(false);
  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    setVisible(false);
  };
  const columns = [
    {
      title: "Full Name",
      width: 100,
      dataIndex: "name",
      key: "name",
      fixed: "left",
      filterMode:"menu"
    },
    {
      title: "Age",
      width: 100,
      dataIndex: "age",
      key: "age",
      fixed: "left",
    },
    {
      title: "address",
      dataIndex: "address",
      key: "1",
      width: 150,
    },
    {
      title: "Maretial Status",
      dataIndex: "status",
      key: "2",
      width: 150,
    },
    {
      title: "Skill 1",
      dataIndex: "Skill1",
      key: "3",
      width: 150,
    },
    {
      title: "Skill 2",
      dataIndex: "Skill2",
      key: "4",
      width: 150,
    },
    {
      title: "Skill 3",
      dataIndex: "Skill3",
      key: "5",
      width: 150,
    },
    {
      title: "Skill 4",
      dataIndex: "Skill4",
      key: "6",
      width: 150,
    },
    {
      title: "Skill 5",
      dataIndex: "Skill5",
      key: "7",
      width: 150,
    },
    { title: "Column 8", dataIndex: "address", key: "8" },
    {
      title: "Action",
      key: "operation",
      fixed: "right",
      width: 100,
      render: () => <a onClick={(record,rowIndex)=>console.log(rowIndex)}>Delete</a>,
    },
  ];

  const data = [];
  const getitem = JSON.parse(localStorage.getItem("data"));
  console.log(getitem,"lkjhjghff");
// if(getitem!==null){
//   for (let i = 0; i < getitem.length; i++) {
//     data.push({
     
//       id:i,
//       name: getitem?.length ? getitem[i]?.name : ";lkjhg",
//       age: getitem?.length ? getitem[i]?.age : ";klj",
//       address: getitem?.length ? getitem[i]?.address : "kjhgf",
//       status: getitem?.length ? getitem[i]?.status : "lkjhg",
//       Skill1: getitem?.length ? getitem[i]?.skill[0] : "",
//       Skill2: getitem?.length  ? getitem[i]?.skill[1] : "",
//       Skill3: getitem?.length ? getitem[i]?.skill[2] : "",
//       Skill4: getitem?.length ? getitem[i]?.skill[3] : "",
//       Skill5: getitem?.length ? getitem[i]?.skill[4] : "",
//     });
//   }
// }
  const x=(record,rowIndex)=>{
      return{
        onClick:event=>{console.log(record)}
      }
  }

  // console.log("this is my data", data);
  return (
    <>
      <div className="onFaculty">
        <Collectionpage
          visible={visible}
          setVisible={setVisible}
          text="Add data"
          form={
            <Addfaculty
              visible={visible}
              setVisible={setVisible}
              onCreate={onCreate}
              onCancel={() => {
                setVisible(false);
              }}
            />
          }
        />
      </div>
      <Table columns={columns} bordered={false}   onRow={x} dataSource={data} scroll={{ x: 1500, y: 300 }} />
    </>
  );
};

export default Faculty;
