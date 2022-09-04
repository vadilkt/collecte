import Head from "next/head"
import Dashboard from "../../../components/admin-dashboard";
import {Table} from "flowbite-react";
import { useState } from "react";

import {ObjectifType } from "../../../libs/types";

import Api from "../../../libs/api";

export default () => {

  const [objectifs, setObjectifs] = useState<ObjectifType[]>([]);

  Api.get("objectifs").then( res => {
    setObjectifs(() => [...res.data.data])
  });

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
                  Nom de l'objectif
                </Table.HeadCell>
                <Table.HeadCell>
                  Evaluateur de l'objectif
                </Table.HeadCell>
                <Table.HeadCell>
                  Actions
                </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {
                objectifs.map( objectif => <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="w-[400px] font-medium text-gray-900 dark:text-white">
                    {objectif.intitule_obj}
                  </Table.Cell>
                  <Table.Cell>
                    {objectif.intitule_eval}
                  </Table.Cell>
                  <Table.Cell className="flex gap-2">
                    <a href={`/admin/actions/modifier-objectif?id=${objectif.id}`} className="border border-green-700 px-4 py-1.5 text-xs rounded-lg "> Modifier </a>
                    <a href={`/admin/actions/assigner-objectif?id=${objectif.id}`} className="border border-green-700 px-4 py-1.5 text-xs rounded-lg "> Assigner </a>
                  </Table.Cell>
                </Table.Row>)
              }        
            </Table.Body>
          </Table>
        </div>
    </Dashboard>
  </>
}