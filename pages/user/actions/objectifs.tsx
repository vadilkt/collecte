import Head from "next/head"
import Dashboard from "../../../components/dashboard";
import {Table} from "flowbite-react";

import { AssignationType, ErrorsType, userDefault, UserType } from "../../../libs/types";
import { useEffect, useState } from "react";

import ModalErrors from "../../../components/modals/modal-errors";

import Api from "../../../libs/api";
import { User } from "../../../components/icons";
import { userAgent } from "next/server";

const objectifs : {name: string, status: string, result: string, date_debut: string, date_fin: string}[] = [
  {
    name: "Objectif 2",
    date_debut: "2022-07-10",
    date_fin: "2022-08-10",
    result: "100",
    status: "Terminé"
  },
  {
    name: "Objectif 1",
    date_debut: "2022-08-20",
    date_fin: "2022-09-30",
    result: "100",
    status: "En cours"
  },
]

export default () => {

  const [assignations, setAssignations] = useState<AssignationType[]>([]);
  const [errors,setErrors] = useState<ErrorsType>({});
  const [user, setUser] = useState<UserType>(userDefault);

  useEffect(()=>{
    if(user.id != undefined){
      Api.get(`assignations/user/${user.id}`).then( res => {
        setAssignations(() => res.data);
      })
    }
  },[user]);

  return <>
    <Head>
      <title> Dekap - Action </title>
    </Head>
    <Dashboard breadcrumb={[
      {link: "/user/actions/objectifs", label: "Actions commerciales"},
      {link: "/user/actions/objectifs", label: "Objectifs"}
    ]} user={user}  setUser={setUser}>
        <h3 className="text-xl mt-4 text-gray-700"> Les objectifs </h3>
        <div className="mt-4">
          <Table>
            <Table.Head>
                <Table.HeadCell>
                  Objectif 
                </Table.HeadCell>
                <Table.HeadCell>
                  Result attendu
                </Table.HeadCell>
                <Table.HeadCell>
                  Date de debut
                </Table.HeadCell>
                <Table.HeadCell>
                  Date de fin
                </Table.HeadCell>
                <Table.HeadCell>
                  Status
                </Table.HeadCell>
                <Table.HeadCell>
                  Actions
                </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {
                assignations.map( item => <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="font-medium text-gray-900 dark:text-white w-[300px]">
                    {item.objectif.intitule_obj}
                  </Table.Cell> 
                  <Table.Cell>
                    {item.valeur_eval}
                  </Table.Cell>
                  <Table.Cell>
                    {item.date_deb}
                  </Table.Cell>
                  <Table.Cell>
                    {item.date_fin}
                  </Table.Cell>
                  <Table.Cell className={`${item.filled ? 'text-green-600' : 'text-red-600'}`}>
                    {item.filled ? "Données remplies" : "En attente"}
                  </Table.Cell>
                  <Table.Cell className="flex gap-2">
                    <a href={`/user/actions/${item.filled ? "modifier-resultat?id="+item.score_id : "entrer-resultat?id="+item.id}`} className="border border-green-700 px-4 py-1.5 text-xs rounded-lg "> Gerer </a>
                  </Table.Cell>
                </Table.Row>)
              }        
            </Table.Body>
          </Table>
        </div>
    </Dashboard>
  </>
}