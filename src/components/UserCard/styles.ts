import { Box, Card, styled, Typography, Button } from "@mui/material";
import picto from "../../img/picto@2x.png";


export const CardWrapper = styled(Card)(() => ({
   position: "relative",
  textAlign: "center",
  background: "linear-gradient(114.99deg, #471CA9 -0.99%, #5736A3 54.28%, #4B2A99 78.99%)",
  height: "404px",
  maxWidth: "380px",
  marginLeft: "auto",
  marginRight: "auto",
  padding: "28px 0",
  borderRadius: "20px",
  boxShadow: " -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23)",
}));

export const Logo = styled("img")`
  position: absolute;
  top: 20px;
  left: 20px;
`;

export const ImgWrapper = styled(Box)(() => ({
  position: "absolute",
  top: "178px",
  left: "38%;",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "50%",
  width: "80px",
  height: "80px",
  overflow: "hidden",
  backgroundColor: "#EBD8FF",
  boxShadow: "0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06), inset 0px -2.19582px 4.39163px #AE7BE3, inset 0px 4.39163px 3.29372px #FBF8FF;",
}));

export const Poster = styled("img")`
  display: flex;
  width: 62px;
  height: 62px;
  border-radius: 50%;
`;

export const ImgContainer = styled(Box)`
  height: 168px;
  margin-left: 36px;
  margin-right: 36px;
  background-image: url(${picto});
  background-size: contain;
  background-repeat: no-repeat;
`;

export const Line = styled("div")`
  height: 8px;
  margin-top: 18px;
  margin-bottom: 58px;
  background: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06), inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;
export const Text = styled(Typography)`
  margin: 0 auto 12px auto;
  padding: 4px;
  text-align: center;
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  text-transform: uppercase;
  color: #ebd8ff;
`;
export const ButtonMain = styled(Button)`
  width: 196px;
  height: 50px;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  border-radius: 10px;
  color: #373737;
`;
