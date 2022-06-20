export default interface IDatabase {
  query(query: string, params?: any): Promise<any>
  close(): Promise<void>
}