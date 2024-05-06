export interface ICloudinaryResource {
  asset_id: string;
  public_id: string;
  format: string;
  version: number;
  resource_type: string;
  type: string;
  created_at: Date | string;
  bytes: number;
  width: number;
  height: number;
  folder: string;
  access_mode: string;
  url: string;
  secure_url: string;
}
