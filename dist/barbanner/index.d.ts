declare const Index: (props: {
    title: string;
    starmessage: string;
    arrowmessage: string;
    button?: {
        action: () => void;
        title: string;
        icon: string;
    } | null;
}) => import("react/jsx-runtime").JSX.Element;
export default Index;
