import { useSelector } from "react-redux";
import { getFiltred } from "../../redux/filterSlice";
import { IUser } from "../../assets/interfaces";

export const getFiltredCards = (props: IUser[] | undefined): IUser[] | undefined => {
  const selectedOption: string = useSelector(getFiltred);

  if (props) {
    switch (selectedOption) {
      case "follow":
        return props.filter((x) => x.followed === false);
      case "following":
        return props.filter((x) => x.followed === true);
      default:
        return props;
    }
  } else {
    return undefined;
  }
};
