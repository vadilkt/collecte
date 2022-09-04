import Head from "next/head"
import Dashboard from "../../../components/admin-dashboard";
import {TextInput, Button, Label} from "flowbite-react";
import {useState, useEffect } from "react";

import { extractFromUrlQuery } from "../../../libs/helpers";

import Api from "../../../libs/api";

import ModalErrors from "../../../components/modals/modal-errors";
import ModalSuccess from "../../../components/modals/modal-success";
import Loading from "../../../components/loading";

import { ErrorsType, LoadingType, ObjectifType, objectifDefault, AssignationType, assignationDefault } from "../../../libs/types";
import { createLoading,  closeLoading, catchError} from "../../../libs/helpers";

export default () => {

  const [errors,setErrors] = useState<ErrorsType>({});
  const [loading, setLoading] = useState<LoadingType>({});
  const [objectif, setObjectif] = useState<ObjectifType>(objectifDefault);
  const [assignation, setAssignation] = useState<AssignationType>(assignationDefault);

  const handleChange = (e) : void => {
    const valueChanged: Record<string,string> = { [e.target.name] : e.target.value};
    setAssignation((values) => ({...values,...valueChanged}))
  }

  const submit = () => {
    setLoading(() => createLoading("submit"))
    Api.post(`assignations`, assignation).then( res => {
      window.location.assign("/admin/actions/consulter-donnees");
    }).catch( error => catchError(error, setErrors)).finally(()=> {
        setLoading((values) => closeLoading(values, "submit") )
    })
  }

  useEffect(() => {
    Api.get(`objectifs/${extractFromUrlQuery("id")}`).then( res => {
       setAssignation((values) => ({
        ...values,
        objectif_id: res.data.id,
        intitule_obj: res.data.intitule_obj,
        intitule_eval: res.data.intitule_eval
       }));
    }).catch( error => catchError(error, setErrors))
  },[]);

  return <>
    <Head>
      <title> Dekap - Action </title>
    </Head>
    <Dashboard breadcrumb={
        [
            {link: "/admin/actions/objectifs", label: "Actions commerciales"},
            {link: "#", label: "Assigner objectif"}
        ]
    }>
        <h3 className="text-xl mt-4 text-gray-700"> Assigner un objectif </h3>
        <div className="mt-4 bg-white p-8 rounded-lg">
            <div className="flex flex-col gap-4">
            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="objectif"
                  value="Objectif"
                />
              </div>
              <TextInput
                type="text"
                value={assignation.intitule_obj}
                disabled={true}
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
                value={assignation.intitule_eval}
                disabled={true}
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="result"
                  value="Resultat attendu"
                />
              </div>
              <TextInput
                id="result"
                type="number"
                name="valeur_eval"
                onChange={(e) =>  handleChange(e)}
                required={true}
              />
            </div>

            <div className="flex flex-wrap">  
              <div className="w-full md:w-1/2 pr-2">
                <div className="mb-2 block">
                  <Label
                    htmlFor="date_debut"
                    value="Date de début"
                  />
                </div>
                <TextInput
                  id="date_debut"
                  type="date"
                  name="date_deb"
                  onChange={(e) =>  handleChange(e)}
                  required={true}
                />
              </div>
              <div className="w-full md:w-1/2 pl-2">
                <div className="mb-2 block">
                  <Label
                    htmlFor="date_fin"
                    value="Date de fin"
                  />
                </div>
                <TextInput
                  id="date_fin"
                  type="date"
                  name="date_fin"
                  onChange={(e) =>  handleChange(e)}
                  required={true}
                />
              </div>
            </div>

            <div className="flex justify-between items-center mt-4">
              <Button color="success" onClick={submit} >
                <Loading item="submit" loading={loading} text="Assigner l'objectif" alt="En cours..."/>
              </Button>
            </div>
          </div>
        </div>
        <ModalErrors errors={errors} />
    </Dashboard>
  </>
}