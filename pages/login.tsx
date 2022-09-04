import Head from "next/head"
import Layout from "../components/Layout";
import {Label, TextInput, Button} from "flowbite-react";

import { useState} from "react";

import Link from "next/link";
import Logo from "../components/logo";

import { UserLogin, userLoginDefault } from "../libs/types";

import { ErrorsType, LoadingType } from "../libs/types";
import { createLoading,  closeLoading, catchError} from "../libs/helpers";

import Api from "../libs/api";
import Auth from "../libs/auth";

import ModalErrors from "../components/modals/modal-errors";
import Loading from "../components/loading";


export default () => {

  const [user, setUser] = useState<UserLogin>(userLoginDefault)
  const [errors,setErrors] = useState<ErrorsType>({});
  const [loading, setLoading] = useState<LoadingType>({});

  const handleChange = (e) : void => {
    const valueChanged: Record<string,string> = { [e.target.name] : e.target.value};
    setUser((values) => ({...values,...valueChanged}))
  }

  const submit = () => {
    setLoading(() => createLoading("login"))
    Api.post("login", user).then( res => {
      Auth.save(res.data);
      window.location.assign("/user/actions/objectifs")
    }).catch( error => catchError(error, setErrors)).finally(()=> {
        setLoading((values) => closeLoading(values, "login") )
    })
  }

  return <Layout>
    <Head>
      <title> Dekap - Login </title>
    </Head>
    <div className="h-screen overflow-auto flex items-center justify-center">
        <div className="w-[450px] h-[500px] bg-white rounded-lg px-8 py-8">
        <Logo/>
          <form className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="email1"
                  value="Adresse Email"
                />
              </div>
              <TextInput
                id="email1"
                type="email"
                placeholder=""
                name="email"
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
              <a href="#" className="text-blue-500 text-sm"> Mot de passe oublié ? </a>
                <Button color="success" onClick={submit} >
                  <Loading loading={loading} item="login" text="Connexion" alt="En cours..." />
                </Button>
            </div>
            <div className="border-t border-gray-200 mt-4 pt-4">
              <Link href="/register">
                <a className="text-gray-700 px-4 rounded-md py-2 block w-full text-center" rel="noopener noreferrer">
                  Pas de compte ? <span className="hover:underline text-sm text-blue-600 font-medium">Créer votre compte</span>
                </a>
              </Link>
            </div>
          </form>
        </div>  
    </div>
    <ModalErrors errors={errors} />
  </Layout>
}