import { useState } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import UploadCard from "./components/UploadCard";
import ResultCard from "./components/ResultCard";


function App() {


const [analysis,setAnalysis] = useState(null);



return (

<div className="min-h-screen bg-slate-100">


<Navbar />


<main>

<Hero />


<UploadCard 
setAnalysis={setAnalysis}
/>


<ResultCard 
analysis={analysis}
/>


</main>


</div>

);

}


export default App;