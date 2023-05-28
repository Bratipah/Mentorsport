import React from "react";
import '../../App.css';
import HomeDashboard from '../HomeDashboard';
import Footer from '../Footer';
import InfoBox from "../InfoBox";

export default function Dashboard() {
  return (<>
  <HomeDashboard />
  <div className= "app__stats">
            {/* New components for each infoBox */}
            
            {/* {Infoboxs title="Coronavirus cases"} */}
            <InfoBox
            isRed 
            active= "av"
            title="Coronavirus Cases" 
            cases= "20"
            total= "mentorship sessions" />

            {/* {Infoboxs title="Coronavirus recoveries} */}
            <InfoBox 
            active="read"
            title="Recovered" 
            cases="20"
            total= "mentorship sessions"/>

            {/* {Infoboxs title="Coronavirus deaths} */}
            <InfoBox 
            isRed
            active = "availa"
            title="Deaths" 
            cases="20"
            total= "mentorship sessions"/>
          </div>

  <Footer />
</>);
}
