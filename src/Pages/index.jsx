import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import Hero from "../components/shared/Hero";
import LoginForm from "../components/shared/LoginForm";
import ProductList from "../components/shared/ProductList";
import Team from "../components/shared/Team";

export default function Home(){
    // untuk nampilin pages utama
    return(
        <>
            <Header/>
            <Hero/>
            <ProductList/>
            <Team/>
            <LoginForm/>
            <Footer/>
        </>
    )
}