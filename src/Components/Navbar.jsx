import { useLocation } from 'react-router-dom';
import { HeadContext } from './Context';
import { useContext } from 'react';
import Themes from './Themes';

export default function Navbar() {
  const {heading} = useContext(HeadContext);


  return (
    <nav className="bg-blue-600 p-4 shadow-md">
      <h1 className=" text-white text-xl font-bold">{heading}</h1>
      <Themes/>
    </nav>
  );
}
