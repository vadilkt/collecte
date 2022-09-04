import Head from "next/head"
import Layout from "../components/Layout";
import {Label, TextInput, Button} from "flowbite-react";

import { useState } from "react";

import Link from "next/link";
import Logo from "../components/logo";

import { AdminType, adminDefault } from "../libs/types";

import { ErrorsType, LoadingType, UserType, userDefault } from "../libs/types";
import { createLoading, createError, closeLoading, catchError} from "../libs/helpers";

import Api from "../libs/api";
import Auth from "../libs/auth";

import ModalErrors from "../components/modals/modal-errors";
import Loading from "../components/loading";


export default () => {

  const [admin, setAdmin] = useState<AdminType>(adminDefault)
  const [errors,setErrors] = useState<ErrorsType>({});
  const [loading, setLoading] = useState<LoadingType>({});

  const handleChange = (e) : void => {
    const valueChanged: Record<string,string> = { [e.target.name] : e.target.value};
    setAdmin((values) => ({...values,...valueChanged}))
  }

  const submit = () => {
    setLoading(() => createLoading("login"))
    Api.post("admin-login", admin).then( res => {
      Auth.save(res.data);
      window.location.assign("/admin/actions/objectifs")
    }).catch( error => catchError(error, setErrors)).finally(()=> {
        setLoading((values) => closeLoading(values, "login") )
    })
  }

  return <Layout>
    <Head>
      <title> Dekap - Admin </title>
    </Head>
    <div className="h-screen overflow-auto flex items-center justify-center">
        <div className="w-[450px] h-[550px] bg-white rounded-lg px-8 py-8">
        <Logo/>
          <h3 className="text-xl mt-4 text-gray-700 text-center"> Admin | Login</h3>
          <form className="flex flex-col gap-4 mt-4">
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="username"
                  value="Nom d'utilisateur"
                />
              </div>
              <TextInput
                id="username"
                type="text"
                name="username"
                onChange={(e) => handleChange(e)}
                required={true}
              />
            </div>
            <div>
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
                required={true}
              />
            </div>
            <div className="flex justify-between items-center mt-4">
              <a href="#" className="text-blue-500 text-sm"> Mot de passe oublie ? </a>
              <Button onClick={submit} color="success" >
                Connexion
              </Button>
            </div>
            <div className="border-t border-gray-200 mt-4 pt-4">
              <Link href="/">
                <a className="text-gray-700 px-4 rounded-md py-2 block w-full text-center" rel="noopener noreferrer">
                  <span className="underline text-blue-600 font-medium text-sm">Accueil</span>
                </a>
              </Link>
            </div>
          </form>
        </div>  
    </div>
    <ModalErrors errors={errors} />
  </Layout>
}