export declare const Configs: {
    type: string;
    schema: {
        name: string;
        type: string;
        schema: ({
            name: string;
            type: string;
            default: number;
        } | {
            name: string;
            type: string;
            default: boolean;
        } | {
            name: string;
            type: string;
            default: string;
        })[];
    }[];
};
