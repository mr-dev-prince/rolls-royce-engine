class ApiResponse {
    constructor(public status: number, public message: string, public data: any, public error: any) {
        this.status = status;
        this.message = message;
        this.data = data;
        this.error = error;
    }

    static success(status: number, data: any, message: string) {
        return new ApiResponse(status, message, data, null);
    }

    static error(status: number, error: any, message: string) {
        return new ApiResponse(status, message, null, error);
    }

}

export { ApiResponse };