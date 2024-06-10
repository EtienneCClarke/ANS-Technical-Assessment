interface TabsContextProps {
    tab: string;
    setTab: (tab: string) => void;
}

interface TabsProps {
    defaultValue: string;
    children?: any;
}

interface TabsListProps extends React.HTMLAttributes<HTMLDivElement> {
    children?: any;
}

interface TabsTriggerProps extends React.HTMLAttributes<HTMLButtonElement> {
    value: string;
    children?: any;
}

interface TabsContentProps extends React.HTMLAttributes<HTMLDivElement> {
    value: string;
    children?: any;
}

export type {
    TabsContextProps,
    TabsProps,
    TabsListProps,
    TabsTriggerProps,
    TabsContentProps
}