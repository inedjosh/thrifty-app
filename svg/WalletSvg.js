import * as React from "react";
import { Dimensions } from "react-native";
import Svg, { Path } from "react-native-svg";

export default function WalletSvg(props) {
  return (
    <Svg width="20" height="18" viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
<Path fill-rule="evenodd" clip-rule="evenodd" d="M16 4H17C18.6569 4 20 5.34315 20 7V15C20 16.6569 18.6569 18 17 18H3C1.34315 18 0 16.6569 0 15V3C0 1.34315 1.34315 0 3 0H13C14.6569 0 16 1.34315 16 3V4ZM13 2H3C2.44772 2 2 2.44772 2 3C2 3.55228 2.44772 4 3 4H14V3C14 2.44772 13.5523 2 13 2ZM18 12H17C16.4477 12 16 11.5523 16 11C16 10.4477 16.4477 10 17 10H18V12ZM17 8H18V7C18 6.44772 17.5523 6 17 6H3C2.65943 6.0005 2.32127 5.94302 2 5.83V15C2 15.5523 2.44772 16 3 16H17C17.5523 16 18 15.5523 18 15V14H17C15.3431 14 14 12.6569 14 11C14 9.34315 15.3431 8 17 8Z" fill={props.color}/>
</Svg>

  );
}
