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
        <h3 className="text-xl mt-4 text-gray-700"> Assigner un objectif </h3>
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
                value="Nom de l'objectif a assigner"
                required={true}
                disabled={true}
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
                value="Nom de l'evaluateur a assigner"
                required={true}
                disabled={true}
              />
            </div>

            <div>
              <div className="mb-2 block">
                <Label
                  htmlFor="result"
                  value="Resultat attendu"
                />
              </div>
              <TextInput
                id="result"
                type="text"
                required={true}
              />
            </div>

            <div className="flex flex-wrap">  
              <div className="w-full md:w-1/2 pr-2">
                <div className="mb-2 block">
                  <Label
                    htmlFor="date_debut"
                    value="Date de debut"
                  />
                </div>
                <TextInput
                  id="date_debut"
                  type="date"
                  placeholder=""
                  required={true}
                />
              </div>
              <div className="w-full md:w-1/2 pl-2">
                <div className="mb-2 block">
                  <Label
                    htmlFor="date_fin"
                    value="Date de fin"
                  />
                </div>
                <TextInput
                  id="date_fin"
                  type="date"
                  placeholder=""
                  required={true}
                />
              </div>
            </div>

            <div className="flex justify-between items-center mt-4">
              <Button color="success" >
                Assigner l'objectif
              </Button>
            </div>
          </form>
        </div>
    </Dashboard>
  </>
}