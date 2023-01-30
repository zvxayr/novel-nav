export const switchValues =
    (whenTrue: string, whenFalse: string, whenNull?: string) =>
    (switchValue: boolean | null): string => {
        switch (switchValue) {
            case true:
                return whenTrue;
            case false:
                return whenFalse;
            default:
                return whenNull || whenFalse;
        }
    };

export const pickProp =
    <T extends object, K extends keyof T, R>(prop: K, fn: (value: T[K]) => R) =>
    (props: T): R =>
        fn(props[prop]);
