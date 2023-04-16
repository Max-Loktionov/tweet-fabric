// import { useState } from "react";
import Box from "@mui/material/Box";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select, { SelectChangeEvent } from "@mui/material/Select";

// export default function BasicSelect() {
//   const [age, setAge] = useState("");

// const handleChange = (event: SelectChangeEvent) => {
//   setAge(event.target.value as string);
// };

//   return (
//     <Box sx={{ minWidth: 120 }}>
//       <FormControl fullWidth>
//         <InputLabel id="demo-simple-select-label">Age</InputLabel>
//         <Select labelId="demo-simple-select-label" id="demo-simple-select" value={age} label="Age" onChange={handleChange}>
//           <MenuItem value={10}>Ten</MenuItem>
//           <MenuItem value={20}>Twenty</MenuItem>
//           <MenuItem value={30}>Thirty</MenuItem>
//         </Select>
//       </FormControl>
//     </Box>
//   );
// }

import { useDispatch, useSelector } from "react-redux";
import { changeFilter, getFiltred } from "../../redux/filterSlice";

interface SelectOption {
  value: string;
  label: string;
}

const options: SelectOption[] = [
  { value: "all", label: "show all" },
  { value: "follow", label: "follow" },
  { value: "following", label: "following" },
];

function BasicSelect() {
  const dispatch = useDispatch();
  const selectedOption = useSelector(getFiltred);

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <Box sx={{ minWidth: 120, p: "24px" }}>
      <label htmlFor="select-option">Select an option:</label>
      <select id="select-option" value={selectedOption} onChange={handleOptionChange}>
        <option value="">--Select--</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </Box>
  );
}

export default BasicSelect;
