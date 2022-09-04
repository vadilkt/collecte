import {Spinner } from "flowbite-react";
import { checkLoading} from "../libs/helpers";
import { LoadingType } from "../libs/types";

type Props = {
    loading: LoadingType,
    item: string,
    text: string,
    alt: string
}

export default ({loading, item, text, alt}: Props) => {
    return <>
        {
            checkLoading(loading, item) ? 
            <> 
                <Spinner/>
                <span className="pl-3">{alt}...</span>
            </> : <span>{text}</span> 
        }
    </>
}