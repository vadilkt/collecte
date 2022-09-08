import Head from "next/head"
import Layout from "../components/Layout";
import {Label, TextInput, Select} from "flowbite-react";
import { useState } from "react";

import Link from "next/link";
import Logo from "../components/logo";

import { ErrorsType, LoadingType, UserType, userDefault } from "../libs/types";
import { createLoading, createError, closeLoading, catchError} from "../libs/helpers";

import Api from "../libs/api";
import Auth from "../libs/auth";

import ModalErrors from "../components/modals/modal-errors";
import Loading from "../components/loading";

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

    // State
    const [errors,setErrors] = useState<ErrorsType>({});
    const [loading, setLoading] = useState<LoadingType>({});

    const [showPassword, setShowPassword] = useState(false)
    const [user, setUser] = useState<UserType>(userDefault)

    // Methods.
    const handleChange = (e) : void => {
      const valueChanged: Record<string,string> = { [e.target.name] : e.target.value};
      setUser((values) => ({...values,...valueChanged}))
    }

    const submit = () => {
      setLoading(() => createLoading("submit"))
      Api.post("register", user).then( res => {
        Auth.save(res.data);
        window.location.assign("/user/actions/objectifs")
      }).catch( error => catchError(error, setErrors)).finally(()=> {
          setLoading((values) => closeLoading(values, "submit") )
      })
    }

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
          <div className="flex flex-col gap-4 mt-6">

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
                  name="noms"
                  onChange={(e) => handleChange(e)}
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
                  name="prenoms"
                  onChange={(e) => handleChange(e)}
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
                  name="poste"
                  onChange={(e) => handleChange(e)}
                  required={true}
                />
              </div>
              <div className="w-full md:w-1/2 pl-2">
                <div className="mb-2 block">
                  <Label
                    htmlFor="anciennete"
                    value="Ancienneté ( en mois )"
                  />
                </div>
                <TextInput
                  id="anciennete"
                  type="text"
                  placeholder=""
                  name="anciennete"
                  onChange={(e) => handleChange(e)}
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
                name="email"
                onChange={(e) => handleChange(e)}
                required={true}
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="superieur"
                  value="Supérieur hierachique"
                />
              </div>
              <TextInput
                id="superieur"
                type="text"
                placeholder=""
                name="superieur"
                onChange={(e) => handleChange(e)}
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
                    name="agence"
                    onChange={(e) => handleChange(e)}
                    required={true}
                  >
                    {
                      agences.map( (item) => <option value={item}>{item}</option>)
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
                  name="classification"
                  onChange={(e) => handleChange(e)}
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
                    name="direction"
                    onChange={(e) => handleChange(e)}
                    required={true}
                  >
                    {
                      directions.map( (item) => <option value={item}>{item}</option>)
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
                  name="departement"
                  onChange={(e) => handleChange(e)}
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
                  name="password"
                  onChange={(e) => handleChange(e)}
                  placeholder=""
                  required={true}
                />
              </div>
              <div className="w-full md:w-1/2 pl-2">
                <div className="mb-2 block">
                  <Label
                    htmlFor="password_confirmation"
                    value="Confirmation du mot de passe"
                  />
                </div>
                <TextInput
                  id="password_confirmation"
                  type="password"
                  name="password_confirmation"
                  onChange={(e) => handleChange(e)}
                  placeholder=""
                  required={true}
                />
              </div>
            </div>


            <div className="flex justify-between items-center mt-4">
              <button onClick={submit} className="bg-green-700 text-white py-2.5 px-8 w-full block rounded-md" color="success">
                <Loading loading={loading} item="submit" text="Créer un compte" alt="En cours..."/>
              </button>
            </div>

            <div className="border-t border-gray-200 mt-4 pt-4">
              <Link href="/login">
                <a className="text-gray-700 px-4 rounded-md py-2 block w-full text-center" rel="noopener noreferrer">
                  Déjà inscrit ? <span className="hover:underline text-blue-600 font-medium"> Connexion </span>
                </a>
              </Link>
            </div>
          </div>
        </div>  
    </div>
    <ModalErrors errors={errors} />
  </Layout>
}
