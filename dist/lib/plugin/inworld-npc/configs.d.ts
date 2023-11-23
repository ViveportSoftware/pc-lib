export declare const Configs: {
    type: string;
    schema: {
        name: string;
        type: string;
        schema: ({
            name: string;
            type: string;
            description: string;
            select?: undefined;
            default?: undefined;
            desc?: undefined;
        } | {
            name: string;
            type: string;
            description: string;
            select: boolean;
            default: number;
            desc?: undefined;
        } | {
            name: string;
            type: string;
            description: string;
            default: number;
            select?: undefined;
            desc?: undefined;
        } | {
            name: string;
            type: string;
            desc: string;
            description?: undefined;
            select?: undefined;
            default?: undefined;
        })[];
    }[];
};
