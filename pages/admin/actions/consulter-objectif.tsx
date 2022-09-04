import Head from "next/head"
import Dashboard from "../../../components/admin-dashboard";
import {Table} from "flowbite-react";

import {  ErrorsType, AssignationType,assignationDefault } from "../../../libs/types";
import { useEffect, useState } from "react";

import ModalErrors from "../../../components/modals/modal-errors";

import Api from "../../../libs/api";
import { extractFromUrlQuery } from "../../../libs/helpers";

export default () => {

  const [assignation, setAssignation] = useState<AssignationType>(assignationDefault);
  const [errors,setErrors] = useState<ErrorsType>({});

  useEffect(()=>{
    Api.get(`assignations/${extractFromUrlQuery("id")}`).then( res => {
      setAssignation(() => res.data);
    })
  },[]);

  return <>
    <Head>
      <title> Dekap - Action </title>
    </Head>
    <Dashboard breadcrumb={[
      {link: "/admin/actions/objectifs", label: "Actions commerciales"},
      {link: "/admin/actions/objectifs", label: "Consulter objectif"}
    ]}>
        <div className="flex justify-between items-center mt-4">
          <h3 className="text-lg  text-gray-700"> {assignation.objectif.intitule_obj}  </h3>
        </div>
       
        <div className="mt-4">
          <Table>
            <Table.Head>
                <Table.HeadCell>
                  Nom du commercial
                </Table.HeadCell>
                <Table.HeadCell>
                  Result
                </Table.HeadCell>
                <Table.HeadCell>
                  Performance
                </Table.HeadCell>
                <Table.HeadCell>
                  Moyens
                </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {
                assignation.scores.map( item => <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {item.user.noms} {item.user.prenoms}
                  </Table.Cell>
                  <Table.Cell>
                    {item.valeur_score}
                  </Table.Cell>
                  <Table.Cell>
                    {(item.valeur_score/assignation.valeur_eval)*100}%
                  </Table.Cell>
                  <Table.Cell>
                    {JSON.parse(item.moyens.toString()).join(", ")}
                  </Table.Cell>
                </Table.Row>)
              } 
              {
                assignation.pending.map( item => <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {item.user.noms} {item.user.prenoms}
                  </Table.Cell>
                  <Table.Cell className="text-red-600">
                    En attente
                  </Table.Cell>
                  <Table.Cell className="text-red-600">
                   /
                  </Table.Cell>
                  <Table.Cell className="text-red-600">
                    /
                  </Table.Cell>
                </Table.Row>)
              }        
            </Table.Body>
          </Table>
        </div>
    </Dashboard>
  </>
}