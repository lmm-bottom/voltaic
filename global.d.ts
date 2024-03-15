interface IResponse<T> {
    code: number;
    data: T;
    message: string;
}

type RES<T> = Promise<IResponse<T>>