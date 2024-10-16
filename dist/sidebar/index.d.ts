declare const Index: (props: {
    routes: Array<{
        route: string;
        nameroute: string;
        icon: string;
    }>;
    actions: Array<{
        nameaction: string;
        action: boolean;
        setaction: () => void;
    }>;
}) => import("react/jsx-runtime").JSX.Element;
export default Index;
