import { FC } from "react";
import Navbar from "@/components/navbar";

const Team: FC = () => {
    return ( 
        <div className="bg-black text-white px-6 py-8">
             <Navbar />
            <div>
                <h1>Our Team</h1>
            </div>
        </div>
     );
}
 
export default Team;