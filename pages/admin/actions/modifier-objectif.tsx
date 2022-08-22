import Head from "next/head"
import Dashboard from "../../../components/admin-dashboard";
import {TextInput, Button, Label} from "flowbite-react";

export default () => {
  return <>
    <Head>
      <title> Dekap - Action </title>
    </Head>

    <Dashboard breadcrumb={[
      {link: "/admin/actions/objectifs", label: "Actions commerciales"},
      {link: "/admin/actions/modifier-objectif", label: "Modifier objectif"}
    ]}>
        <h3 className="text-xl mt-4 text-gray-700"> Modifier un objectif </h3>
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
                value="Nom de l'objectif a modifier"
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
                value="Nom de l'evaluateur a modifier"
                required={true}
              />
            </div>
            <div className="flex justify-between items-center mt-4">
              <Button color="success" >
                Modifier l'objectif
              </Button>
            </div>
          </form>
        </div>
    </Dashboard>
  </>
}