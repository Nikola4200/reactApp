
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Pocetna from './Pocetna';
 
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Navbar from './Navbar';
import Kontakt from './Kontakt';
import Footer from './Footer';
import { useState } from 'react';
import Kursevi from './Kursevi';

function App() {
  const [kursevi] = useState([
    {
      id:1,
      naziv:"Engleski A1",
      opis:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      cena:15000,
      predavac:"Budimir Branka",
      trajanje: "3 meseca"
    },
    {
      id:2,
      naziv:"Engleski A2",
      opis:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      cena:12000,
      predavac:"Budimir Branka",
      trajanje: "2 meseca"
    },   
    {
      id:3,
      naziv:"Engleski B1",
      opis:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      cena:15000,
      predavac:"Nemanja Nikolic",
      trajanje: "2 meseca"
    },    {
      id:4,
      naziv:"Engleski B2",
      opis:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      cena:18000,
      predavac:"Budimir Branka",
      trajanje: "4 meseca"
    },    {
      id:5,
      naziv:"Nemacki A1",
      opis:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
      cena:15000,
      predavac:"Filip Jankovic",
      trajanje: "3 meseca"
    },


  ]);
  return (
    <div >
       
       

        <BrowserRouter>
    
          <Navbar></Navbar>


          <Routes>
            <Route path="/" element={<Pocetna></Pocetna>} />
           <Route path="/kontakt" element={<Kontakt></Kontakt>} />
           <Route path="/kursevi" element={<Kursevi niz={kursevi}></Kursevi>} />
  

          </Routes>
        <Footer></Footer>
     
      </BrowserRouter>
    </div>
  );
}

export default App;
