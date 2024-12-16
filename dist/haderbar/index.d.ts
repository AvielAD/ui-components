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
    uriconfigs: Array<{
        uri: string;
        name: string;
        icon: string;
    }>;
}) => import("react/jsx-runtime").JSX.Element;
export default Index;
