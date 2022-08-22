import Head from "next/head"
import Dashboard from "../../../components/admin-dashboard";
import {Table} from "flowbite-react";

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
                  Status
                </Table.HeadCell>
                <Table.HeadCell>
                  Actions
                </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {
                objectifs.map( objectif => <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {objectif.name}
                  </Table.Cell> 
                  <Table.Cell>
                    {objectif.result}
                  </Table.Cell>
                  <Table.Cell>
                    {objectif.date_debut}
                  </Table.Cell>
                  <Table.Cell>
                    {objectif.date_fin}
                  </Table.Cell>
                  <Table.Cell>
                    {objectif.status}
                  </Table.Cell>
                  <Table.Cell className="flex gap-2">
                    <a href="/admin/actions/consulter-objectif" className="border border-green-700 px-4 py-1.5 text-xs rounded-lg "> Consulter </a>
                  </Table.Cell>
                </Table.Row>)
              }        
            </Table.Body>
          </Table>
        </div>
    </Dashboard>
  </>
}