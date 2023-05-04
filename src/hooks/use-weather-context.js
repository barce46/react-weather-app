import { useContext } from "react";
import weatherContext from "../context/weather";

export default function () {
  return useContext(weatherContext)
} 