import Head from "next/head"
import Layout from "../components/Layout";
import {Label, TextInput, Select} from "flowbite-react";

import Link from "next/link";
import Logo from "../components/logo";

const agences : string[] = [
  "Douala",
  "Yaoundé",
  "Bafoussam",
  "Bangan",
  "Bamendjou"
]

const directions : string[] = [
  "Douala ( Direction Générale )",
  "Bamendjou ( Siège Social )"
]

export default () => {
  return <Layout>
    <Head>
      <title> Dekap - Register </title>
    </Head>
    <div className="min-h-screen flex items-center justify-center py-12">
        <div className="w-[600px]  bg-white rounded-lg px-8 pb-8">
          <Logo/>
          <h2 className="text-xl text-center mt-4"> Collecte | s'inscrire </h2>
          <h3 className="text-lg text-gray-700 text-center mt-3">
            Gérer vos données Commerciales <br/> 
            <span className="text-base text-gray-600">Constituer votre base de données commerciales </span>
          </h3>
          <form className="flex flex-col gap-4 mt-6">

            <div className="flex flex-wrap">  
              <div className="w-full md:w-1/2 pr-2">
                <div className="mb-2 block">
                  <Label
                    htmlFor="noms"
                    value="Noms"
                  />
                </div>
                <TextInput
                  id="noms"
                  type="text"
                  placeholder=""
                  required={true}
                />
              </div>
              <div className="w-full md:w-1/2 pl-2">
                <div className="mb-2 block">
                  <Label
                    htmlFor="prenoms"
                    value="Prenoms"
                  />
                </div>
                <TextInput
                  id="prenoms"
                  type="text"
                  placeholder=""
                  required={true}
                />
              </div>
            </div>

            <div className="flex flex-wrap">  
              <div className="w-full md:w-1/2 pr-2">
                <div className="mb-2 block">
                  <Label
                    htmlFor="poste"
                    value="Poste"
                  />
                </div>
                <TextInput
                  id="poste"
                  type="text"
                  placeholder=""
                  required={true}
                />
              </div>
              <div className="w-full md:w-1/2 pl-2">
                <div className="mb-2 block">
                  <Label
                    htmlFor="anciennete"
                    value="Anciennete ( en mois )"
                  />
                </div>
                <TextInput
                  id="anciennete"
                  type="text"
                  placeholder=""
                  required={true}
                />
              </div>
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="email"
                  value="Adresse Email"
                />
              </div>
              <TextInput
                id="email"
                type="email"
                placeholder=""
                required={true}
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="superieur_hierachique"
                  value="Superieur hierachique"
                />
              </div>
              <TextInput
                id="superieur_hierachique"
                type="text"
                placeholder=""
                required={true}
              />
            </div>

            <div className="flex flex-wrap">  

              <div className="w-full md:w-1/2 pr-2">
                <div className="mb-2 block">
                  <Label
                    htmlFor="agence"
                    value="Agence"
                  />
                </div>
                <Select
                    id="agence"
                    required={true}
                  >
                    {
                      agences.map( (item) => <option>{item}</option>)
                    }
                  </Select>
              </div>

              <div className="w-full md:w-1/2 pl-2">
                <div className="mb-2 block">
                  <Label
                    htmlFor="classification"
                    value="Classification"
                  />
                </div>
                <TextInput
                  id="classification"
                  type="text"
                  placeholder=""
                  required={true}
                />
              </div>

            </div>

            <div className="flex flex-wrap">  

              <div className="w-full md:w-1/2 pr-2">
                <div className="mb-2 block">
                  <Label
                    htmlFor="direction"
                    value="Direction"
                  />
                </div>
                <Select
                    id="direction"
                    required={true}
                  >
                    {
                      directions.map( (item) => <option>{item}</option>)
                    }
                  </Select>
              </div>

              <div className="w-full md:w-1/2 pl-2">
                <div className="mb-2 block">
                  <Label
                    htmlFor="departement"
                    value="Département"
                  />
                </div>
                <TextInput
                  id="departement"
                  type="text"
                  placeholder=""
                  required={true}
                />
              </div>

            </div>

            <div className="flex flex-wrap">  
              <div className="w-full md:w-1/2 pr-2">
                <div className="mb-2 block">
                  <Label
                    htmlFor="password"
                    value="Mot de passe"
                  />
                </div>
                <TextInput
                  id="password"
                  type="password"
                  placeholder=""
                  required={true}
                />
              </div>
              <div className="w-full md:w-1/2 pl-2">
                <div className="mb-2 block">
                  <Label
                    htmlFor="confirm_password"
                    value="Confirmation du mot de passe"
                  />
                </div>
                <TextInput
                  id="confirm_password"
                  type="text"
                  placeholder=""
                  required={true}
                />
              </div>
            </div>


            <div className="flex justify-between items-center mt-4">
              <button className="bg-green-700 text-white py-2.5 px-8 w-full block rounded-md" color="success">
                Créer un compte
              </button>
            </div>

            <div className="border-t border-gray-200 mt-4 pt-4">
              <Link href="/register">
                <a className="text-gray-700 px-4 rounded-md py-2 block w-full text-center" rel="noopener noreferrer">
                  Déjà inscrit ? <span className="hover:underline text-blue-600 font-medium"> Connexion </span>
                </a>
              </Link>
            </div>
          </form>
        </div>  
    </div>
  </Layout>
}