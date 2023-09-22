declare global {

  interface PageQuery {
    size: number;
    page: number;
  }

  /**
   * API Response
   */
  interface CommonResponse<T> {
    isError: boolean;
    responseCode: number;
    message: string;
    data: T;
    pagination?: Pagination;
    sentDate?: string;
  }

  /**
   * select option
   */
  interface OptionType {
    label: string;
    value: number | string;
    children?: OptionType[];
  }
}
export {};