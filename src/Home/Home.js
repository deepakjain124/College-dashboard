import React, { useState } from "react";
import Boxes from "./Boxes";
import { Button, Modal, Form, Input, Radio } from 'antd';
import Collectionpage from "./Collectionpage";
import Contactme from "./Contactme";

const Home = () => {
  const [visible, setVisible] = useState(false);
  const onCreate = (values) => {
      console.log('Received values of form: ', values);
      setVisible(false);
    };
  const [boxes] = useState(Boxes);
  return (
    <>
      <div className="heading text-center">
        <h1> Our College Faculty ,Subjects and Students</h1>
      </div>
      <div className="boxes">
        {boxes.map((value) => {
          return (
            <div
              key={value.id}
              className="box"
              style={{ backgroundColor: value.background }}
            >
              <p>{value.data}</p>
            </div>
          );
        })}
      </div>
      <div className="Contactus text-center mt-5">
      <Collectionpage visible={visible} text="Contact-Us" setVisible={setVisible} form={<Contactme visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false)
        }}/>}/>
      </div>
    </>
  );
};

export default Home;
