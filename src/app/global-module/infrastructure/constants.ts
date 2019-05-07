import { environment } from '../../../environments/environment';


export class Constants {

    static uiRoutes = {
        login: 'login',
        shop: 'shop',
        cart: 'cart'
    };

    static businessExceptions = {
        SessionExpired: 'SessionExpired',
        SessionKilled: 'SessionKilled',
        ErrorCode: 'ErrorCode',
        MessageCode: 'MessageCode'
    };

    static webApis = {
        getSharedData: environment.apiUrl + '/employee/info',
        getNews:'https://newsapi.org/v2/everything?q=',
        NewsToken :'&apiKey=ef9cf7d7f1e140bf8cf0ef9baf8e9318'
    };

    static queryString = {
        SessionExpired: 'SessionExpired=true'
    };

    static localStorageKeys = {
        sessionId: 'sessionId'
    };

    static cookies =
    {
        sessionId: 'SessionId',
        apiContext: 'apiContext'
    };

}
