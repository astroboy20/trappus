import { Footer } from "@/components/footer";
import { Header } from "@/components/header/header";
import About from "@/container/about";

export default function Page(){
    return(
        <div>
            <Header/>
            <About/>
            <Footer/>
        </div>
    )
}