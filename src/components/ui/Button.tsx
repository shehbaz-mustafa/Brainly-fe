
export interface ButtonProps {
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    text: string;
    startIcon: any;
    endIconL: any;
    onClick: () => void;
}

export const Button = (props: ButtonProps ) => {
    return <button></button>
}

<Button variant ="primary"  size="md" onClick={} text ={}></Button>