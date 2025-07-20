import { HeadContext } from './Context';
import { useContext } from 'react';
import Themes from './Themes';
import './Navbar.scss';

export default function Navbar() {
  const {heading} = useContext(HeadContext);


  return (
    <nav className="bg-blue-600 p-4 shadow-md navbar">
      <h1 className=" text-white text-xl font-bold heading">{heading}</h1>
      <Themes/>
    </nav>
  );
}
