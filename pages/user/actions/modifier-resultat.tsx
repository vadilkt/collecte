import Head from "next/head"
import Dashboard from "../../../components/dashboard";
import {TextInput, Button, Label, Checkbox} from "flowbite-react";
import {useState, useEffect} from "react";

import Api from "../../../libs/api";

import ModalErrors from "../../../components/modals/modal-errors";
import Loading from "../../../components/loading";

import { ErrorsType, LoadingType,  ScoreType,scoreDefault, UserType, userDefault, AssignationType, assignationDefault } from "../../../libs/types";
import { createLoading,  closeLoading, catchError, extractFromUrlQuery} from "../../../libs/helpers";
import ModalSuccess from "../../../components/modals/modal-success";

const moyens : string[] = [
  "Téléphone",
  "Internet",
  "Diners",
  "Apéritifs",
  "Dotation carburant",
]


export default () => {

  const [errors,setErrors] = useState<ErrorsType>({});
  const [success, setSuccess] = useState<string>("");
  const [loading, setLoading] = useState<LoadingType>({});
  const [score, setScore] = useState<ScoreType>(scoreDefault);
  const [assignation, setAssignation] = useState<AssignationType>(assignationDefault);
  const [user, setUser] = useState<UserType>(userDefault);

  useEffect(() => {
    if( user.id != undefined){
      Api.get(`scores/${extractFromUrlQuery("id")}`).then( res => {
        setAssignation(res.data.assignation);
        const newScore = {
            ...res.data,
            moyens: JSON.parse(res.data.moyens),
        }
        setScore(() => newScore)
      })
    }
  },[user]);

  const handleChange = (e) : void => {
    const valueChanged: Record<string,string> = { [e.target.name] : e.target.value};
    setScore((values) => ({...values,...valueChanged}))
  }

  const toggleMoyen = (e) => {
    const value = e.target.value;
    setScore((values) => ({
        ...values,
        moyens: score.moyens.includes(value) ? score.moyens.filter(s => s!= value) : [...score.moyens,value]
    }))
  }

  const submit = () => {
    setLoading(() => createLoading("submit"))
    Api.put(`scores/${score.id}`, score).then( res => {
      setSuccess("Les modifications on ete enregistrees avec succes");
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
            {link: "/user/actions/objectifs", label: "Actions commerciales"},
            {link: "#", label: "Modifier resultat"}
        ]
    } user={user}  setUser={setUser}>
        <h3 className="text-xl mt-4 text-gray-700"> Modifier resultat </h3>
        <div className="mt-4 bg-white p-8 rounded-lg">
            <form className="flex flex-col gap-4">

            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="objectif"
                  value="Objectif"
                />
              </div>
              <TextInput
                type="text"
                value={assignation.objectif.intitule_obj}
                disabled={true}
              />
            </div>


            <div className="">
                <div className="mb-2 block">
                  <Label
                    value="Moyens"
                  />
                </div>
                  {
                    moyens.map( item => 
                      <div
                        className="flex flex-col gap-4"
                        id="checkbox"
                      >
                        <div className="flex items-center gap-2">
                          <Checkbox
                            id={item.split(" ").join("")} 
                            onChange={(e) => toggleMoyen(e)} 
                            checked={score.moyens.includes(item) ? true: false} value={item} />
                          <div>
                            <Label htmlFor={item.split(" ").join("")}>{item}</Label>
                          </div>
                        </div>
                      </div>
                    )
                  }
              </div>

            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="result"
                  value="Resultat obtenu"
                />
              </div>
              <TextInput
                id="result"
                type="text"
                name="valeur_score"
                value={score.valeur_score}
                onChange={(e) => handleChange(e)}
                required={true}
              />
            </div>

            <div className="flex justify-between items-center mt-4">
              <Button color="success" onClick={submit}>
                <Loading loading={loading} item="submit" text="Enregister" alt="En cours..." />
              </Button>
            </div>
          </form>
        </div>
        <ModalErrors errors={errors} />
        <ModalSuccess success={success} setSuccess={setSuccess} />
    </Dashboard>
  </>
}