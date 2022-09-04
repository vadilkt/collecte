import Head from "next/head"
import Dashboard from "../../../components/admin-dashboard";
import {Table} from "flowbite-react";

import { AssignationType, ErrorsType } from "../../../libs/types";
import { useEffect, useState } from "react";

import ModalErrors from "../../../components/modals/modal-errors";

import Api from "../../../libs/api";

export default () => {

  const [assignations, setAssignations] = useState<AssignationType[]>([]);
  const [errors,setErrors] = useState<ErrorsType>({});


  useEffect(()=>{
    Api.get("assignations").then( res => {
      setAssignations(() => res.data);
    })
  },[]);

  return <>
    <Head>
      <title> Dekap - Action </title>
    </Head>
    <Dashboard breadcrumb={[
      {link: "/admin/actions/objectifs", label: "Actions commerciales"},
      {link: "/admin/actions/objectifs", label: "Objectifs"}
    ]}>
        <h3 className="text-xl mt-4 text-gray-700"> Les objectifs </h3>
        <div className="mt-4">
          <Table>
            <Table.Head>
                <Table.HeadCell>
                  Objectif assignée
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
                  Actions
                </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {
                assignations.map( item => <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="w-[400px] font-medium text-gray-900 dark:text-white">
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
                  <Table.Cell className="flex gap-2">
                    <a href={`/admin/actions/consulter-objectif?id=${item.id}`} className="border border-green-700 px-4 py-1.5 text-xs rounded-lg "> Consulter </a>
                  </Table.Cell>
                </Table.Row>)
              }        
            </Table.Body>
          </Table>
        </div>
        <ModalErrors errors={errors} />
    </Dashboard>
  </>
}