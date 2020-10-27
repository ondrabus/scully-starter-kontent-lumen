import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
    IBaseResponse,
    IHeader,
    IHttpDeleteQueryCall,
    IHttpGetQueryCall,
    IHttpPostQueryCall,
    IHttpPutQueryCall,
    IHttpQueryOptions,
    IHttpService,
    observableRetryStrategy,
    retryService,
    IHttpPatchQueryCall
} from '@kentico/kontent-core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retryWhen } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AngularHttpService implements IHttpService {
    constructor(private http: HttpClient) {}

    get<TRawData extends any>(
        call: IHttpGetQueryCall,
        options?: IHttpQueryOptions
    ): Observable<IBaseResponse<TRawData>> {
        const angularObs = this.http.get(call.url, {
            headers: this.getAngularHeaders(options?.headers)
        });

        return this.mapAngularObservable(angularObs, options);
    }

    post<TRawData extends any>(
        call: IHttpPostQueryCall,
        options?: IHttpQueryOptions
    ): Observable<IBaseResponse<TRawData>> {
        const angularObs = this.http.post(call.url, call.body, {
            headers: this.getAngularHeaders(options?.headers)
        });

        return this.mapAngularObservable(angularObs, options);
    }

    patch<TRawData extends any>(
        call: IHttpPatchQueryCall,
        options?: IHttpQueryOptions
    ): Observable<IBaseResponse<TRawData>> {
        const angularObs = this.http.patch(call.url, call.body, {
            headers: this.getAngularHeaders(options?.headers)
        });

        return this.mapAngularObservable(angularObs, options);
    }

    put<TRawData extends any>(
        call: IHttpPutQueryCall,
        options?: IHttpQueryOptions
    ): Observable<IBaseResponse<TRawData>> {
        const angularObs = this.http.put(call.url, call.body, {
            headers: this.getAngularHeaders(options?.headers)
        });

        return this.mapAngularObservable(angularObs, options);
    }

    delete<TRawData extends any>(
        call: IHttpDeleteQueryCall,
        options?: IHttpQueryOptions
    ): Observable<IBaseResponse<TRawData>> {
        const angularObs = this.http.delete(call.url, {
            headers: this.getAngularHeaders(options?.headers)
        });

        return this.mapAngularObservable(angularObs, options);
    }

    private mapAngularObservable<TRawData extends any>(
        obs: Observable<any>,
        options?: IHttpQueryOptions
    ): Observable<IBaseResponse<TRawData>> {
        return obs.pipe(
            map(
                (response) =>
                    <IBaseResponse<TRawData>>{
                        data: response,
                        response: response,
                        headers: [],
                        status: response
                    }
            ),
            retryWhen(
                observableRetryStrategy.strategy(
                    retryService.getRetryStrategyFromStrategyOptions(options?.retryStrategy),
                    {
                        startTime: new Date()
                    }
                )
            ),
            catchError((error) => {
                if (options && options.logErrorToConsole) {
                    console.warn(`Kentico Kontent Angular HTTP service encountered an error: `, error);
                }

                return throwError(error);
            })
        );
    }

    private getAngularHeaders(headers?: IHeader[]): HttpHeaders {
        let angularHeaders = new HttpHeaders();

        if (!headers) {
            return angularHeaders;
        }

        for (const header of headers) {
            angularHeaders = angularHeaders.append(header.header, header.value);
        }

        return angularHeaders;
    }
}