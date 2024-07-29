import { createContext, useState, ReactNode } from 'react';

interface FetchUrlContextProps {
    fetchUrl: string | undefined;
    setFetchUrl: (url: string) => void;
}

export const FetchUrlContext = createContext<FetchUrlContextProps | undefined>(undefined);

export const FetchUrlProvider = ({ children }: { children: ReactNode }) => {
    const [fetchUrl, setFetchUrl] = useState<string>();

    return (
        <FetchUrlContext.Provider value={{ fetchUrl, setFetchUrl }}>
            {children}
        </FetchUrlContext.Provider>
    );
};
