import Head from "next/head"
import Dashboard from "../../../components/admin-dashboard";
import {TextInput, Button, Label} from "flowbite-react";


export default () => {
  return <>
    <Head>
      <title> Dekap - Action </title>
    </Head>
    <Dashboard breadcrumb={
        [
            {link: "/admin/actions/objectifs", label: "Actions commerciales"},
            {link: "/admin/actions/creer-objectif", label: "Creer objectif"}
        ]
    }>
        <h3 className="text-xl mt-4 text-gray-700"> Créer un objectif </h3>
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
                placeholder=""
                required={true}
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
                required={true}
              />
            </div>
            <div className="flex justify-between items-center mt-4">
              <Button color="success" >
                Créer l'objectif
              </Button>
            </div>
          </form>
        </div>
    </Dashboard>
  </>
}