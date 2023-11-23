export declare const Configs: {
    type: string;
    schema: ({
        name: string;
        type: string;
        default: number;
        description: string;
        array?: undefined;
        tags?: undefined;
        select?: undefined;
    } | {
        name: string;
        type: string;
        default: number;
        description?: undefined;
        array?: undefined;
        tags?: undefined;
        select?: undefined;
    } | {
        name: string;
        type: string;
        array: boolean;
        default?: undefined;
        description?: undefined;
        tags?: undefined;
        select?: undefined;
    } | {
        name: string;
        type: string;
        array: boolean;
        tags: boolean;
        default?: undefined;
        description?: undefined;
        select?: undefined;
    } | {
        name: string;
        type: string;
        description: string;
        select: boolean;
        default: number;
        array?: undefined;
        tags?: undefined;
    })[];
};
