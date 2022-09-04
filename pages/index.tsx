import Head from "next/head"
import Layout from "../components/Layout";
import Logo from "../components/logo";

export default () => {
  return <Layout>
    <Head>
      <title> Dekap Accueil </title>
    </Head>
    <div className="h-screen overflow-auto flex items-center justify-center">
        <div className="w-[450px] h-[500px] bg-white rounded-lg px-8 pb-8">
          <Logo />
          <h2 className="text-3xl text-center mt-8"> Dekap </h2>
          <h3 className="text-xl text-gray-700 text-center mt-3">Gérez vos données commerciales  <br/> Dekap Lah</h3>
          <div className="mt-8 px-8 space-y-4">
              <a href="/login" className="bg-green-600 text-white px-4 rounded-md py-2.5 block w-full text-center" rel="noopener noreferrer">
                Se connecter
              </a>
              <a href="/register" className="bg-gray-600 text-white px-4 rounded-md py-2.5 block w-full text-center" rel="noopener noreferrer">
                S'enregistrer
              </a>
              <a href="/admin-login" className="bg-red-800 text-white px-4 rounded-md py-2.5 block w-full text-center" rel="noopener noreferrer">
                Administrer
              </a>
          </div>
        </div>  
    </div>
  </Layout>
}