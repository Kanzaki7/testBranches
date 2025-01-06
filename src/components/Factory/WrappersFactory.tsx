// import React from "react"
// import "./style.scss"

enum EWrapperType {
    RED = 1,
    GREEN = 2,
    BLUE = 3,
}

type WrapperFactoryProps = {
    children?: React.ReactNode
    custom_style?: string | null;
    wrapper_type:EWrapperType
};

interface MidWrapperProps extends WrapperFactoryProps {
    max_width:number
}



// Function to handle wrapper styling
const handleStyle = (custom_style: string | null, type:EWrapperType): string => {
    const redStyle: string = "flex flex-col gap-6 rounded-2xl bg-orange-500 shadow-lg shadow-gray-500/50 h-auto w-[800px] p-7 mt-[15px] transition ease-in-out duration-500 m-2";
    const greenStyle: string = "w-full h-auto p-5 flex flex-col gap-4 rounded-2xl bg-teal-500 shadow-lg shadow-gray-500/50 min-w-[320px] m-2";
    const blueStyle: string = "w-full h-[400] rounded-2xl bg-fuchsia-500 shadow-lg shadow-gray-500/50 flex items-center justify-center m-2";

    if (custom_style) 
    {
        return custom_style;
    }
    else
    {
        switch(type)
        {
            case EWrapperType.RED:
                return redStyle;
            case EWrapperType.GREEN:
                return greenStyle;
            case EWrapperType.BLUE:
                return blueStyle;
            default:
                return blueStyle;
        }
    }
}


// Red wrapper 
export const BaseWrapperWithBorder:React.FC<WrapperFactoryProps> = ({children, custom_style = null, wrapper_type}) => {
    const styles = handleStyle(custom_style, wrapper_type);
    return(
        <section className={styles}>
            {children}
        </section>
    )
}

// Green wrapper 
export const BaseUtilComponentWrapper:React.FC<WrapperFactoryProps> = ({children, custom_style = null, wrapper_type}) => {
    const styles = handleStyle(custom_style, wrapper_type);
    return(
        <section className={styles}>
            {children}
        </section>
    )
}

// Blue wrapper
export const BaseMidComponent:React.FC<MidWrapperProps> = ({children, max_width, custom_style = null, wrapper_type}) => {
    const styles = handleStyle(custom_style, wrapper_type);
    const handle_width = ():string => {
        return `max-w-[${max_width ? max_width.toString().concat("px") : "100px"}]`;
    }
    return(
        <section className={styles}>
            <div className={`w-full h-[400] ${handle_width()} gap-10 pb-10 justify-center flex flex-col`}>
                {children}
            </div>
        </section>
    )
}

// Wrapper Factory
export const WrapperFactory: React.FC<MidWrapperProps> = (props) => {

    const handleFactory = () => {
        switch(props.wrapper_type)
        {
            case EWrapperType.GREEN:
                return <BaseUtilComponentWrapper {...props} />
            case EWrapperType.BLUE:
                return <BaseMidComponent {...props} />
            default:
                return <BaseWrapperWithBorder {...props} />
        }
    }

    return (<>{handleFactory()}</>);
}