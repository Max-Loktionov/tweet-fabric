import { useSelector } from "react-redux";
import { getFiltred } from "../../redux/filterSlice";
import { IUser } from "../../assets/interfaces";

export const getFiltredCards = (props: IUser[] | undefined): IUser[] | undefined => {
  const selectedOption = useSelector(getFiltred);

  if (props) {
    switch (selectedOption) {
      case "follow":
        return props?.filter((x) => x.followed === false);
        break;
      case "following":
        return props?.filter((x) => x.followed === true);
        break;
      default:
        return props;
    }
  }
};
