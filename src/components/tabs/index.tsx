import { createContext, useContext, useState } from "react";
import { TabsContentProps, TabsContextProps, TabsListProps, TabsProps, TabsTriggerProps } from "./tabs.types";
import css from "./tabs.module.css";

const TabsContext = createContext<TabsContextProps>({
    tab: "",
    setTab: (_tab: string) => {}
})

const useTabs = () => useContext(TabsContext);

const Tabs = ({ defaultValue, children }: TabsProps) => {

    const [tab, setTab] = useState<string>(defaultValue);

    return (
        <TabsContext.Provider value={{ tab, setTab }}>
            <div className={css.tabs__wrapper}>
                {children}

            </div>
        </TabsContext.Provider>
    )

}

const TabsList = ({ children, ...props }: TabsListProps) => {
    return (
        <div className={css.tabs_list__container} {...props}>
            {children}
        </div>
    )
}

const TabsTrigger = ({ value, children }: TabsTriggerProps) => {

    const { tab, setTab } = useContext(TabsContext);

    const handleOnClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setTab(value);
    }

    return (
        <button
            onClick={handleOnClick}
            className={css.tab_button}
            disabled={tab === value}
            aria-pressed={tab === value}
        >
            {children}
        </button>
    )
}

const TabsContent = ({ value, children }: TabsContentProps) => {

    const { tab } = useContext(TabsContext);

    if(tab !== value) return <></>;

    return (
        <div
            className={css.tabs_content__container}
        >
            {children}
        </div>
    )
}

export {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
    useTabs
}