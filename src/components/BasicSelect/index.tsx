import { Box } from "@mui/material";
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

export default function BasicSelect() {
  const dispatch = useDispatch();
  const selectedOption = useSelector(getFiltred);

  const handleOptionChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(changeFilter(event.target.value));
  };

  return (
    <Box sx={{ minWidth: 120, p: "24px" }}>
      <label htmlFor="select-option">Select an option: </label>
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
