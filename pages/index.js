import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import LatestProduct from "@/components/LatestProduct";
import BestSeller from "@/components/BestSeller";
import LatestProductSec from "@/components/LatestProductSec";
import LatestMobiles from "@/components/LatestMobiles";
import ShopByPrice from "@/components/ShopByPrice";
import InstallmentBanner from "@/components/installmentBanner";
import LatestTablets from "@/components/LatestTablets";
import Steps from "@/components/Steps";
import Footer from "@/components/Footer";
import { data } from "autoprefixer";

const inter = Inter({ subsets: ["latin"] });

export default function Home({ data }) {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <Header />
      <LatestProduct props={data} />
      <BestSeller />
      <LatestProductSec props={data} />
      <InstallmentBanner />
      <LatestMobiles props={data} />
      <ShopByPrice />
      <LatestTablets props={data} />
      <Steps />
      <Footer />
    </>
  );
}



export async function getServerSideProps() {
  const response = await fetch("http://localhost:3000/api/get-all-product");
  const data = await response.json();

  return { props: { data } };
}