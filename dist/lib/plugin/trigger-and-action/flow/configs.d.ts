export declare const Configs: {
    type: string;
    schema: {
        name: string;
        type: string;
        schema: ({
            name: string;
            type: string;
            default: number;
            description: string;
            array?: undefined;
            select?: undefined;
            schema?: undefined;
        } | {
            name: string;
            type: string;
            description: string;
            array: boolean;
            select: boolean;
            default?: undefined;
            schema?: undefined;
        } | {
            name: string;
            type: string;
            schema: ({
                name: string;
                type: string;
                default: number;
                description: string;
                array?: undefined;
            } | {
                name: string;
                type: string;
                default: number;
                description?: undefined;
                array?: undefined;
            } | {
                name: string;
                type: string;
                array: boolean;
                default?: undefined;
                description?: undefined;
            })[];
            array: boolean;
            default?: undefined;
            description?: undefined;
            select?: undefined;
        })[];
        array: boolean;
    }[];
};
