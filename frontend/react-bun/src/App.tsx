import { useEffect } from 'react';

const APP = () =>{
  useEffect(() => {
    fetch("http://localhost:4000").then((data)=>{
      console.log(data);
    });
},[]);
return(
  <div>
    {data &&
      Data.length>0 &&
      Data.map((d)=>{
        <>{d.name}</>;
      })}
  </div>
);
};

export default APP;