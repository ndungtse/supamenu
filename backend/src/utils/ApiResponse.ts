
export default class ApiResponse<T = any> {
  constructor(
    public data?: T | null | undefined,
    public message: string | null = null,
    public success: boolean = false,
    public error?: string | null | undefined,
    public status?: number | null | undefined
  ) {}
}