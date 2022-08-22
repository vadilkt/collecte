import Head from "next/head"
import Dashboard from "../../../components/dashboard";
import {TextInput, Button, Label} from "flowbite-react";


export default () => {
  return <>
    <Head>
      <title> Dekap - Action </title>
    </Head>
    <Dashboard breadcrumb={
        [
            {link: "/admin/actions/objectifs", label: "Actions commerciales"},
            {link: "/admin/actions/creer-objectif", label: "Entrer les resultats"}
        ]
    }>
        <h3 className="text-xl mt-4 text-gray-700"> Entrer les resultats </h3>
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
                value="Nom de l'objectif"
                required={true}
                disabled={true}
              />
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
                required={true}
              />
            </div>

            <div className="flex justify-between items-center mt-4">
              <Button color="success" >
                Enregistrer
              </Button>
            </div>
          </form>
        </div>
    </Dashboard>
  </>
}