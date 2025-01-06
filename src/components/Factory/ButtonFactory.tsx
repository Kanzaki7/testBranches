/**
 * This file is used to handle button factory.
 */

enum EButtonType {
    SHOW = 1,
    HIDE = 2,
    CHANGE = 3,
}

interface IButtonFactoryProps {
    text: string;
    custom_style?: string | null;
    button_type: EButtonType;
    action?: () => void;
}

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, IButtonFactoryProps {}


// Function to handle button styling
const handleStyle = (custom_style: string | null, type:EButtonType): string => {
    const showStyle: string = "text-white bg-sky-600 hover:bg-sky-900 rounded-xxl py-2 px-3 mx-3 text-sm font-semibold w-fit";
    const hideStyle: string = "text-white bg-violet-800 hover:bg-violet-950 rounded-xxl py-2 px-3 mx-3 text-sm font-semibold w-fit";
    const changeStyle: string = "text-primary bg-emerald-500 hover:bg-emerald-800 rounded-xxl py-2 mx-3 px-3 text-sm font-semibold w-fit";

    if (custom_style) 
    {
        return custom_style;
    }
    else
    {
        switch(type)
        {
            case EButtonType.SHOW:
                return showStyle;
            case EButtonType.HIDE:
                return hideStyle;
            case EButtonType.CHANGE:
                return changeStyle;
            default:
                return showStyle;
        }
    }
}

// ShowWrapperButton to show the wrapper
export const ShowWrapperButton: React.FC<IButtonProps> = (props) => {
    const { text, custom_style = null, action, ...rest } = props;
    return (
        <button 
            name="factory button"
            {...rest} 
            className={handleStyle(custom_style, props.button_type)} 
            onClick={action}>
            {text}
        </button>
    );
}

// Hide wrapper button
export const HideWrapperButton:React.FC<IButtonProps> = (props) => {
    const { text, custom_style = null, action, ...rest } = props;
    return(
        <button 
            name="factory button"
            {...rest} 
            className={handleStyle(custom_style, props.button_type)} 
            onClick={action}>
            {text}
        </button>
    )
}

/**
 * Change wrapper button
 * @param props 
 * @returns 
 */
export const ChangeWrapperButton:React.FC<IButtonProps> = (props) => {
    const { text, custom_style = null, action, ...rest } = props;

    return(
        <button 
            {...rest} 
            className={handleStyle(custom_style, props.button_type)}
            onClick={action}>
            {text}
        </button>
    )
}

// Button Factory
export const ButtonFactory: React.FC<IButtonProps> = (props) => {

    const handleFactory = () => {
        switch(props.button_type)
        {
            case EButtonType.HIDE:
                return <HideWrapperButton {...props} />
            case EButtonType.CHANGE:
                return <ChangeWrapperButton {...props} />
            default:
                return <ShowWrapperButton {...props} />
        }
    }

    return (<>{handleFactory()}</>);
}