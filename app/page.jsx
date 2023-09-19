import HeroBanner from "./components/Home/HeroBanner";
import Breadcrumb from "./components/Blog/Breadcrumb";
// import {fetchData} from "@/app/libs/fetchData";


export default function Home (){

    return (
        <>
            <div className="text-center" style={{background:'#000',color:"white"}}>
                <h1 className="text-6xl md:text-8xl font-bold tracking-tighter leading-tight">Homepage</h1>
                <HeroBanner />

            </div>
        </>
    );
};