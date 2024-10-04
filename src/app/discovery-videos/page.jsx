import { Footer } from "@/components/footer";
import { Header } from "@/components/header/header";
import About from "@/container/about";
import { Lessons } from "@/container/lessons";

export default function Page(){
    return(
        <div>
            <Header/>
            <Lessons/>
            <Footer/>
        </div>
    )
}