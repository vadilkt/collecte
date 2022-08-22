import {Footer} from "flowbite-react";

type LayoutProps = {
    children : React.ReactNode
}

const styles = {
    backgroundImage: "url(/images/background.png)"
}
  
export default ( {children}: LayoutProps) => {
    return  <main className="text-gray-800 text-sm">
            <div className="min-h-screen bg-cover" style={styles}>
                {children}
            </div>
            <Footer container={true}>
                <Footer.Copyright
                    href="#"
                    by="DEKAP-LAH - Données Commerciales"
                    year={2022}
                />
                <Footer.LinkGroup>
                    <Footer.Link href="/">
                        Accueil
                    </Footer.Link>
                    <Footer.Link href="/login">
                        Connexion
                    </Footer.Link>
                    <Footer.Link href="/register">
                        S'inscrire
                    </Footer.Link>
                    <Footer.Link href="/admin-login">
                        Adminstrer
                    </Footer.Link>
                </Footer.LinkGroup>
            </Footer>
  </main>
}