import React, { useState } from "react";
import { message, Modal } from "antd";
import { useTheme } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import Chip from "@material-ui/core/Chip";
import Box from "@material-ui/core/Box";

// const { Option } = Select;
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  "HTML",
  "CSS",
  "JS",
  "TYPESCRIPT",
  "SPRINGBOOT",
  "MEAN",
  "MERN",
  "REACT",
  "JAVA",
  "FLUTTER",
  "DART",
  "BLOCKCHAIN",
  "REACT-NATIVE",
  "PYTHON",
  "DJANGO",
  "PHP",
  "MYSQL",
];

const Addfaculty = ({ visible, onCreate, onCancel, setVisible }) => {
  const theme = useTheme();
  const [name, setname] = useState();
  console.log(name, "this is name");
  const [age, setage] = useState("");
  const [status, setstatus] = useState("");
  const [address, setaddress] = useState("");
  const [skill, setskill] = useState([]);


  const get = JSON.parse(localStorage.getItem("data"));
  const [x,setx]=useState([get])
  console.log(x,"kljhgfdghjh");

  console.log(typeof get, "get");

  // console.log( JSON.parse(localStorage.getItem ("data")),"kjhgfds")

  const handleChange = (event) => {
    setstatus(event.target.value);
  };
  const handleaddress = (e) => {
    setaddress(e.target.value);
  };
  const handleage = (e) => {
    setage(e.target.value);
  };
  const handlename = (e) => {
    setname(e.target.value);
  };
  const handleskill = (event) => {
    const {
      target: { value },
    } = event;
    setskill(
      // On autofill we get a stringified value.
      typeof value === "string" ? value.split(",") : value
    );
  };

  // var a = JSON.parse(localStorage.getItem("data"));
  // console.log(setdata, "a");

  const submit = () => {
    const userdata = {
      name: name,
      age: age,
      address: address,
      status: status,
      skill: skill,
    };
    if (
      name === "" ||
      name === undefined ||
      age === "" ||
      age === undefined ||
      address === "" ||
      address === undefined ||
      skill === "" ||
      skill.length < 5 ||
      skill === undefined ||
      status === "" ||
      status === undefined
    ) {
      message.error("please fill the form properly");
    } else {
      if (get === null) {
        const b=localStorage.setItem("data", JSON.stringify(userdata));
        console.log(( b),"mkjhgcfxfcghj");
        // setx([])
        // setname("");
        // setage("");
        // setaddress("");
        // setstatus("");
        // setskill("");
        setVisible(false);
        alert("lkjhjghg");
      } else {
        setx([userdata])      
        localStorage.setItem("data", JSON.stringify(x));
        // setname("");
        // setage("");
        // setaddress("");
        // setstatus("");
        // setskill("");
        setVisible(false);
        alert("lkjhjghg");
      }
    }
  };

  return (
    <div>
      <Modal
        visible={visible}
        title="Add the Faculty Name"
        okText="Submit"
        cancelText="Cancel"
        onCancel={onCancel}
        onOk={submit}
      >
        <TextField
          id="standard-basic"
          label="Name"
          value={name}
          onChange={handlename}
          fullWidth
          type="text"
          variant="standard"
        />
        <br />
        <br />
        <TextField
          id="standard-basic"
          label="Age"
          value={age}
          onChange={handleage}
          type="number"
          fullWidth
          variant="standard"
        />
        <br />
        <br />
        <TextField
          placeholder="MultiLine with rows: 2 and rowsMax: 4"
          multiline
          variant="filled"
          rows={2}
          label="Address"
          required
          maxRows={4}
          value={address}
          onChange={handleaddress}
          fullWidth
        />
        <br />
        <br />
        <FormControl
          sx={{ m: 1, minWidth: 80 }}
          size="medium"
          style={{ width: "200px" }}
        >
          <InputLabel id="demo-simple-select-autowidth-label">
            Maretial Status
          </InputLabel>
          <Select
            labelId="demo-simple-select-autowidth-label"
            id="demo-simple-select-autowidth"
            value={status}
            onChange={handleChange}
            autoWidth
            variant="standard"
            label="Maretial Status"
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value="Married">Married</MenuItem>
            <MenuItem value="Unmarried">Unmarried</MenuItem>
          </Select>
        </FormControl>
        <br />
        <br />
        <FormControl sx={{ m: 1, width: 300 }} style={{ width: "300px" }}>
          <InputLabel id="demo-multiple-chip-label px-5" className="px-2">
            Skills
          </InputLabel>
          <Select
            labelId="demo-multiple-chip-label"
            id="demo-multiple-chip"
            multiple
            value={skill}
            onChange={handleskill}
            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
            renderValue={(selected) => (
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                {selected.map((value) => (
                  <Chip key={value} label={value} />
                ))}
              </Box>
            )}
            MenuProps={MenuProps}
          >
            {names.map((name) => (
              <MenuItem key={name} value={name}>
                {name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <p style={{ fontSize: "10px" }}>Min 5 skills are requires</p>
      </Modal>
    </div>
  );
};

export default Addfaculty;
