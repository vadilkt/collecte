import Head from "next/head"
import Dashboard from "../../../components/admin-dashboard";
import {Table} from "flowbite-react";

const items : {name: string, result: string}[] = [
  {
    name: "Commercial 1",
    result: "80",
  },
  {
    name: "Commercial 2",
    result: "95",
  },
]

export default () => {
  return <>
    <Head>
      <title> Dekap - Action </title>
    </Head>
    <Dashboard breadcrumb={[
      {link: "/admin/actions/objectifs", label: "Actions commerciales"},
      {link: "/admin/actions/objectifs", label: "Consulter objectif"}
    ]}>
        <div className="flex justify-between items-center mt-4">
          <h3 className="text-lg  text-gray-700"> Nom de l'objectif  </h3>
          <div className="text-lg text-gray-700">Result total: 90% </div>
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
                  Actions
                </Table.HeadCell>
            </Table.Head>
            <Table.Body className="divide-y">
              {
                items.map( item => <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                  <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                    {item.name}
                  </Table.Cell>
                  <Table.Cell>
                    {item.result}
                  </Table.Cell>
                  <Table.Cell className="flex gap-2">
                    <a href="#" className="border border-green-700 px-4 py-1.5 text-xs rounded-lg "> Details </a>
                  </Table.Cell>
                </Table.Row>)
              }        
            </Table.Body>
          </Table>
        </div>
    </Dashboard>
  </>
}