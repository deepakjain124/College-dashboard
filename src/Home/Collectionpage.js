import React,{useState} from 'react'
import Contactme from './Contactme';
import { Button, Modal, Form, Input, Radio } from 'antd';


const Collectionpage = ({form ,setVisible,text}) => {
    // const [visible, setVisible] = useState(false);
    // const onCreate = (values) => {
    //     console.log('Received values of form: ', values);
    //     setVisible(false);
    //   };
    

 
  return (
    <div>
      <Button
        type="primary"
        onClick={() => {
          setVisible(true);
        }}
        style={{backgroundColor:"blue",width:"200px",height:"50px",boxShadow:"10px 10px 20px black",border:"none"}}
      >
        {text}
      </Button>
      {/* <Contactme
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false)
        }}
      /> */}
      {form}
    </div>
  )
}

export default Collectionpage