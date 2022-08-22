import Head from "next/head"
import Dashboard from "../../../components/admin-dashboard";
import {Table} from "flowbite-react";

const objectifs : {name: string, evaluateur: string}[] = [
  {
    name: "Objectif 1",
    evaluateur: "Evaluateur 1"
  },
  {
    name: "Objectif 2",
    evaluateur: "Evaluateur 2"
  }
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
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {objectif.name}
                  </Table.Cell>
                  <Table.Cell>
                    {objectif.evaluateur}
                  </Table.Cell>
                  <Table.Cell className="flex gap-2">
                    <a href="/admin/actions/modifier-objectif" className="border border-green-700 px-4 py-1.5 text-xs rounded-lg "> Modifier </a>
                    <a href="/admin/actions/assigner-objectif" className="border border-green-700 px-4 py-1.5 text-xs rounded-lg "> Assigner </a>
                  </Table.Cell>
                </Table.Row>)
              }        
            </Table.Body>
          </Table>
        </div>
    </Dashboard>
  </>
}