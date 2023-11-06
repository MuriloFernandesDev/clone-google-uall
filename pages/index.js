import https from "https";
import Head from "next/head";
import React, { Fragment } from "react";
import { Configs } from "../Configs";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PublicidadeItem from "../components/PublicidadeItem";

const SearchPage = ({ params }) => {
  return (
    <Fragment>
      <Head>
        <title>{Configs.title}</title>
      </Head>
      <Header />
      <div className="max-w-7xl mx-auto mt-4 px-5">
        <div className="p-5 md:p-10 flex flex-col items-center justify-center text-xl md:text-5xl text-center gap-4 border rounded-xl shadow-lg">
          <h1>{params?.nome ?? "U-All Solutions"}</h1>
          <h2>Wi-fi Oferecido</h2>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-6 gap-10 mt-10">
          <PublicidadeItem />
          <PublicidadeItem />
          <PublicidadeItem />
          <PublicidadeItem />
          <PublicidadeItem />
          <PublicidadeItem />
          <PublicidadeItem />
          <PublicidadeItem />
          <PublicidadeItem />
          <PublicidadeItem />
          <PublicidadeItem />
          <PublicidadeItem />
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default SearchPage;

export async function getServerSideProps(context) {
  try {
    const res = await fetch(
      `${process.env.API_KEY_UALL}cliente/dados-cliente-id/${context.query.cliente}`,
      {
        agent: new https.Agent({
          rejectUnauthorized: false,
        }),
      }
    );

    const data = await res.json();
    if (data.error) {
      return {
        props: {
          params: null,
        },
      };
    } else {
      return {
        props: {
          params: data,
        },
      };
    }
  } catch (err) {
    return {
      props: {
        params: null,
      },
    };
  }
}
