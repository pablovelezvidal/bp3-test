import { InjectionToken } from "@angular/core";
/* Injecteds tokens avoid naming collisions
const TOKEN_A = new InjectionToken('token');
const TOKEN_B = new InjectionToken('token');
TOKEN_A === TOKEN_B // false */

export let APP_CONFIG = new InjectionToken("app.config");

export interface IAppConfig {
     apiUrl : string,
}

export const AppConfig: IAppConfig = {    

     apiUrl : "https://api.jsonbin.io/b",
};