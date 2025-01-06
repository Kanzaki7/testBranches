import React from "react"
import "./style.scss"

type WrapperProps = {
    children?: React.ReactNode
};

interface MidWrapperProps extends WrapperProps {
    max_width:number
}


export const BaseWrapperWithBorder:React.FC<WrapperProps> = ({children}) => {
    return(
        <section className="flex flex-col gap-6 rounded-2xl border border-gray-300 w-full h-auto w-800 p-7 mt-15 transition ease-in-out duration-500 c-wrapper__border">
            {children}
        </section>
    )
}

export const BaseUtilComponentWrapper:React.FC<WrapperProps> = ({children}) => {
    return(
        <section className="w-full h-auto p-5 flex flex-col gap-4 border border-gray-300 rounded-xl min-w-[320px]">
            {children}
        </section>
    )
}

export const BaseMidComponent:React.FC<MidWrapperProps> = ({children, max_width}) => {
    const handle_width = ():string => {
        return `max-w-[${max_width ? max_width.toString().concat("px") : "100px"}]`;
    }
    return(
        <section className="w-full h-full flex items-center justify-center">
            <div className={`w-full h-full ${handle_width()} gap-10 pb-10 justify-center flex flex-col`}>
                {children}
            </div>
        </section>
    )
}