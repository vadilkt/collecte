import Head from "next/head"
import Dashboard from "../../../components/admin-dashboard";
import {TextInput, Button, Label, Modal} from "flowbite-react";

import {useState, useEffect } from "react";
import { extractFromUrlQuery } from "../../../libs/helpers";

import Api from "../../../libs/api";

import ModalErrors from "../../../components/modals/modal-errors";
import ModalSuccess from "../../../components/modals/modal-success";
import Loading from "../../../components/loading";

import { ErrorsType, LoadingType, ObjectifType, objectifDefault } from "../../../libs/types";
import { createLoading,  closeLoading, catchError} from "../../../libs/helpers";

export default () => {

  const [errors,setErrors] = useState<ErrorsType>({});
  const [success, setSuccess] = useState<string>("");
  const [loading, setLoading] = useState<LoadingType>({});
  const [objectif, setObjectif] = useState<ObjectifType>(objectifDefault)

  const handleChange = (e) : void => {
    const valueChanged: Record<string,string> = { [e.target.name] : e.target.value};
    setObjectif((values) => ({...values,...valueChanged}))
  }

  const submit = () => {
    setLoading(() => createLoading("submit"))
    Api.put(`objectifs/${objectif.id}`, objectif).then( res => {
      setSuccess("Objectif modifié avec succes");
    }).catch( error => catchError(error, setErrors)).finally(()=> {
        setLoading((values) => closeLoading(values, "submit") )
    })
  }

  useEffect(() => {
    Api.get(`objectifs/${extractFromUrlQuery("id")}`).then( res => {
       setObjectif(() => res.data);
    }).catch( error => catchError(error, setErrors))
  },[]);

  return <>
    <Head>
      <title> Dekap - Action </title>
    </Head>

    <Dashboard breadcrumb={[
      {link: "/admin/actions/objectifs", label: "Actions commerciales"},
      {link: "#", label: "Modifier objectif"}
    ]}>
        <h3 className="text-xl mt-4 text-gray-700"> Modifier un objectif </h3>
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
                value={objectif.intitule_obj}
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
                value={objectif.intitule_eval}
              />
            </div>
            <div className="flex justify-between items-center mt-4">
              <Button color="success"  onClick={submit}>
                Modifier l'objectif
              </Button>
            </div>
          </form>
        </div>
    </Dashboard>
    <ModalErrors errors={errors} />
    <ModalSuccess success={success} setSuccess={setSuccess} />
  </>
}