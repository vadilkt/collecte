import Head from "next/head"
import Dashboard from "../../../components/admin-dashboard";
import {TextInput, Button, Label} from "flowbite-react";
import {useState} from "react";

import Api from "../../../libs/api";

import ModalErrors from "../../../components/modals/modal-errors";
import Loading from "../../../components/loading";

import { ErrorsType, LoadingType, ObjectifType, objectifDefault } from "../../../libs/types";
import { createLoading,  closeLoading, catchError} from "../../../libs/helpers";

export default () => {

  const [errors,setErrors] = useState<ErrorsType>({});
  const [loading, setLoading] = useState<LoadingType>({});
  const [objectif, setObjectif] = useState<ObjectifType>(objectifDefault)

  const handleChange = (e) : void => {
    const valueChanged: Record<string,string> = { [e.target.name] : e.target.value};
    setObjectif((values) => ({...values,...valueChanged}))
  }

  const submit = () => {
    setLoading(() => createLoading("submit"))
    Api.post("objectifs", objectif).then( res => {
      window.location.assign("/admin/actions/objectifs")
    }).catch( error => catchError(error, setErrors)).finally(()=> {
        setLoading((values) => closeLoading(values, "submit") )
    })
  }

  return <>
    <Head>
      <title> Dekap - Action </title>
    </Head>
    <Dashboard breadcrumb={
        [
            {link: "/admin/actions/objectifs", label: "Actions commerciales"},
            {link: "/admin/actions/creer-objectif", label: "Creer objectif"}
        ]
    }>
        <h3 className="text-xl mt-4 text-gray-700"> Créer un objectif </h3>
        <div className="mt-4 bg-white p-8 rounded-lg">
            <form className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="objectif"
                  value="Nom de l'objectif"
                />
              </div>
              <TextInput
                id="objectif"
                type="text"
                name="intitule_obj"
                onChange={(e) => handleChange(e)}
                required={true}
              />
            </div>
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="evaluateur"
                  value="Evaluateur"
                />
              </div>
              <TextInput
                id="evaluateur"
                type="text"
                name="intitule_eval"
                onChange={(e) => handleChange(e)}
                required={true}
              />
            </div>
            <div className="flex justify-between items-center mt-4">
              <Button color="success" onClick={submit} >
                <Loading loading={loading} item="submit" text="Créer l'objectif" alt="En cours..."/>
              </Button>
            </div>
          </form>
        </div>
        <ModalErrors errors={errors} />
    </Dashboard>
  </>
}