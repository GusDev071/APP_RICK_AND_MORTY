import { Entypo } from "@expo/vector-icons";


export const InfoCircleIcon = (props) => {
  return <Entypo name="info-with-circle" size={24} color="white" {...props} className={`active:opacity-80`} />;
};

export const ChevronLeftIcon = (props) => {
  return <Entypo name="chevron-left" size={24} color="white" {...props} className={`active:opacity-80`}/>;
};

export const infoIcon = (props) =>{
  return <Entypo name="info" size={24} color="white" {...props} className={`active:opacity-80`} />
}

export const homeIcon = (props) =>{
  return <Entypo name="home" size={24} color="white" {...props} className={`active:opacity-80`} />
}
